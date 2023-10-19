import { TechnologyTypes, TechnologyUpdateTypes } from "./types.technology";
import { randomUUID } from "crypto";

class Technologies {
	private technologies: Array<TechnologyTypes> = [];

	public add(
		username: string,
		id: string,
		technologyData: TechnologyUpdateTypes
	) {
		const newId = randomUUID();
		const newTechnologyData = {
			id: newId,
			username,
			...technologyData,
		};

		for (let technology of this.technologies) {
			if (technology.id === id) {
				this.technologies.push(newTechnologyData);
			}
		}

		return newTechnologyData;
	}

	public getByUser(username: string) {
		return this.technologies.filter((v) => v.username === username);
	}

	public setTechnology(
		id: string,
		newTechnologyData: TechnologyUpdateTypes
	) {
		for (let technology of this.technologies) {
			if (technology.id === id) {
				technology = {
					id,
					username: technology.username,
					...newTechnologyData,
				};
			}
		}
	}
}

export default new Technologies();
