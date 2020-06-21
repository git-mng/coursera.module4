(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
// for (var name in names){
 

//   console.log("Hello " + names[name]);
// }
for (var i = 0; i < names.length; i++) {
//console.log("Good Bye " + names[i])
  //console.log(firstLetter);
  if (names[i] === names[i].charAt(0).toLowerCase) {
    byeSpeaker.speak(names[i]);
    console.log(byeSpeaker.name + " " + names[i]);

  } else {
    console.log(helloSpeaker.name + " " + names[i]);
  }
}
  
})();