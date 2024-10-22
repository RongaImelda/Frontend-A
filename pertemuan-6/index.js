// 2. Callback Function
// a. No params, args & return value
function sayHello(callback) {
    callback();
}

//b. With params. args & return value
function sayHello(callback) {
    let output = callback("John Doe");
    return output;
}

let output = sayHello(function (fullName) {
    return "Hello" + fullName;
});

console.log(output);