var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var logSomething = function (text, num) {
    if (num === void 0) { num = 3; }
    for (var i = 0; i < num; i++) {
        console.log(text);
    }
};
var getAdultPerson = function (persons) {
    var adultPerson = persons.filter(function (person) { return person.age >= 18; });
    return adultPerson;
};
var person = [
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
];
var adultPerson = getAdultPerson(person);
var reverseArray = function () {
    var text = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        text[_i] = arguments[_i];
    }
    var reverseArray = text.reverse();
    console.log(text);
};
// reverseArray('apple', 'orange', 'banana', 'pinapple', 'mango');
// Problem 4: Typescript class................................................................
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDetails = function () {
        return "Hi, ".concat(this.name, ". your age is ").concat(this.age);
    };
    return Person;
}());
var newPerson1 = new Person('Fahad', 21);
// console.log(newPerson1.getDetails());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, grade) {
        var _this = _super.call(this, name, age) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.getGread = function () {
        return this.grade;
    };
    return Student;
}(Person));
var student1 = new Student('Mohammad', 21, 4.44);
var getString = function (text) {
    if (typeof text === 'string') {
        return "String gotten. Your expected string is \"".concat(text, "\"");
    }
    else {
        return "Error! ".concat(text, " is not string. Please provide a valid string.");
    }
};
var gettingString = getString(454);
console.log(gettingString);
