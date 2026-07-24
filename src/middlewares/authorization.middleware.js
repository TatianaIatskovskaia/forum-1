import {getPostById} from "../services/post.service.js";

export const hasRole = role => (req, res, next) => {
    const check = req.principal.roles.includes(role.toUpperCase().trim());
    return check ? next() : res.status(403).json({message: 'Access denied'});
}

export const isOwner = name => (req, res, next) => req.principal.userName === req.params[name] ? next() : res.status(403).json({message: 'Access denied'});

export const isOwnerOrHasRole = (name, role) => (req, res, next) => req.principal.userName === req.params[name] || req.principal.roles.includes(role.toUpperCase().trim()) ? next() : res.status(403).json({message: 'Access denied'});

export const isAuthor = (postId) => async (req, res, next) => {
    const post = await getPostById(req.params[postId]);
    const postAuthor = post.author;
    return req.principal.userName === postAuthor ? next() : res.status(403).json({message: 'Access denied'});
}

export const isAuthorOrHasRole = (postId, role) => async (req, res, next) => {
    const post = await getPostById(req.params[postId]);
    const postAuthor = post.author;
    return req.principal.userName === postAuthor || req.principal.roles.includes(role.toUpperCase().trim()) ? next() : res.status(403).json({message: 'Access denied'});
}