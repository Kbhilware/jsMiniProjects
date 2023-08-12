'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  // movements: [0, 0, 0, 0, 0, 0, 0, 10],
  interestRate: 1.2, // %
  pin: 1111,
 movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const balanceDate = document.querySelector('.balance__date')
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


/////////////////////////////////////////////////



const movUsd = 1.1;
let currentUser;
let userPassword;
let userBlance;
console.log(userBlance, 'first');


// const xyz = movements.map((v,i) => `${i+1} == ` + v * movUsd)
// console.log(xyz.toString().split(',').join('\n'));


const disRow = function (value, sort = false) {
  const valueCopy = value.movements.slice(value);
  const moves = sort ? valueCopy.sort((a,b) => a - b) : value.movements;
  moves.forEach(function (val, i) {
    const type = val > 0 ? 'deposit' : 'withdrawal';
    const movDays = new Date(value.movementsDates[i]);
    const bDay = `${movDays.getDate()}`
    const bMonth = `${movDays.getMonth()+1}`.padStart(2,0);;
    const bYear = movDays.getFullYear();
    const disDate = `${bDay}/${bMonth}/${bYear}`;  
    let html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">${disDate}</div>
          <div class="movements__value">${val}€</div>
    </div>
    `;
  containerMovements.insertAdjacentHTML("afterbegin", html);
  })
  
}


const printBalance = function (val) {
  val.userBlance = val.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${val.userBlance} €`;
  console.log(val, 'B');
}


const displaySummary = function (ds) {
  const income = ds.movements.filter(fil => fil > 0).reduce((acc, c) => acc + c, 0);
  const outGoing = ds.movements.filter(val => val < 0).reduce((acc, c) => acc + c, 0);
  const interest = ds.movements.filter(val => val > 0).map((curr) => curr * ds.interestRate / 100).filter(int => int > 1).reduce((acc, curr) => acc + curr, 0)

  labelSumIn.textContent = `${income} €`;
  labelSumOut.textContent = `${Math.abs(outGoing)} €`;
  labelSumInterest.textContent = `${interest} €`;
  console.log(ds,'uo');
}

const createUserName = function (userName) {
  userName.forEach(function (acc) {
    acc.userName = acc.owner.toLowerCase().split(' ').map(v => v.at(0)).join('');
  })
}
createUserName(accounts);

const updateUi = function(ui){
    disRow(ui);
    displaySummary(ui);
    printBalance(ui);
}
currentUser = account1;
updateUi(currentUser);
containerApp.style.opacity = '100';
const loginHandler = function () {

  btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    const inputValue = inputLoginUsername.value;
    const passtValue = Number(inputLoginPin.value);
    currentUser = accounts.find(fatchUser => fatchUser.userName === inputValue);
    userPassword = accounts.find(fatchPassword => fatchPassword.pin === passtValue)
    if (currentUser === userPassword) {
      labelWelcome.textContent = `Welcome back, ${currentUser.owner.split(' ').at(0)}`;
      containerApp.style.opacity = '100';
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur();
      updateUi(currentUser);
    }else return alert('No User');
  console.log(userBlance, 'last');
  })
}
loginHandler();

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const tranTo = accounts.find(fatch => fatch.userName === inputTransferTo.value);
  const tranAmount = Number(inputTransferAmount.value)
  if(currentUser.userBlance >= 0 && currentUser.userBlance >=  tranAmount && tranAmount > 0 && tranTo.userName !== currentUser.userName){
    tranTo.movements.push(tranAmount);
    tranTo.movementsDates.push(new Date().toISOString());
    currentUser.movements.push(Number(-tranAmount));
    currentUser.movementsDates.push(new Date().toISOString());
    console.log(tranTo, currentUser);
    console.log(account2);
    updateUi(currentUser);
    inputTransferTo.value = inputTransferAmount.value = '';
    inputTransferAmount.blur();
  }else{
    alert('ops u dont have money')
  }
})

