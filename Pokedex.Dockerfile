############
### build ###
############

FROM node:12.8-alpine AS builder
WORKDIR /app
COPY . .
run ls

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN npm install -g @angular/cli@9.1.1
RUN npm install

CMD ls

EXPOSE 4200

CMD ["ng", "s", "--host", "0.0.0.0", "--port", "4200"]