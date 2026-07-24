import {Router} from "express";
import {
    hasRole,
    isAuthor,
    isAuthorOrHasRole,
    isOwner,
    isOwnerOrHasRole
} from "../middlewares/authorization.middleware.js";
import {ADMIN, MODERATOR} from "../configuration/const.js";

const router = Router();
router.all('/account/user/:user/role/:role', hasRole(ADMIN));
router.patch('/account/user/:user', isOwner('user'));
router.delete('/account/user/:user', isOwnerOrHasRole('user', ADMIN));
router.post('/forum/post/:user', isOwner('user'));
router.patch('/forum/post/:id/comment/:author', isOwner('author'));
router.patch('/forum/post/:id', isAuthor('id'));
router.delete('/forum/post/:id', isAuthorOrHasRole('id', MODERATOR));

export default router;