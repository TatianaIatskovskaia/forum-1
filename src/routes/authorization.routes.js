import {Router} from "express";
import {hasRole} from "../middlewares/authorization.middleware.js";
import {ADMIN} from "../configuration/const.js";

const router = Router();
router.all('/account/user/:user/role/:role', hasRole(ADMIN));

export default router;