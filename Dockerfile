FROM registry.mn.nafis.cloud/base/node:14.18.1-slim
WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY ./ /app
RUN yarn build
EXPOSE 5003
CMD ["yarn", "start"]