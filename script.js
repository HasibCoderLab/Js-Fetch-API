const URL = "https://catfact.ninja/fact";

const getFacts = async () =>{
    console.log("Geting ......");
    
    let promise =  await fetch(URL);
    console.log(promise.status);
    console.log(promise);

}

