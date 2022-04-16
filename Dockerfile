FROM node:lts-alpine3.14

WORKDIR '/app'
COPY package.json ./
COPY package-lock.json ./

RUN npm install
COPY . .

RUN ["chmod","+x","entrypoint.sh"]
CMD ["/bin/sh", "entrypoint.sh"]