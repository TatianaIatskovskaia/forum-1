import UserAccount from "../models/userAccount.Model.js";
import {MODERATOR, USER, ADMIN} from "./const.js";

export const createAdmin = async () => {
    let admin = await UserAccount.findById('admin').exec();
    if (!admin) {
        admin = new UserAccount({
            login: 'admin',
            password: 'admin',
            firstName: 'Admin',
            lastName: 'Admin',
            roles: [USER, MODERATOR, ADMIN]
        });
        await admin.save();
    }
}