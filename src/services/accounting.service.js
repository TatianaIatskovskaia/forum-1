import * as userRepository from '../repository/userAccount.repository.js';
import bcrypt from 'bcrypt';

export const register = async (user) => {
    try {
        const salt = await bcrypt.genSalt(12);
        user.password = await bcrypt.hash(user.password, salt);
        return await userRepository.addUser(user);
    } catch (e) {
        console.log(e)
        throw new Error('User with this login already exists');
    }
}

export const deleteUser = async (login) => {
    const user = await userRepository.deleteUser(login);
    if (!user) {
        throw new Error(`User with login = ${login} not found`);
    }
    return user;
}

export const updateUser = async (login, updateData) => {
    const user = await userRepository.updateUser(login, updateData);
    if (!user) {
        throw new Error(`User with login = ${login} not found`);
    }
    return user;
}

export const changeRoles = async (login, role, isAddRole) => {
    role = role.toUpperCase();
    let user;
    if (isAddRole) {
        user = await userRepository.addRole(login, role);
    } else {
        user = await userRepository.deleteRole(login, role);
    }
    if (!user) {
        throw new Error(`User with login = ${login} not found`);
    }
    return user;
}

export const changePassword = async (login, newPassword) => {
    const salt = await bcrypt.genSalt(12);
    newPassword = await bcrypt.hash(newPassword, salt);
    const user = await userRepository.changePassword(login, newPassword);
    if (!user) {
        throw new Error(`User with login = ${login} not found`);
    }
    return user;
}

export const getUser = async (login) => {
    const user = await userRepository.getUser(login);
    if (!user) {
        throw new Error(`User with login = ${login} not found`);
    }
    return user;
}