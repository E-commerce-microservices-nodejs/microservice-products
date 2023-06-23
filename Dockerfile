# Stage 1: Build the application
FROM node:16.20-bullseye-slim AS build

# Set environment variables
ENV NODE_ENV=development
ENV MONGO_URI=mongodb://mongodb-service/microservices
ENV PORT=5001

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

RUN npm install

# Copy the source code and build the application
COPY . .
RUN npm run build

# Stage 2: Create the production image
FROM node:16.20-bullseye-slim

# Set environment variables
ENV NODE_ENV=production
<<<<<<< HEAD
=======
ENV MONGO_URI=mongodb://mongodb-service/microservices

>>>>>>> 71a1120d302b4e00f52ce6034ef267c0878c4226
ENV PORT=5001

# Set the working directory
WORKDIR /app

# Copy the build artifacts from the previous stage
COPY --from=build /app/build ./build

# Install only production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Expose the port on which the application listens
EXPOSE 5001

# Use a non-root user for security reasons
USER node

# Start the application
<<<<<<< HEAD
CMD ["node", "build/server.js"]
=======
CMD ["node", "build/server.js"]
>>>>>>> 71a1120d302b4e00f52ce6034ef267c0878c4226
