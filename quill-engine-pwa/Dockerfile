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
COPY --from=builder /app/build ./build
RUN npm install -g serve
CMD ["serve", "-s", "build"]