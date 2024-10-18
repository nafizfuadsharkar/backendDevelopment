// array
// foreach map filter find indexOf
var arr = [1, 2, 3, 4];

// arr.forEach(function (val) {
//   console.log(val + " Hello");
// });

// map
// ei array ke compare kore arekta array banano
// var newarr = arr.map(function (val) {
//   return val*3;
// });
// console.log(newarr);
// output: [3,6,9,12]

// // filter
// var ans = arr.filter(function (val) {
//   if (val > 3) {
//     return true;
//   } else return false;
// });
// console.log(ans);

// find
// var ans = arr.find(function(val){
//     if(val==2) return val;
// });
// console.log(ans)
// // 2ta 2 thakle first er 2ta nibe

// indexOf
// arr.indexOf(2);
// index dibe 2 er. na thakle -1 dibe

// // object - key value pairs
// var obj = {
//   name: "Nafiz",
//   age: 25,
//   add: "Dhaka",
// };
// // accessing element
// console.log(obj.name);
// console.log(obj["name"]);
// // update value
// obj.age = 25;
// Object.freeze(obj);
// // eta dile value change hobena
// length of function is the no of parameters
// function abcd(a,b,c){

// }
// functions are basically object in js.

// // return
// function abcd(){
//     return 12;
// }
// abcd();

// // asynchronus js coding
// // line by line code cholle synchronus bolbo.
// // jei code async nature er , oitake side stack e rekhe daw and shamner code cholbe jeta sync nature er , jokhon sob sync code sesh hoye stack khali hobe tokhon check korbo ager side kora code complete hoiche kina, then amra complete hole stack e anbo.
// async function abcd(){
//     var blob = await fetch(`https://randomuser.me/api/`);
//     var ans = await blob.json();
//     console.log(ans.results[0]);
// }
// // fetch mane kothao theke data anbe.
// abcd();
