var d = new Date().getDate();
var m = new Date().getMonth();
var y = new Date().getFullYear() - 2000;
var day = new Date().getDay();
var hr = new Date().getHours() - 12;
var min = new Date().getMinutes();
var str = "";
var main = "";
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

switch (m) {
  case 0:
    main += "A";
    break;
  case 1:
    main += "B";
    break;
  case 2:
    main += "C";
    break;
  case 3:
    main += "D";
    break;
  case 4:
    main += "E";
    break;
  case 5:
    main += "F";
    break;
  case 6:
    main += "G";
  case 7:
    main += "H";
  case 8:
    main += "I";
  case 9:
    main += "J";
  case 10:
    main += "K";
  case 11:
    main += "L";
    break;
  default:
    break;
}


if (m === 11) {
  m += 1;
}


const date =  String(main + d + y)

var arr = [];
var c = 1;
for (var i = 0; i < 10100; i++) {
  if (i >= 1000) {
    arr.push( date + i );
  }
}

//function for remove
const removeFirst = () => {
  arr.shift();
  return arr;
};

removeFirst()
removeFirst()
console.log(arr);

// //logic okay

var abc = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var a = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var dummy = ""
var c = 0
var mainArr = []
for(var j = 0; j < 26; j++){
  for(var i = 0; i < 26; i++){
    dummy += a[j] + abc[i] + arr[c++] + "\n"
  }
}

// console.log(dummy)
mainArr.push(dummy)
console.log("mainArr",mainArr)