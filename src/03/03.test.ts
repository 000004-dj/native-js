import {addNewSkill, ProgrammingType, studentsFrom} from "./03";

let student: ProgrammingType;

beforeEach(() => {
    student = {
        id: 1,
        name: "S",
        age: 22,
        areStudent: true,
        address: {
            id: 1,
            city: "Minsk",
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
            },
        programming: [
            {
                id: 1,
                title: "React",
            },
            {
                id: 2,
                title: "Angular",
            },
            {
                id: 3,
                title: "TS",
            }
        ],

    };
})
test('add new skill for student', () => {
    expect(student.programming.length).toBe(3)

    addNewSkill(student, "JS")
    expect(student.programming.length).toBe(4)
    expect(student.programming[3].title).toBe("JS")

})

test("Student should will from Gdansk", () => {
    expect(student.address.city).toBe("Minsk")

    studentsFrom(student)

    expect(student.address.city).toBe("Gdansk")
})



