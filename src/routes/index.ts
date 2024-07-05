// v1Router.ts

import { Router } from 'express';
import { authRouter } from './auth'; // Adjust path based on your project structure
import { userRouter } from './user'; // Adjust path based on your project structure

import { rsvpsRouter } from './rsvps';
import { eventRouter } from './event';
// Adjust path based on your project structure

const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/user', userRouter);

v1Router.use('/rsvps', rsvpsRouter);
v1Router.use('/event', eventRouter);

// Mount songRouter under /songs route

export { v1Router };