btnClose.addEventListener('click',function(e){
  e.preventDefault();
  const delUser = inputCloseUsername.value;
  const delPin = Number(inputClosePin.value);
  if(currentUser.userName === delUser && currentUser.pin === delPin){
    console.log(currentUser);
    const index = accounts.findIndex(acc => acc.userName === currentUser.userName);
    accounts.splice(index,1);
    containerApp.style.opacity = '0';
  }else alert('wrong user')
})
let sorted = false;
btnSort.addEventListener('click',function(e){
  e.preventDefault();
  disRow(currentUser, !sorted);
  console.log(currentUser.movements);
  sorted = !sorted;
  
})

const bDate = new Date();
const bDay = `${bDate.getDate()}`
const bMonth = `${bDate.getMonth()+1}`.padStart(2,0);;
const bYear = bDate.getFullYear();
balanceDate.textContent = `${bDay}/${bMonth}/${bYear}`;


// const maxN = movements.reduce((acc,curr) => {
//   if(acc > curr) return acc;
//   else return curr
// },movements[0]);

// console.log(maxN,'max');

// const depo = movements.filter(v => v > 0);
// console.log(depo );
// const withdrawalNew = movements.filter(v => v < 0);
// console.log(withdrawalNew );
// const blance = movements.reduce((acc,curr,i) => acc+ curr,0);
// console.log(blance);
// const dogsJulia = [3, 5, 2, 12, 7]
// const dogsKate = [3, 5, 2, 12, 7]

// const checkDogs =  function(dogsJulia,dogsKate ){
//   console.log(dogsJulia);
//   const juliaCorrected = dogsJulia.slice(1,-2);
//   const age = juliaCorrected.concat(dogsKate);

//   age.forEach(function(dogAge,i){
//     const checkAge = dogAge <= 3 ? 'puppy 🐶' : 'adult';
//     console.log(`${i+1} : Dog number ${i + 1} is an ${checkAge}, and is ${dogAge} years old`)
//   })

//   console.log(dogsJulia, 'or');
// console.log(juliaCorrected);
// }
// checkDogs(dogsJulia,dogsKate);
// console.log(dogsJulia);
// console.log(juliaCorrected);
// const arrAge =[];

// const dogAge1 = [5, 2, 4, 1, 15, 8, 3];
// const dogAge2 = [16, 6, 10, 5, 6, 1, 4];
// const calcAverageHumanAge = function(arr){
//  const arrAge =  arr.map(age => {
//     if(age <= 2) return 2 * age;
//     else return 16 + age * 4;
//   })
//   const adultDog = arrAge.filter(da => da >= 18)
//   console.log(adultDog, 'ad');
//   // const avHumanAge = adultDog.reduce((acc,curr)=> acc + curr, 0) / adultDog.length;

//   const avHumanAge = adultDog.reduce((acc,curr)=> acc + curr/ adultDog.length, 0) ;
// return avHumanAge;

// const calAge = arr.map(age => age <= 2 ? 2 * age : 16 + age * 4).filter((adult) => 
// {
// return adult >= 18}).reduce((acc,reage,_,info) => {
//   console.log(info);
//   return acc + reage / info.length
//   },0)
//   return calAge;
// }
// // console.log(dogAge1, '1 dog age');
// const av1 = calcAverageHumanAge(dogAge1)
// const av2 = calcAverageHumanAge(dogAge2)
// // console.log(dogAge1, '2 dog age');
// console.log(av1,av2, 'finalage');


// console.log(movements.filter(d => d > 0),'filter');
// console.log(movements.filter(d => d > 0).map(con => con * movUsd),);
// console.log(movements.filter(d => d > 0).map(con => con * movUsd).reduce((acc,curr) => acc + curr,0));



setTimeout(function() {
    console.log('hey2');
},200)
setTimeout(function() {
    console.log('hey0');
})
setTimeout(function() {
    console.log('hey3');
},800)
setTimeout(function() {
    console.log('hey1');
},0)