import {Router} from 'express';
import {
    addRole, changePassword,
    deleteRole,
    deleteUser, getUser,
    logIn,
    registerUser,
    updateUser
} from "../controllers/accounting.controller.js";

const router = Router();

router.post('/register', registerUser);
router.post('/login', logIn);
router.delete('/user/:user', deleteUser);
router.patch('/user/:user', updateUser);
router.patch('/user/:user/role/:role', addRole);
router.delete('/user/:user/role/:role', deleteRole);
router.patch('/password', changePassword);
router.get('/user/:user', getUser);

export default router;

