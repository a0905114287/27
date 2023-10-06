var x = Math.floor(Math.random()*11);
console.log(x);
var readline = require("readline-sync");
while(true){
    var y=readline.question("Please guess a number:");
    if(isNaN(y)||y>10||y<0){
        continue;
    }else{
        break;
    }
}
console.log(y);
if(x==y){
    console.log("Right");
}else{
    console.log("Wrong");
}