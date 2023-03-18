alert("Welcome to JavaScript !!!")
console.log("Hello JavaScript")
console.error("This is is an error")
console.warn("This is a warning")

// Variable with var, let and const
const PI = 3.141592653589793
let age = 20
age = 23
console.log("Age: " + age)
const height = 1.59
console.log("Height: " + height)

// Data types: string, number, boolean, null, undefined, object
const fname = 'John '
const lname = "Smith"
const year = 18
const h = 1.65
const gender = true
const x = null
const y = undefined
let z
console.log(typeof z)
console.log('My name is ' + fname + lname + ' and i am ' + year + ' years old')
// template string
console.log(`My name is ${fname}${lname} and i am ${year} years old`)
// Methods of string: length, toUpperCase, toLowerCase, substring, split,...
const s1 = "Hello world"
const s2 = "Teachnology, computer, IT, code, Information"
console.log(s1.length)
console.log(s1.toUpperCase)
console.log(s2.toLowerCase)
console.log(s1.substring(0,5))
console.log(s1.split(''))
console.log(s2.split(','))

// Array
const fruits = ['apple', 'banana', 'kiwi', 'orange', 'cherry']
console.log(fruits[1])
fruits.push('durian') // thêm mới vào cuối mảng
fruits.pop() // xóa thành phần cuối cùng của mảng
console.log(fruits)

// Object
const person = {
    fisrtname : "Xuan ",
    lastname : "Nguyen",
    age : 23,
    major : "Information Technology",
    gender : "Female",
    studentID : 1811202936,
    hobbies : ['music', 'movies', 'books'],
    address : {
        street : "Nguyen Van Qua",
        district : "12",
        city : "Ho Chi Minh",
    }
}
console.log(person.fisrtname + person.lastname + "\n" + person.studentID + "\n" + person.major)
console.log(person.hobbies[1])
console.log(person.address.city)

const todos = [
    {
        id : 1,
        text : "take our trash"
    },
    {
        id : 2,
        text : "meeting with boss"
    },
    {
        id : 3,
        text : "dentist appointment"
    }
]
console.log(todos)

// Loop : for, while, do while, switch...case, if...else...
let sum = 0
for (let i = 0; i<=50; i+=2){
    sum+=i
}
console.log(sum)

for (let i = 0; i<todos.length; i++) {
    console.log(todos[i])
}

let j = 10
while(j<21){
    console.log(j)
    j++
}
// high order array methods : forEach()
todos.forEach(function(todo, i, myTodos){
    console.log(`${i+1} : ${todo.text}`)
})

// Exercise
const courses = [
    {
        courseID: CMP186,
        courseName: 'Công cụ và môi trường phát triển phần mềm',
        courseCredits: 3
    },
    {
        courseID: CMP187,
        courseName: 'Phát triển phần mềm mã nguồn mở',
        courseCredits: 3
    },
    {
        courseID: CMP188,
        courseName: 'Chuyên đề công nghệ phần mềm',
        courseCredits: 3
    },
    {
        courseID: CAP126,
        courseName: 'Ngôn ngữ phát triển ứng dụng mới',
        courseCredits: 3
    }
]
courses.forEach(function (i, course) {
    console.log(`${i+1} : ${course.courseID} - ${course.courseName} - ${course.courseCredits}`)
})