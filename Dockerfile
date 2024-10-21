FROM node:20-alpine
WORKDIR /app
RUN yarn global add @nestjs/cli
COPY package.json yarn.lock ./
RUN yarn install --production
COPY . .
RUN yarn build
ENV NODE_ENV=production
ENV PORT=8888
EXPOSE 8888
CMD ["node", "dist/main"]