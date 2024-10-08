import  express  from'express';
const router=express.Router();
import {consultarTodos,consultarUno,insertar,modificar,eliminar}
from '../controllers/profesoresController';

router.get('/',.consultarTodos);
router.post('/',.insertar);

router.route('/:id')
    .get(consultarUno)
    .put(modificar)
    .delete(eliminar);

export default router;//module.exports=router;