FROM node:alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# FROM node:latest
# COPY . /app
# COPY package.json .
# WORKDIR /app
# RUN npm install
# EXPOSE 3000
# CMD ["npm", "start"]