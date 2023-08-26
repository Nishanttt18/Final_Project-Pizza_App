import URL from '../utils/constant.js';
export async function makeNetworkCall(){
    try{
    const response = await fetch(URL); //block
    const object = await response.json(); //block
    return object; //wrp promise
    }
    catch(err){
        console.log('some problem in API call ',err);
        throw err; 
    }
    // const promise= fetch(URL); //assign to Thread
    // console,log('promise is ' , promise );
    // promise.then(response =>{
    //     console.log('response is',response);
    //     const promise2 = response.json(); //deserialization
    //     promise2.then(data=>console.log('data is ',data))
    //     .catch(e=>console.log('json parse error',e))
    // }).catch(err=>{console.log('error is ',err);})
}