import express from 'express'

import createStudent from '../controller/students/createStrudent.js';

const router=express.Router();

router.post("/create",createStudent);

export default router;