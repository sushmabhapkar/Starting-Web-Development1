// // //var===globally scope
// // //let,const==block of scope
// // // let score;
// // // score=10;
// // // console.log(score);
// // //String,Number,Boolean,null,undefined
// // // const name="susham";
// // // const age=30;
// // // const rating =4.5;
// // // const isCool=true;
// // // const x=null;
// // // const y=undefined;
// // // let z;

// // // console.log(typeof name);//string
// // // console.log(typeof age);//number
// // // console.log(typeof rating);//number
// // // console.log(typeof isCool);//boolean
// // // console.log(typeof x);//object
// // // console.log(typeof y);//undefined
// // // console.log(typeof z);//undefined

// // //concatenation

// // // const name='Onkar';
// // // const age=30;
// // // console.log('My name is ' + name +' age is ' + age);//My name is Onkar age is 30

// // // //String Method
// // // const s='Hello World';
// // // console.log(s.length);//11
// // // console.log(s.toLowerCase());//hello world
// // // console.log(s.toUpperCase());//HELLO WORLD
// // // console.log(s.substring(0,10));//Hello Worl
// // // const s1='technonlogy,computer,it,cse';
// // // console.log(s1.split(' '));//technonlogy,computer,it,cse'

// // //Arrays-variales that hold multiples values.
// // const numbers=new Array(1,2,3,4,5,6);
// // console.log(numbers);//[1, 2, 3, 4, 5, 6]

// // const fruits=['applea','banana','pears','cherry'];
// // console.log(fruits);//'applea', 'banana', 'pears', 'cherry']
// // console.log(fruits[2]);//pears
// // console.log(fruits[2]='greps');//greps
// // console.log(fruits)//['applea', 'banana', 'greps', 'cherry'

// // fruits.push('mango');
// // console.log(fruits);//['applea', 'banana', 'greps', 'cherry', 'mango']

// // fruits.unshift('straberry');
// // console.log(fruits);// ['straberry', 'applea', 'banana', 'greps', 'cherry', 'mango']


// // fruits.pop();
// // console.log(fruits);//['straberry', 'applea', 'banana', 'greps', 'cherry']


// const person={
//     firstName:'sushma',
//     lastNmae:'divekar',
//     age:30,
//     hobbies:['music','sports','movies'],
//     Address:{
//         street:'50 main st',
//         city:'pune',
//         state:'MH'
//     }
//     }
// //alert(person);//OBJECT OBJECT
// console.log(person.firstName);//sushma
// console.log(person.hobbies[2]);//movies
// console.log(person.Address.city);//pune


const todos=[
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting with the boss',
        isCompleted:true
    },
    {
        id:3,
        text:'Take tea',
        isCompleted:true
    }
];
console.log(todos)//(3) [{…}, {…}, {…}]




