/// <reference types="@types/google.maps" />

import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";


const cMap = new CustomMap('map');

const user = new User();
const company = new Company();

cMap.addMarker(user);
cMap.addMarker(company);




