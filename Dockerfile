FROM node:13-alpine as build
ENV DOCKERIZING=true
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY webpack webpack/
COPY .babelrc .env .eslintrc .prettierrc tsconfig.json ./

COPY src/client ./src/client/
COPY src/common ./src/common/
RUN yarn build:client

VOLUME /static
RUN cp -R ./dist/client/* /static/

COPY src/server ./src/server/
RUN yarn build:server

ENTRYPOINT ["yarn", "run:server"]
