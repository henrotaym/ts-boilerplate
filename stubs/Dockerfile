FROM node:18-alpine as deps

USER node

WORKDIR /app

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install --frozen-lockfile --ignore-scripts

COPY --chown=node:node . .

RUN yarn install --frozen-lockfile

# BUILDER
FROM deps as builder

USER node

WORKDIR /app

COPY --from=deps --chown=node:node /app/node_modules ./node_modules

COPY --chown=node:node . .

# RUNNER
FROM builder as runner

USER node

WORKDIR /app

COPY --chown=node:node --from=builder /app ./

CMD yarn dev
