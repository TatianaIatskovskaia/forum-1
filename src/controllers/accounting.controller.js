import * as accountingService from '../services/accounting.service.js';


export const registerUser = async (req, res) => {
    const user = await accountingService.registerUser(req.body);
    if (user) {
        res.status(201).json(user);
    } else {
        res.status(409).send();
    }
};

export const logIn = async (req, res) => {
    const user = await accountingService.logIn(req.headers);
    if (user) {
        res.json(user);
    } else {
        res.status(401).send();
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const user = await accountingService.deleteUser(req.params.user);
        return res.json(user);
    } catch (e) {
        return next(e);
    }
};

export const updateUser = async (req, res, next) => {
    try {
        const user = await accountingService.updateUser(req.params.user, req.body);
        return res.json(user);
    } catch (e) {
        return next(e);
    }
};

export const addRole = async (req, res, next) => {
    try {
        const user = await accountingService.addRole(req.params.user, req.params.role);
        return res.json(user);
    } catch (e) {
        return next(e);
    }
};

export const  deleteRole = async (req, res, next) => {
    try {
        const user = await accountingService.deleteRole(req.params.user, req.params.role);
        return res.json(user);
    } catch (e) {
        return next(e);
    }
};

export const changePassword = async (req, res, next) => {
    try {
        const user = await accountingService.changePassword(req.body.password);
        return res.json(user);
    } catch (e) {
        return next(e);
    }
};

export const getUser = async (req, res, next) => {
    try {
        const user = await accountingService.getUser(req.params.user);
        return res.json(user);
    } catch (e) {
        return next(e);
    }
}



