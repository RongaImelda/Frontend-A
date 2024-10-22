// no 1
// a.
function helloworld() {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve("Hello World");
        }, 2000);
    });
}

// b.
async function messages() {
    const msg = await helloworld();
    console.log(msg);
}

//c.
messages();
