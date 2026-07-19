import UserAccount from '../models/userAccount.model.js';

export const addUser = async user => UserAccount.create(user);

export const deleteUser = async user => UserAccount.findByIdAndDelete(user, {returnDocument: 'after'}).exec();

export const updateUser = async (user, data) => UserAccount.findByIdAndUpdate(user, data, {returnDocument: 'after'}).exec()

export const getUser = async user => UserAccount.findById(user).exec();

export const addRole = async (user, role) => UserAccount.findByIdAndUpdate(user, {$addToSet: {roles: role}}, {returnDocument: 'after'}).select('-firstName -lastName').exec();

export const deleteRole = async (user, role) => UserAccount.findByIdAndUpdate(user, {$pull: {roles: role}}, {returnDocument: 'after'}).select('-firstName -lastName').exec();

export const changePassword = async (user, newPassword) => {
    const acc = await UserAccount.findById(user).exec();
    acc.password = newPassword;
    return acc.save();
}