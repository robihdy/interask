import 'reflect-metadata';
import 'dotenv-safe/config';
import { createConnection } from 'typeorm';
import { Event } from './entities/Event';
import { User } from './entities/User';
import { COOKIE_NAME, __prod__ } from './constants';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';
import { EventResolver } from './resolvers/event';
import { UserResolver } from './resolvers/user';
import Redis from 'ioredis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { MyContext } from './types';
import cors from 'cors';
import { Question } from './entities/Question';
import { QuestionResolver } from './resolvers/question';
import { createUserLoader } from './utils/createUserLoader';

const main = async () => {
  await createConnection({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    logging: true,
    entities: [User, Event, Question],
  });

  const app = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis(process.env.REDIS_URL);

  app.set('proxy', 1);
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        httpOnly: true,
        sameSite: 'lax',
        domain: __prod__ ? '.robihidayat.me' : undefined,
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET,
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, EventResolver, UserResolver, QuestionResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext =>
      <MyContext>{ req, res, redis, userLoader: createUserLoader() },
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(parseInt(process.env.PORT), () => {
    console.log('listening on port:', process.env.PORT);
  });
};

main().catch((err) => {
  console.error(err);
});
