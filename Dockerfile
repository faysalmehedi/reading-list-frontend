FROM node:15-alpine AS build-stage

RUN apk add --update --no-cache \
    python \
    make \
    g++

COPY . /src
WORKDIR /src
COPY ./package* ./
RUN npm install

RUN yarn build

# FROM nginx:latest

FROM nginx:1.13.0-alpine
RUN rm -rf /usr/share/nginx/html
RUN mkdir /usr/share/nginx/html
COPY --from=build-stage /src/build/ /usr/share/nginx/html/

# COPY default.conf /etc/nginx/conf.d/
# COPY nginx.conf /etc/nginx/nginx.conf


RUN apk add --no-cache nginx-mod-http-perl

COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80



