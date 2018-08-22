# Use an official Node runtime as a parent image
FROM node:10.9.0-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# Copy the api settings
RUN cp ./src/apiDocker.js ./src/api.js;

# build app for production with minification
RUN npm run build

EXPOSE 8081
CMD [ "http-server", "dist"]

# To build
# $ sudo docker build -t saulobr88/hnvue:latest .
# To run
# $ sudo docker run -d --rm -p 8081:8080 saulobr88/hnvue
#

