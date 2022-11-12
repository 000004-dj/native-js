export type ProgrammingType = {
    id: number
    title: string
}
export type AddressType = {
    id: number
    city: string
    street: string
    nbrOfBuild: string
    nbrOfLocal: string
    index: string
}
export type DrumsType = {
    id: number
    whatsNeedForDrums: Array<string>
}
export type MusicType = {
    drums: DrumsType
    guitar: boolean
}
export type HobbyType = {
    music: MusicType
}
export type StudentType = {
    id: number
    name: string
    areStudent: true
    address: AddressType
    hobby: HobbyType
}
// export const sum = (a: number, b: number) => {
//     return a + b
// }

export const addNewSkill = (student: StudentType, skill: string) => {
    student.programming.push(
        {
            id: new Date().getTime(),
            title: skill
        })
}

export const studentsFrom = (s:StudentType) => {
    s.address.city = "Gdansk"

}