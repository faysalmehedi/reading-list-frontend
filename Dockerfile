FROM node:14-slim 

WORKDIR /usr/src/app

COPY package.json .

RUN npm install 

COPY . .
ARG BACKEND_URL
ENV REACT_APP_BACKEND_URL=$BACKEND_URL

RUN npm run build 
RUN npm install -g serve 

CMD [ "serve", "-s", "-l", "3000", "build" ]