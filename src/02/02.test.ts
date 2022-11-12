import {data} from "./02";
import {CityType} from "./02-02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 0,
                buildedAt: 2012,
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
        governmentBuildings: 100000,

    }
})


test('this city should contains 3 buildings', () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].street.title).toBe("White street")

    expect(city.houses[1].buildedAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].street.title).toBe("Happy street")

    expect(city.houses[2].buildedAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(101)
    expect(city.houses[2].street.title).toBe("Happy street")

})
