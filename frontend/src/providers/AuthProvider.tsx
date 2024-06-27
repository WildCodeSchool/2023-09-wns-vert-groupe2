import { useMeLazyQuery } from "@/gql/graphql";
import React, { ReactElement, createContext, useEffect, useState } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  signOut: () => void;
  me?: {
    id?: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    description?: string;
    birthdate?: Date;
    phoneNumber?: string;
    pictureUrl?: string;
  } | null;
  setMe: React.Dispatch<
    React.SetStateAction<{
      id?: string | undefined;
      email?: string | undefined;
      firstname?: string | undefined;
      lastname?: string | undefined;
      description?: string | undefined;
      birthdate?: Date | undefined;
      phoneNumber?: string | undefined;
      pictureUrl?: string | undefined;
    } | null>
  >;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [me, setMe] = useState<{
    id?: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    description?: string;
    birthdate?: Date;
    phoneNumber?: string;
    pictureUrl?: string;
  } | null>(null);

  const [loadMe, { data, error }] = useMeLazyQuery({
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          await loadMe();
        } catch (err) {
          console.error("Failed to fetch user data:", err);
          setIsLoggedIn(false);
        }
      } else {
        setIsLoggedIn(false);
      }
    };

    checkLoggedIn();
  }, [loadMe]);

  useEffect(() => {
    if (data && data.me) {
      setMe({
        id: data.me.id,
        email: data.me.email,
        firstname: data.me.firstname,
        lastname: data.me.lastname,
        description: data.me.description,
        birthdate: data.me.birthdate,
        phoneNumber: data.me.phoneNumber,
        pictureUrl: data.me.pictureUrl,
      });
      setIsLoggedIn(true);
    } else if (error) {
      setMe(null);
      setIsLoggedIn(false);
    }
  }, [data, error]);

  const signOut = () => {
    localStorage.removeItem("token");
    setMe(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        signOut,
        setMe,
        me,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
