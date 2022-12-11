import React from "react";

type LessonsType = {
    title: string
}
export type PropsType = {
    name: string
    age: number
    lessons: Array<LessonsType>
}

let props = {
    name: "Sam",
    age: 23,
    lessons: [
        {title: "1"},
        {title: "2"}

    ]
}

export const Distructuring: React.FC<PropsType> = (props) => {
    const {name, age} = props
    return (
        <div>
            <h1>{name}</h1>
            <hr/>
            <h2>{age}</h2>
        </div>


    )
}


