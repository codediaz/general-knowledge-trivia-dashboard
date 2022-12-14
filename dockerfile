FROM node:17-alpine3.15 as builder

RUN apk add --no-cache gcc g++ autoconf make pkgconfig git openssl \
    libressl curl-dev zip unzip supervisor nginx bash

COPY . /usr/src/app

WORKDIR /usr/src/app

EXPOSE 8081

RUN npm install --force

CMD ["npm", "run", "serve"]