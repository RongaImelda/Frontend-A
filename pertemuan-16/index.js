// Asynchronous JS

// Synchronous -> single thread -> blocking
console.log("proses 1");
console.log("proses 2");
console.log("proses yg memakan waktu yg lama");
console.log("proses 4");

// Asynchronous JS -> multi thread -> non-blocking
// 1. parallel
setTimeout(() => {
    console.log("proses 1");
}, 5000);
console.log("proses 2");
setTimeout(() => {
    console.log("proses 3");
}, 3000);
console.log("proses 4");
// 2. Concurrent
setTimeout(() => {
    console.log("proses 1");
})