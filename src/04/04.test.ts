


test("it's should be old man", ()=>{
    const age = [18, 20, 34, 54, 94, 12];
    const predicate = (age: number) => {
       return age > 90
    }
    const getOld = age.filter(predicate);
    expect(getOld.length).toBe(1)
    expect(getOld[0]).toBe(94)

})



test("should return courses chipper 160", ()=>{
    const courses = [
        {title: "CSS", price: 110},
        {title: "React", price: 150},
        {title: "Js", price: 200},
    ]
    const chipCourses = courses.filter(courses => courses.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe("CSS")
    expect(chipCourses[1].title).toBe("React")

})


test( "get only completed tasks", () => {
    const task = [
        {id:1, title: "bread", isDone: true},
        {id:2, title: "milk", isDone: true},
        {id:3, title: "cola", isDone: false},
        {id:4, title: "meet", isDone: false},
    ]
const completedTasks = task.filter(i => i.isDone === true)
    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(1)
    expect(completedTasks[1].id).toBe(2)
})
