
const API_URL = "https://invalid";
async function handlePromise() {
    const data = await fetch(API_URL);
    const jsonvalue = await data.json();
    console.log(jsonvalue);
//     try{
//         const data = await fetch(API_URL);
//         const jsonvalue = await data.json();
//         console.log(jsonvalue);
//     }

// catch(err){
// console.error(err);
// }// this try{} and catch{} is theone way to handling error another is just handle.promise().catch(err => console.log(err)); 
//  fetch().then(res=>res.json()).then(res => console.log(res))
//  data.jason is also a promise
// fetch()=> response.json = rsult/value/jsonvalue..   and this risponse body is readable stream and json is also promise jason will give to result/value/jsonvalue
 //  fetch() is basically a promise when this is resolve it give you  risponse obj
}
 handlePromise().catch(err => console.log(err));
