import express from 'express';
const router=express.Router();
import {consultarInscripciones,consultarxAlumno,consultarxCurso,inscribir,calificar,cancelarIncripcion}

router.get('/',consultarInscripciones);
router.get('/xAlumno/:id',consultarxAlumno );
router.get('/xCurso/:id',consultarxCurso );

router.post('/',.inscribir );
router.put('/',.calificar );
router.delete('/estudiante_id/:curso_id'cancelarIncripcion);

export default router;//module.exports=router;