import {Router} from 'express';
import {
    addRole, changePassword,
    deleteRole,
    deleteUser, getUser,
    logIn,
    register,
    updateUser
} from "../controllers/accounting.controller.js";
import validate from "../middlewares/validation.middleware.js";

const router = Router();

router.post('/register', validate('register'), register);
router.post('/login', logIn);
router.delete('/user/:user', deleteUser);
router.patch('/user/:user', validate('updateUser'),updateUser);
router.patch('/user/:user/role/:role', validate('roles', 'params'), addRole);
router.delete('/user/:user/role/:role', validate('roles', 'params'), deleteRole);
router.patch('/password', changePassword);
router.get('/user/:user', getUser);

export default router;

