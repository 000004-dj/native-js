import {CityType} from "../02/02-02";
import {GovernmentBuildingsType} from "../03/03-02";

export function demolishHousesOnTheStreet (city: CityType, street: string){
    city.houses = city.houses.filter(h => h.street.title === street)
}

export function getBuildingsWithStaffCountGreeterThan(buildings: Array<GovernmentBuildingsType>, staff: number) {
   return buildings.filter(i => i.staffCount > staff)
}