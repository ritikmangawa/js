const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function() {
        console.log('Async task is complete');
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve, reject)  {
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    } , 1000)
}).then (function() {
    console.log("Async 2 revlved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai ", email: "chai@example.com"})
    } , 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "hitesh", password: "123"})
        } else{
            reject('error : something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username)  => {
    console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(() => console.log("the promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTime (function(){
        let error = true
        if (!error){
            resolve({username: "java",  password: "123"})
        } else{
            reject('error: js went wrong')
        }
    }, 1000)
});