import {mult, splitIntoWords, sum} from "./01";

test ('sum should be correct', () =>{
    //data
    const a = 1;
    const b = 2;
    const c = 3;
    //action
    const result = sum(a,b)
    const result1 = sum(a,c)
    //expect result
    expect(result).toBe(3);
    expect(result1).toBe(4);
})
test ('multiply should be correct', () =>{
    //data
    const a = 1;
    const b = 2;
    const c = 3;
    //action
    const result = mult(a,b)
    const result1 = mult(a,c)
    //expect result
    expect(result).toBe(2);
    expect(result1).toBe(3);
})


test ('splitting into words should be correct', () =>{
    //data
    const sent1 = "Hello my friend!";
    const sent2 = "Js - the best programing language.";
    //action
    const result = splitIntoWords(sent1)
    const result1 = splitIntoWords(sent2)
    //expect result
    expect(result.length).toBe(3)
    expect(result[0]).toBe("Hello")
    expect(result[1]).toBe("my")
    expect(result[2]).toBe("friend!")

    expect(result1.length).toBe(6)
    expect(result1[0]).toBe("Js")
    expect(result1[1]).toBe("-")
    expect(result1[2]).toBe("the")
    expect(result1[3]).toBe("best")
    expect(result1[4]).toBe("programing")
    expect(result1[5]).toBe("language.")

})