import User from "../User";
import { TechnologyTypes, TechnologyUpdateTypes } from "./types.technology";
import { randomUUID } from "crypto";

class Technologies {
	public add(
		username: string,
		technologyData: TechnologyUpdateTypes
	) {
		const newId = randomUUID();
		const newTechnologyData = {
			id: newId,
			title: technologyData.title,
			studied: false,
			created_at: new Date(),
			deadline: new Date(technologyData.deadline),
		};

		let userData = User.get(username);
		userData.technologies.push(newTechnologyData);
		User.set(username, userData);

		return newTechnologyData;
	}

	public getByUser(username: string) {
		const userData = User.get(username);
		return userData.technologies;
	}

	public setTechnology(
		username: string,
		id: string,
		newTechnologyData: TechnologyUpdateTypes
	) {
		let userData = User.get(username);
		let newTechnologyDTO = {};
		for (let technology of userData.technologies) {
			if (technology.id === id) {
				technology.title = newTechnologyData.title;
				technology.deadline = new Date(newTechnologyData.deadline);
				newTechnologyDTO = technology;
			}
		}

		User.set(username, userData);
		return newTechnologyDTO;
	}

	public markAsStudied(username: string, id: string) {
		let userData = User.get(username);
		for (let technology of userData.technologies) {
			if (technology.id === id) {
				technology.studied = true;
			}
		}
		User.set(username, userData);
	}

	public exists(username: string, id: string) {
		const userData = User.get(username);
		return userData.technologies.some(technology => technology.id === id);
	}

	public delete(username: string, id: string) {
		let userData = User.get(username);
		userData.technologies = userData.technologies.filter(v => v.id !== id);
		User.set(username, userData);
		return userData.technologies;
	}
}

export default new Technologies();
