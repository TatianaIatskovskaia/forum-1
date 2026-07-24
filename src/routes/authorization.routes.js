import {Router} from "express";
import {hasRole, isOwner, isOwnerOrHasRole} from "../middlewares/authorization.middleware.js";
import {ADMIN} from "../configuration/const.js";

const router = Router();
router.all('/account/user/:user/role/:role', hasRole(ADMIN));
router.patch('/account/user/:user', isOwner('user'));
router.delete('/account/user/:user', isOwnerOrHasRole('user', ADMIN));

export default router;