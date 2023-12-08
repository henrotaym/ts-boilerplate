FROM node:18-alpine as deps

USER node

WORKDIR /usr/src/app

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install --frozen-lockfile --ignore-scripts

COPY --chown=node:node . .

RUN yarn install --frozen-lockfile

# BUILDER
FROM deps as builder

USER node

WORKDIR /usr/src/app

COPY --from=deps --chown=node:node /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

# RUNNER
FROM builder as runner

USER node

WORKDIR /usr/src/app

COPY --chown=node:node --from=builder /usr/src/app ./

CMD yarn dev
