import {addMoneyToBudget, CityType, createMessage, repairHouse, toFireStaff, toHireStaff} from "../03/03-02";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreeterThan} from "./04-02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 0,
                buildAt: 2012,
                repaired: false,
                address: {
                    number: 100
                },
                street: {
                    id: 1,
                    title: "White street"
                }
            },
            {
                id: 1,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100
                },
                street: {
                    id: 1,
                    title: "Happy street"
                }
            },
            {
                id: 2,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101
                },
                street: {
                    id: 1,
                    title: "Happy street"
                }
            },
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: "Central Str"
                },

            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: "South Str"
                },

            },

        ],
        populationOfCity: 1000000,

    }
})


test.skip("Budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
})
test.skip("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[1].budget).toBe(400000)
})
test.skip("house should be repaired", () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBe(true)
})
test.skip("staff should be increased", () => {
    toFireStaff(city.governmentBuildings[0], 20)
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})
test.skip("staff should be hiring", () => {
    toHireStaff(city.governmentBuildings[0], 20)
    expect(city.governmentBuildings[0].staffCount).toBe(220)
})
test.skip("Greeting message", () => {
    const message = createMessage(city);
    expect(message).toBe("Hello New York citizen. I want you be happy. All 1000000")
})
test("Houses should be destroyed", () => {
    demolishHousesOnTheStreet(city, "Happy street")

    expect(city.houses.length).toBe(2)
    expect(city.houses[0].id).toBe(1)
})

test("Building with correct staff count", () => {
    let buildings = getBuildingsWithStaffCountGreeterThan(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe("FIRE-STATION")
})


