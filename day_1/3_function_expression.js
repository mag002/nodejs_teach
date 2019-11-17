// normal func
function sayYo() {
  console.log("Yo!");
}
// invoke func
sayYo();

// function expression
var sayOkLa = function() {
  console.log("Ok La!");
};

sayOkLa();

var message = "Hi guys";
// module.exports = sayOkLa;
// remove function invoke in line 6 and 13

//module_pattern
// module.exports.sayOkLa = sayOkLa;
// module.exports.sayYo = sayYo;
// module.exports.message = message;

// OR

// module.exports.message='Hi guys'

// OR

// module.exports={
//     sayOkLa,
//     sayYo,
//     message
// }
