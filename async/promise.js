'user strict';

// Promise is a JavaScript object for asynchronous operation
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// When new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
       resolve('wootak');
       //reject(new Error('no network')); // 실패한경우
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise.then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error); // 실패한 에러
})
.finally(() => {
 console.log('finally'); // 어떤 기능을 마지막으로 수행하고 싶은 경우
});

//3. Promise chaining
const fetchNuber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});


fetchNuber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error handling
const getMen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('hen'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => egg`), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => cook`), 1000);
    });

getMen() // 
.then(getEgg)
.catch(error => {
    return 'bread';
})
.then(cook)
.then(console.log(meal))
.catch(console.log);