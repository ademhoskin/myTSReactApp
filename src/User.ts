import { faker } from "@faker-js/faker";

export class User {
    name: string;
    location: {
        lat: number
        long: number
    };

    constructor(){
        this.name = faker.person.fullName();
        this.location = {
            lat: faker.location.latitude(),
            long: faker.location.longitude()
        }
    }
}