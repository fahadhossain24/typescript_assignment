
// Problem 1: Functions and Default Parameters................................................................
type LogSomething = (text: string, num?: number) => void;
const logSomething: LogSomething = (text, num = 3) => {
    for (let i = 0; i < num; i++) {
        console.log(text);
    }
}

// logSomething('Fahad Hossain', 4)
// logSomething('ali Hossain')


// Problem 2: Function and Array................................................................
interface IPerson {
    name: string;
    age: number;
}
type GetAdultPerson = (persons: IPerson[]) => IPerson[];
const getAdultPerson: GetAdultPerson = (persons) => {
    const adultPerson = persons.filter((person: IPerson) => person.age >= 18)
    return adultPerson;
}

const person: IPerson[] = [
    {
        name: "Fahad",
        age: 21
    },
    {
        name: "Jhon",
        age: 17
    },
    {
        name: "Rakib",
        age: 35
    },
]
const adultPerson = getAdultPerson(person)
// console.log(adultPerson)

// Problem 3: Generic function................................................................
type ReverseArray<T> = (...text: Array<T>) => void;
const reverseArray: ReverseArray<string> = (...text) => {
    const reverseArray = text.reverse();
    console.log(text);
}

// reverseArray('apple', 'orange', 'banana', 'pinapple', 'mango');

// Problem 4: Typescript class................................................................
class Person {
    constructor(
        private name: string,
        private age: number
    ) { }
    getDetails(): string {
        return `Hi, ${this.name}. your age is ${this.age}`
    }
}

const newPerson1 = new Person('Fahad', 21);
// console.log(newPerson1.getDetails());

class Student extends Person{
    constructor(
        name: string,
        age: number,
        private grade: number,
    ){ super(name, age) }
    getGread(): number {
        return this.grade;
    }
}

const student1 = new Student('Mohammad', 21, 4.44);
// console.log(student1.getGread());

// Problem 5: unknown type................................................................
type GetString = (text: unknown) => string;
const getString: GetString = (text) => {
    if(typeof text === 'string'){
        return `String gotten. Your expected string is "${text}"`;
    }else{
        return `Error! ${text} is not string. Please provide a valid string.`;
    }
}

const gettingString = getString(454);
console.log(gettingString);