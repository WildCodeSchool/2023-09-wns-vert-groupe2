import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import * as jwt from "jsonwebtoken";
import * as argon2 from "argon2";
import { startStandaloneServer } from "@apollo/server/standalone";
import dataSource from "../config/db";
import { DriverResolver } from "./resolvers/Driver";
import { TripResolver } from "./resolvers/Driver";
import { Driver } from "./entities/driver";
import { UserResolver } from "./resolvers/User";
import { User } from "./entities/user";
import { Driver } from "./entities/trip";

const start = async () => {
  await dataSource.initialize();

  // If no driver was created, create one so the trip form works
  const drivers = await Driver.find();
  if (drivers.length === 0) {
    await Driver.save({ title: "Paris-Lyon" });
  }

  // If no users were created, create an admin and a user
  const users = await User.find();
  if (users.length === 0) {
    // creating users
    const example = new User();
    example.email = "example@gmail.com";
    example.hashedPassword = await argon2.hash("password");
    example.role = "admin";
    example.save();
  }

  // if no trips, create some
  const trips = await Driver.find();
  if (trips.length === 0) {
    // creating trips
    const drivers = await Driver.find();
    const paris = new Driver();
    paris.car = drivers[0];
    paris.licenceNumber = 53256465;
    paris.save();
  }

  const schema = await buildSchema({
    resolvers: [DriverResolver, TripResolver, UserResolver],
    authChecker: ({ context }, roles) => {
      if (roles.length > 0 && context.email) {
        if (roles.includes(context.role)) {
          return true;
        } else {
          return false;
        }
      }
      if (roles.length === 0 && context.email) {
        return true;
      }
      return false;
    },
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => {
      // console.log("headers", req.headers.authorization);
      const token = req.headers.authorization?.split("Bearer ")[1];
      // console.log(token);
      if (token) {
        const payload = jwt.verify(token, "mysupersecretkey");
        console.log("payload", payload);
        return payload;
      }
      return {};
    },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

start();
