// How to strip a property from an object:
const obj = { a: 'username', b: 'email', c: 'password' };

const { c, ...rest } = obj;

const newObj = rest;

console.log(newObj); // { a: 'username,  b: 'email'}
