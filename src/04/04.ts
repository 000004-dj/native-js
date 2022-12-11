import React from "react";


const age = [18, 20, 34, 54, 94, 12];
let newArr;

const getOld = () => {
    newArr  = age.filter(i => i > 90)
    return newArr
}

export type CoursesType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 110},
    {title: "React", price: 150},
    {title: "Js", price: 200},
]

const chipPredicate = (courses: CoursesType) => {
    return courses.price < 160
}