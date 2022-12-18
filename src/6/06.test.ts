// type UserType = {
//     name: string
//     age: number
//     address: { title: string }
// }
//
//
// type UsersType = Array<UserType>
// const increaseAge = (user: UserType) => {
//     user.age++;
// }
//
//
// test("big test", () => {
//     let user: UserType = {
//         name: "Sam",
//         age: 32
//     }
//     increaseAge(user)
//     expect(user.age).toBe(33)
//     const superman = user
//     superman.age = 1000
//     expect(user.age).toBe(1000)
// })
//
//
// test("Array test", () => {
//     let users: UsersType = [
//         {
//             name: "Sam",
//             age: 23,
//             address: {
//                 title: "Gdansk"
//             },
//         },
//         {
//             name: "Alena",
//             age: 26,
//             address: {
//                 title: "Gdansk"
//             },
//         },
//         {
//             name: "Sania",
//             age: 26,
//             address: {
//                 title: "Gdansk"
//             },
//         },
//         {
//             name: "Dzienis",
//             age: 45,
//             address: {
//                 title: "Gdansk"
//             },
//         },
//
//     ]
//     let administrators = users
//
//     administrators.push({name: "Bandiugan", age: 10, address: {title: "Gdansk"},})
//
//
//     expect(users[4]).toEqual({name: "Bandiugan", age: 10, address: {title: "Gdansk"}})
//
//
// })
//
//
// test("Value type test", () => {
//     let usersCount = 100;
//     let administratorsCount = usersCount
//     administratorsCount = usersCount + 1
//
//
//     expect(administratorsCount).toEqual(101)
//
//
// })
//
// test("reference type test", () => {
//     let user: UserType = {
//         name: "Sam",
//         age: 32,
//         address: {
//             title: "Gdansk"
//         },
//     }
//     let addr = user.address
//
//     let user2: UserType = {
//         name: "Alena",
//         age: 26,
//         address: user.address
//     }
//
//     user2.address.title = "Rciborz";
//     expect(user.address.title).toBe("Rciborz")
// })
//
// test("reference array type test", () => {
//     const address = {
//         title: "Gdansk"
//     }
//
//     let user: UserType = {
//         name: "Sam",
//         age: 32,
//         address: address
//     }
//     let user2: UserType = {
//         name: "Alena",
//         age: 26,
//         address: address
//     }
//
//     const users = [
//         user, user2, {name: "Sasha", age:23, address}
//     ]
//     const admins = [user, user2]
//
//     admins[0].name = "Samuil Dmitriewicz"
//
//     expect(users[0].name).toBe("Samuil Dmitriewicz")
//     expect(user.name).toBe("Samuil Dmitriewicz")
// })
//
//
//
//
//
//
//
//
