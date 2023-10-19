import { UserTypes, UserUpdateTypes } from "./types.user";
import { randomUUID } from "crypto";

class User {
    private users: Array<UserTypes> = [];

    public exists(username: string): boolean {
        return this.users.some(user => user.username === username);
    }

    public add(userData: UserUpdateTypes) {
        const newId = randomUUID();
        const userDataDTO = { id: newId, ...userData };
        this.users.push(userDataDTO);
        return userDataDTO;
    }

    public getAll() {
        return this.users;
    }

    public getUser(id: string) {
        return this.users.filter(user => user.id === id);
    }
}

export default new User();
