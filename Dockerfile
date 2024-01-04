# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that Next.js will run on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
