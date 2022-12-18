import {
    addNewBook, addNewCompany, changeBooks, changeCompanies, changeNewBook,
    MakeHairStyle,
    moveUserFunc,
    moveUserToOtherHouse,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptop, WithCompaniesType
} from "./07.01"


test("reference type test", () => {
    let user: UserType = {
        name: "sam",
        hair: 32,
        address: {
            city: "Gdansk"
        }
    }

    const awesomeUser = MakeHairStyle(user, 2)

    expect(awesomeUser.hair).toBe(16)
})

test("change something", () => {
    const user: UserWithLaptop = {
        name: "sam",
        hair: 32,
        address: {
            city: "Gdansk",
            house: 48
        },
        laptop: {
            title: "MacBook"
        },
    }

    const movedUser = moveUserFunc(user, "Minsk")

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe("Minsk")
})

test("upgrade laptop to iMac", () => {
    const user: UserWithLaptop = {
        name: "sam",
        hair: 32,
        address: {
            city: "Gdansk",
            house: 48
        },
        laptop: {
            title: "MacBook"
        },
    }

    const modernUser = upgradeUserLaptop(user, "iMac")

    expect(user).not.toBe(modernUser)
    expect(user.laptop).not.toBe(modernUser.laptop)
    expect(user.address).toBe(modernUser.address)
    expect(modernUser.laptop.title).toBe("iMac")
    expect(user.laptop.title).toBe("MacBook")
})

test("upgrade user to cleaver user", () => {
    const user: UserWithLaptop & UserWithBooksType = {
        name: "sam",
        hair: 32,
        address: {
            city: "Gdansk",
            house: 48
        },
        laptop: {
            title: "MacBook"
        },
        books: ["CSS", "JS", "HTML", "TypeScript"]
    }

    const modernUser = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(modernUser)
    expect(user.books).toBe(modernUser.books)
    expect(user.address).not.toBe(modernUser.address)
    expect(modernUser.address.house).toBe(99)
    expect(user.laptop).toBe(modernUser.laptop)
})

test("Gift users new book", () => {
    const user: UserWithLaptop & UserWithBooksType = {
        name: "sam",
        hair: 32,
        address: {
            city: "Gdansk",
            house: 48
        },
        laptop: {
            title: "MacBook"
        },
        books: ["CSS", "JS", "HTML", "TypeScript"]
    }

    const cleaverUser = addNewBook(user, ["BIBLE", "CoolPaper"])

    expect(user).not.toBe(cleaverUser)
    expect(user.books).not.toBe(cleaverUser.books)
    expect(user.address).toBe(cleaverUser.address)
    expect(cleaverUser.laptop).toBe(user.laptop)
    expect(cleaverUser.books[4]).toBe("BIBLE")
    expect(cleaverUser.books[5]).toBe("CoolPaper")
    expect(user.books.length).toBe(4)

})

test("change book JS on TS", () => {
    const user: UserWithLaptop & UserWithBooksType = {
        name: "sam",
        hair: 32,
        address: {
            city: "Gdansk",
            house: 48
        },
        laptop: {
            title: "MacBook"
        },
        books: ["CSS", "JS", "HTML", "TypeScript"]
    }

    const cleaverUser = changeNewBook(user, "JS", "TS")

    expect(user).not.toBe(cleaverUser)
    expect(user.books).not.toBe(cleaverUser.books)
    expect(user.address).toBe(cleaverUser.address)
    expect(cleaverUser.laptop).toBe(user.laptop)
    expect(cleaverUser.books[1]).toBe("TS")
    expect(user.books[1]).not.toBe("TS")
    expect(cleaverUser.books.length).toBe(4)


})

test("remove JS book", () => {
    const user: UserWithLaptop & UserWithBooksType = {
        name: "sam",
        hair: 32,
        address: {
            city: "Gdansk",
            house: 48
        },
        laptop: {
            title: "MacBook"
        },
        books: ["CSS", "JS", "HTML", "TypeScript"]
    }

    const cleaverUser = changeBooks(user, "JS",)

    expect(user).not.toBe(cleaverUser)
    expect(user.books).not.toBe(cleaverUser.books)
    expect(user.address).toBe(cleaverUser.address)
    expect(cleaverUser.laptop).toBe(user.laptop)
    expect(cleaverUser.books[1]).not.toBe("JS")
    expect(cleaverUser.books.length).toBe(3)
    expect(user.books.length).toBe(4)


})

test("add new company", () => {
    const user: UserWithLaptop & WithCompaniesType = {
        name: "sam",
        hair: 32,
        address: {
            city: "Gdansk",
            house: 48
        },
        laptop: {
            title: "MacBook"
        },
        companies: [{id: 1, title: "POCO"}, {id: 2, title: "Company of Dream"}]
    }

    const cleaverUser = addNewCompany(user, 3, "EPAM")

    expect(user).not.toBe(cleaverUser)
    expect(user.address).toBe(cleaverUser.address)
    expect(cleaverUser.laptop).toBe(user.laptop)
    expect(cleaverUser.companies).not.toBe(user.companies)

    expect(cleaverUser.companies.length).toBe(3)
    expect(cleaverUser.companies[0].title).toBe("POCO")
    expect(cleaverUser.companies[1].title).toBe("Company of Dream")
    expect(cleaverUser.companies[2].title).toBe("EPAM")


})

test("update companies", () => {
    const companies = {
        "Sam": [{id: 1, title: "Google"}, {id: 2, title: "EPAM"}],
        "Alena": [{id: 1, title: "Hospital"}]
    }

    let copy = changeCompanies(companies, "Sam", 1, "Yahoo")


    expect(copy["Sam"]).not.toBe(companies["Sam"])
    expect(copy["Alena"]).toBe(companies["Alena"])
    expect(copy["Sam"][0].title).toBe("Yahoo")



})

