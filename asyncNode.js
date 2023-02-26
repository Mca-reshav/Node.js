//Advantage
console.log("start execution");
setTimeout(() => {
    console.log("logic execution...")
}, 2000)
console.log("complete execution")


//Disadvantage
let a = 10, b = 0;
setTimeout(() => {
    b = 20
}, 2000);
console.log(a + b);   //here it will show the answer is 10 but actual answer will be 30 that is the problem with the async mode of node js

//This disadvantage can be overlapped by using the promise method either with promise then and catch or by using the async and await method

//1st Method: Promise
let x = 10, y = 0;
let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20)
    }, 2000)
})
waitingData.then((data) => {
    y = data;
    console.log(x + y)
})



