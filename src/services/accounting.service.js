import * as userRepository from '../repository/userAccount.repository.js';

export const register = async (user) => {
    try {
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
    //TODO
}

export const getUser = async (login) => {
    const user = await userRepository.getUser(login);
    if (!user) {
        throw new Error(`User with login = ${login} not found`);
    }
    return user;
}