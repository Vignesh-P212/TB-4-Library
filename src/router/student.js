import express from 'express'

import createStudent from '../controller/students/createStrudent.js';
import getStudents from '../controller/students/getStudents.js';
import deleteStudents from '../controller/students/detleteStudent.js';
const router=express.Router();

router.post("/create",createStudent);
router.get("/get",getStudents);

router.delete("/delete/:id",deleteStudents);

export default router;