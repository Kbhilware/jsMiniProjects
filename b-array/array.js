'use strict';

// // // Data
// // const account1 = {
// //   owner: 'Jonas Schmedtmann',
// //   // movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
// //   movements: [0, 0, 0, 0, 0, 0, 0, 10],
// //   interestRate: 1.2, // %
// //   pin: 1111,
// // };

// // const account2 = {
// //   owner: 'Jessica Davis',
// //   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
// //   interestRate: 1.5,
// //   pin: 2222,
// // };

// // const account3 = {
// //   owner: 'Steven Thomas Williams',
// //   movements: [200, -200, 340, -300, -20, 50, 400, -460],
// //   interestRate: 0.7,
// //   pin: 3333,
// // };

// // const account4 = {
// //   owner: 'Sarah Smith',
// //   movements: [430, 1000, 700, 50, 90],
// //   interestRate: 1,
// //   pin: 4444,
// // };

// // const accounts = [account1, account2, account3, account4];

// const allBlance = accounts
// .flatMap(acc => acc.movements)
// .filter(val => val > 0)
// .reduce((acc,curr) => acc + curr,0);
// console.log('All Account Blance', allBlance);

// // const BlanceT = accounts.flatMap(acc => acc.movements).filter(val=> val >= 1000).length;
// const BlanceTRed = accounts.flatMap(acc => acc.movements).reduce((acc,val)=> {
// // console.log('r>',val);
// val >= 1000 ? ++acc : acc;
// // console.log('x', x);
// return acc
// },0);
// // console.log(BlanceT)
// console.log('R=>' ,BlanceTRed);

// const sums = accounts
// .flatMap(acc => acc.movements)
// .reduce((sum,cur)=>{
//     cur > 0 ? sum.d+=cur : sum.w+=cur;
//     return sum
// },{d:0,w:0})
// console.log(sums);

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];


dogs.forEach(rf => rf.portion = Math.trunc(rf.weight ** 0.75 * 28));


const dogOwner = dogs.find(fo => fo.owners.includes('Sarah'))


// foodPortion(dogOwner);
console.log(`it's eating too ${dogOwner.curFood > dogOwner.portion ? 'much' : 'little'}`);

// let ownersEatTooMuch = [];
// let ownersEatTooLittle = [];

// dogs.filter(eat => eat.curFood >  eat.portion ? ownersEatTooLittle.push(eat.owners) : ownersEatTooMuch.push(eat.owners));

const ownersEatTooMuch = dogs.filter(eat => eat.curFood >  eat.portion).
flatMap(dogs => dogs.owners);

const ownersEatTooLittle = dogs.filter(eat => eat.curFood <  eat.portion).flatMap(dogs => dogs.owners);


const chk = current => current.curFood > current.portion * 0.9 && current.curFood < current.portion * 1.1

console.log(dogs.some(chk));
console.log(dogs.filter(chk));
console.log('dogs : ',dogs);


console.log(`${ownersEatTooMuch.join(' and ')}s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}s dogs eat too little!`);


console.log(dogs.slice().sort((a,b) => a.curFood - b.curFood));