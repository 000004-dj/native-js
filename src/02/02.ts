export type DrumsType = {
    id: number
    whatsNeedForDrums: string

}
export type ProgrammingType = {
        id: number
        JS: boolean
        TS: boolean
        NJS: boolean
        redux: boolean
        angular: boolean

    }
export type AddressType = {
    id: number
    city: string
    street: string
    nbrOfBuild: string
    nbrOfLocal: string
    index: string

}
export type MusicType = {
    drums: DrumsType
    guitar: boolean

}
export type HobbyType = {
    music: MusicType
    programming: ProgrammingType

}
export type StudentType = {
    programming: ProgrammingType;
    id: number
    name: string
    age: number
    areStudent: number
    address: AddressType
    hobby: HobbyType
    somethingElse: Array<string>

}

export const student = {
    id: 1,
    name: "Sam",
    age: 22,
    areStudent: true,
    address: {
        id: 1,
        city: "Gdansk",
        street: "Dębowa",
        nbrOfBuild: "11",
        nbrOfLocal: "49",
        index: "80-204"
    },
    hobby: {
        music: {
            drums: {
                id: 1,
                whatsNeedForDrums: ['sticks', 'pad', 'snare', 'symbols', 'toms', 'chair']
            },
            guitar: true
        },
        programming: {
            id: 2,
            JS: true,
            TS: true,
            NJS: true,
            redux: false,
            angular: false,

        },
    },
    somethingElse: ["123", "hi", "true"],

}
console.log(data)