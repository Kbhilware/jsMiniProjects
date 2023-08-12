// // 'use strict'
// // // Coding Challenge #1

// // /* 
// // We're building a football betting app (soccer for my American friends 😅)!

// // Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// // 1. Create one player array for each team (variables 'players1' and 'players2')
// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// // TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// // GOOD LUCK 😀
// // */

// // const game = {
// //   team1: 'Bayern Munich',
// //   team2: 'Borrussia Dortmund',
// //   players: [
// //     [
// //       'Neuer',
// //       'Pavard',
// //       'Martinez',
// //       'Alaba',
// //       'Davies',
// //       'Kimmich',
// //       'Goretzka',
// //       'Coman',
// //       'Muller',
// //       'Gnarby',
// //       'Lewandowski',
// //     ],
// //     [
// //       'Burki',
// //       'Schulz',
// //       'Hummels',
// //       'Akanji',
// //       'Hakimi',
// //       'Weigl',
// //       'Witsel',
// //       'Hazard',
// //       'Brandt',
// //       'Sancho',
// //       'Gotze',
// //     ],
// //   ],
// //   score: '4:0',
// //   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// //   date: 'Nov 9th, 2037',
// //   odds: {
// //     team1: 11.33,
// //     x: 3.25,
// //     team2: 6.5,
// //   },
// // };

// // const [player1, player2] = game.players;
// // console.log(player1, player2);

// // const [gkTeam1, ...fieldPlayers1] = player1;
// // const [gkTeam2, ...fieldPlayers2] = player2;
// // console.log(gkTeam1,fieldPlayers1)
// // console.log(gkTeam2,fieldPlayers2)
// // console.log('allPlayers');
// // const allPlayers = [...player1, ...player2]
// // console.log(allPlayers);

// // const players1Final = [...player1,'Thiago','Coutinho','Perisic']
// // console.log(players1Final);

// // const {odds: {team1,x:draw,team2}} = game;
// // console.log(team1,draw,team2)

// // // const {scored:[...w]} = game;
// // // console.log(w);
// // console.log('======');
// // function printGoals(...e){
// //     // for(let i = 0; i < e.length; i++)console.log(e[i], '---');
// //     console.log(e.length,'===');
// //     console.log(`${e.length} goals were scored`);
// // }

// // // printGoals(w);
// // printGoals(...game.scored);

// // printGoals('Davies','Muller','Kimmich');

// // team1 < team2 && console.log('team 1 has Win'); 
// // team1 > team2 && console.log('team 2 has Win'); 

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// for(const [i,player] of game.scored.entries()){
//     console.log(player);
//     console.log(`Goal ${i + 1} : ${player}`)
// }

// let average = 0;
// let targetObj = Object.values(game.odds)
// for(let x of targetObj){
//     average += x;
// }
// average /= targetObj.length
// console.log(average);

// for(let [key,value] of Object.entries(game.odds)){
//     let keyStr = key==='x' ? 'Odd of draw ' : `Odd of victory ${game[key]}`
//     console.log(`${keyStr} : ${value}`);
// }

// const scorers = {};
// for (const player of game.scored) {
//  console.log( scorers[player] ? scorers[player]++ : (scorers[player] = 1));
// }

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// // console.log(question);

// for(const [key, value] of question){ 
//     if (typeof key === 'number')console.log(`Answer is ${key} : ${value}`);
// }
// // const userAns = Number(prompt('add ur answer'));
// const userAns = 2
// console.log(typeof userAns);

// console.log(question.get(question.get('correct') === userAns));
// console.log('-----');
// console.log(question.entries());
// // console.log(question.entries());


// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log('======');
// console.log(events);


// console.log(gameEvents.delete(64));
// console.log(gameEvents);

// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);


// console.log(typeof Number(gameEvents.get(47)));
// for(const [key, value] of gameEvents){
//     const half = key <= 45 ? 'FIRST' : 'SECOND';
//     console.log(`[${half} HALF] ${key}: ${value}`);

// }

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').textContent = "click me"

// document.querySelector('button').addEventListener('click', function () {
//     const textValue = document.querySelector('textarea').value;
//     let valueArr = textValue.split('\n');
//     for (const [i, key] of valueArr.entries()) {
//         const [a, b] = key.trim().toLowerCase().split('_');
//         const output = `${a}${b.replace(b[0], b[0].toUpperCase())}`

//         console.log(`${output.padEnd(20)}${'>'.repeat(i + 1)}`);
//     }
//     console.log(valueArr);
// })

// const textUppar = (str) => {
//     const [first, ...rest] = str.split(' ');
//     return [first.toUpperCase(),...rest].join(' ');
    
// } 
// const tt = (str,fn) =>{
//     console.log(`${str}`);
//     console.log(`${fn.name}`);
// } 
// // hof
// tt('Javascript is great',textUppar);

// const greet = greet => name => console.log(`${greet} ${name}`);
// greet('hey')('karan')


// // const sum = a => b => a + b;

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer(){
    const answer = Number(prompt(`${poll.question}\n${poll.options.join('\n')}\n(Write option number) `));
    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++
    console.log(this.answers);
   }
}
// const button = 
document.body.append(document.createElement('button'));
document.querySelector('button').textContent = 'click me'


// console.log(poll.answers[2]);
document.querySelector('button').addEventListener('click',poll.registerNewAnswer.bind(poll));


(function(){
    let h = document.querySelector('h1');
    h.style.color = 'red'
    document.querySelector('body').addEventListener('click',function(){
    alert('jh');
    return h.style.color="blue";
})
}())
