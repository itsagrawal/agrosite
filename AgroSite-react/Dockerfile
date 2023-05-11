# Use an official Node.js runtime as a parent image
FROM node:20-alpine as build

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Use an official Nginx runtime as a parent image
FROM nginx:alpine

# Copy the built React application from the build stage to the Nginx web server's default directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the Nginx configuration file to the Nginx configuration directory
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the Docker host
EXPOSE 80
EXPOSE 443
# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
