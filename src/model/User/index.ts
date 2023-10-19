import { TechnologyTypes } from "../Technologies/types.technology";
import { UserTypes, UserUpdateTypes } from "./types.user";
import { randomUUID } from "crypto";

class User {
    private users: Array<UserTypes> = [];

    public exists(username: string): boolean {
        return this.users.some(user => user.username === username);
    }

    public add(userData: UserUpdateTypes): UserTypes {
        const newId = randomUUID();
        const userDataDTO = { id: newId, ...userData };
        this.users.push(userDataDTO);
        return userDataDTO;
    }

    public getAll() {
        return this.users;
    }

    public get(username: string): UserTypes {
        return this.users.filter(user => user.username === username)[0];
    }

    public set(username: string, userData: UserTypes) {
        for(let user of this.users) {
            if(user.username === username) {
                user = userData;
            }
        }
    }
}

export default new User();
