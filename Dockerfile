FROM node:13-alpine as build
ENV DOCKERIZING=true
WORKDIR /app

# Install packages
COPY package.json yarn.lock ./
RUN yarn install

# Copy build configs
COPY webpack webpack/
COPY .babelrc .env .eslintrc .prettierrc tsconfig.json ./

# Copy and bundle client source code
COPY src/client ./src/client/
COPY src/common ./src/common/
RUN yarn build:client

# Copy bundled static files to the volume
RUN cp -R dist/client /static/
VOLUME /static

# Copy and bundle nestjs server source code
COPY src/server ./src/server/
RUN yarn build:server

# Install only production packages (deleting other) for further usage in the runtime image
RUN yarn install --prod

FROM astefanutti/scratch-node:13 as runtime
WORKDIR /app
COPY --from=build /app/dist/server ./dist/server/
COPY --from=build /app/node_modules ./node_modules/
ENTRYPOINT ["node", "dist/server/main"]
