import UserAccount from '../models/userAccount.model.js';

export const addUser = user => UserAccount.create(user);