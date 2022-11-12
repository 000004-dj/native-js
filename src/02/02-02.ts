
export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: number
}
export type AddressType = {
    number: number
}
export type StreetType = {
    title: string
}
export type HousesType = {
    id: number
    buildedAt: number
    repaired: boolean
    address: AddressType
    street: StreetType

}



