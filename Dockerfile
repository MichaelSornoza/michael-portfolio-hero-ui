from node:18-alpine as build

WORKDIR /app
COPY . .

RUN yarn install --frozen-lockfile
RUN yarn build
