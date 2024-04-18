FROM node:lts-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY tsconfig.json ./

COPY src ./src
# COPY config ./config 
RUN npm run build

FROM node:lts-alpine as runner
RUN apk --no-cache add curl
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --production
CMD ["npm", "run", "startprod"]
