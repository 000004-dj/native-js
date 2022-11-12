export type GovernmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
}
export type AddressType = {
    street: string
}
export type StreetType = {
    title: string
}
export type HousesType = {
    id: number
    buildAt: number
    repaired: boolean
    address: AddressType
    street: StreetType

}

export const addMoneyToBudget = (buildings: GovernmentBuildingsType, count: number) => {
    buildings.budget += count;
}

export const repairHouse = (house: HousesType) => {
    house.repaired = true
}


export const toFireStaff = (Building: GovernmentBuildingsType, staffToFire: number) => {
    Building.staffCount -= staffToFire;
}

export const toHireStaff = (Building: GovernmentBuildingsType, staffToFire: number) => {
    Building.staffCount += staffToFire;

}

export const createMessage = (city: StreetType) => {
    return `Hello ${city.title} citizen. I want you be happy. All ${city.populationOfCity}`
}