# Building the app
FROM node:latest as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Running the app
FROM node:latest as runner
WORKDIR /app

# copy from build image
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

# remove dev dependencies
RUN npm prune --production

CMD ["npx", "serve", "-s", "build"]