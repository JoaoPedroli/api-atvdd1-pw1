import { TechnologyTypes } from "../Technologies/types.technology";

export type UserTypes = {
	id: string;
	name: string;
	username: string;
	technologies: Array<TechnologyTypes>;
};

export type UserPostTypes = {
	name: string;
	username: string;
};
