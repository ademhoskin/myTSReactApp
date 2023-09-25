import { faker } from "@faker-js/faker";

export class Company {
    name: string;
    slogan: string;
    location: {
        lat: number
        long: number
    };

    constructor(){
        this.name = faker.company.name();
        this.slogan = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.latitude(),
            long: faker.location.longitude()
        }
    }

}
