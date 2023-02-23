import { userEntity } from "../entities/User.entity";
import { LogError, LogSuccess } from "@/utils/logger";

// CRUD

/**
 * Method to obtain all users from Collection "Users" in Mongo Server
 */
export const GetAllUsers = async (): Promise<any[] | undefined> => {

    try {
        let userModel = userEntity();

        // Search all users
        return await userModel.find({isDelete: false});

    } catch (error) {
        LogError(`[OORM ERROR]: Getting all users: ${error}`);
    }
}

// TODO:
// - Get user by id
// - Get user by email
// - Delete user by id
// - Create new user
// - Update user by id
