
//write a program that creates objects containing these itemes.

interface person {
    age : number,
    name : string,
    nationality : string,
    student : Boolean
}
let person :person = {
    age : 26 ,
    name : 'Sara' ,
    nationality : 'Pakistan' ,
    student : true
}
//print person
console.log(person);

//datatype of car object
interface car {
    maker : string,
    color : string,
    automatic : boolean
}
//car object
let car = {
    maker : 'toyota',
    color : 'black',
    automatic : true
}
//print car
console.log(car);