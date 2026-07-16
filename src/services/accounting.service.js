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
    //TODO
}

export const updateUser = async (login, updateData) => {
    //TODO
}

export const changeRoles = async (login, role, isAddRole) => {
    //TODO
}

export const changePassword = async (login, newPassword) => {
    //TODO
}

export const getUser = async (login) => {
    //TODO
}