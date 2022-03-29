'use strict';

// async & await
// clear style of using promise

// 1. async
async function fetchUser() {
    // do network reqeust in 10 secs....
    return 'wootak';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return 'apple';
}

async function getBanana() { // 동기적인 코드를 쓰는 것처럼 만들게 되면 기다렸다가 리턴
    await delay(1000);
    return 'banana';
}

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3.useful Promise APIs

function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + ')
    );
}

pickAllFruits().then(console.log);

function pickOnlyone() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyone().then(console.log);