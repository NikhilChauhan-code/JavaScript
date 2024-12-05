const pr = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("Promise resolve value")
        
    }, 10000);

})
const pr2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("Promise resolve value2")
        
    }, 5000);

})



// function getdata(){
    // JS engine waiting for nothing it will not wait for the promise to resolved
//     pr.then((result) => console.log(result))
//     console.log("namastey javascript")
// }
// getdata();   // without async and await

// this is with async and await and await can only be used inside an async function and write await before promise
async function handlePromise() {
    console.log("hello")
    // JS engine waiting for peromise to resolve in async and await
   const val = await pr;
   console.log(val);
   console.log("namastey Javascript")

   const val2 = await pr2;
   console.log(val2);
   console.log("namastey Javascript2")
}
handlePromise();
console.log("oppss")

