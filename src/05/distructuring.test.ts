import {PropsType} from "./Distructuring";

let props: PropsType;
beforeEach(()=>{
     props = {
        name: "Sam",
        age: 23,
        lessons: [
            {title: "1"},
            {title: "2"}

        ]
    }
})


test("", () => {

    const {age, name, lessons} = props;

    expect(age).toBe(23)
    expect(name).toBe("Sam")
    expect(lessons.length).toBe(2)
})