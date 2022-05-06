// Code your solutions in this file

const names = ["Bruce","James","John"];
const event = "birthday";
 
function writeCards(names, event) {
    let message = [];
    for (let i = 0; i < names.length; i++) {
       message.push("Thank you, " + names[i]+ "," + " for the wonderful " + event + " gift!");
    }
    return message;
}
 
writeCards(names, event);
 
function countDown(integer) {
    while (integer > 0) {
        console.log(integer);
        integer --;
    }
    console.log(integer);
}
 
countDown(10);