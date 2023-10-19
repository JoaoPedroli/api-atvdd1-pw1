import { randomUUID } from "crypto";
import { UserPostTypes, UserTypes } from "./types.user";

class User {
	private users: Array<UserTypes> = [];

	public exists(username: string): boolean {
		return this.users.some((user) => user.username === username);
	}

	public add(userData: UserPostTypes): UserTypes {
		console.log(userData);
		const newId = randomUUID();
		const userDataDTO = { id: newId, technologies: [], ...userData };
		this.users.push(userDataDTO);
		return userDataDTO;
	}

	public getAll() {
		return this.users;
	}

	public get(username: string): UserTypes {
		return this.users.filter((user) => user.username === username)[0];
	}

	public set(username: string, userData: UserTypes) {
		for (let user of this.users) {
			if (user.username === username) {
				user = userData;
			}
		}
	}
}

export default new User();
