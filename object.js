


function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const wootak = {name : 'wootak', age: 4 };
print(wootak);

console.log(wootak.name);
console.log(wootak['name']);
wootak['hasjob'] = true;

console.log('name' in wootak);
console.log('age' in wootak);
console.log('random' in wootak);


// for..in vs for..of
// for (key in obj)
console.clear();
for (key in wootak) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(value of array) {
    console.log(value);
}

// Fun cloning

const user = { name : 'wootak', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old wasy
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);


const user4 = Object.assign({}, user);