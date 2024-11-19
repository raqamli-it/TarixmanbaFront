FROM node:18.16.0

WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

RUN npm install --legacy-peer-deps
RUN npm install -g vite

# Build the application
COPY . .

RUN npm install --force
# Expose the port the app runs on

EXPOSE 5173

# Start the application
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173" ]
