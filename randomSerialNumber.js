var d = new Date().getDate();
var m = new Date().getMonth();
var y = new Date().getFullYear();
var day = new Date().getDay();
var hr =  new Date().getHours() - 12
var min = new Date().getMinutes()
var str = "";
switch (day) {
  case 0:
    str += "Sun";
    break;
  case 1:
    str += "Mon";
    break;
  case 2:
    str += "Tue";
    break;
  case 3:
    str += "Wed";
    break;
  case 4:
    str += "Thu";
    break;
  case 5:
    str += "Fri";
    break;
  case 6:
    str += "Sat";
    break;
  default:
    break;
}
// console.log(d + "/" + m + "/" + y + " - " + str + " - " +hr + ":" + min );

if(m === 11){
  m += 1
}
const date = y + "" + m + "" + d


//  console.log(date)

var i = 1;
var c = 0;
var str ="";
var abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
function count (){
    return str = date+""+ i++ +abc[c++]
}

console.log(count())
console.log(count())
console.log(count())
console.log(count())

