export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house?: number
    }
}


export type LaptopType = {
    title: string
}
export type UserWithLaptop = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = {
    books: Array<string>
}
export type WithCompaniesType = {
    companies: Array<{ id: number, title: string }>
}
export type CompanyType = {
    id: number
    title: string
}


export function MakeHairStyle(u: UserType, power: number) {
    const userCopy = {
        ...u,
        hair: u.hair / power
    }

    return userCopy
}

export function moveUserFunc(u: UserWithLaptop, city: string) {
    const userCopy = {
        ...u,
        address: {...u.address, city: city}
    }

    return userCopy
}

export const upgradeUserLaptop = (u: UserWithLaptop, laptopTitle: string) => {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptopTitle
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptop & UserWithBooksType, house: number) {
    const userCopy = {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }

    return userCopy
}

export function addNewBook(u: UserWithLaptop & UserWithBooksType, book: Array<string>) {
    return {
        ...u,
        books: [...u.books.concat(book)]
    }


}

export function changeNewBook(u: UserWithLaptop & UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...u,
        books: [...u.books.map(i => oldBook ? newBook : i)]
    }


}

export function changeBooks(u: UserWithLaptop & UserWithBooksType, bookToRemove: string) {
    return {
        ...u,
        books: [...u.books.filter(i => i !== bookToRemove)]
    }
}

export function addNewCompany(u: UserWithLaptop & WithCompaniesType, id: number, title: string) {
    return {
        ...u,
        companies: [...u.companies, {id: id, title: title}]
    }
}


export function changeCompanies(c: { [key: string]: Array<CompanyType> }, userName: string, id: number, title: string) {
     let cCopies = {...c}
    cCopies[userName] = cCopies[userName].map(i => i.id === id ? {...i, title} : i)
    return cCopies
}






