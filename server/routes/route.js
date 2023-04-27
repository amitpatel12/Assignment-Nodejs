import express from 'express';
const route = express.Router()

import { task1, task2, task3, task4, task5 } from '../controller/user-controller.js';

route.get('/users/task1', task1);
route.get('/users/task2', task2);
route.get('/users/task3', task3);
route.get('/users/task4', task4);
route.get('/users/task5', task5);

export default route