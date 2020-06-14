// === chapter 1
alert("Welcome to our Website")
alert("Error! Please enter a valid password.")
alert("Welcome to JS Land... \r\n Happy Coding!")
alert("Welcome to JS Land...")
alert("Happy  Coding! \r\n  prevent this page From creating additional dialogs")
alert("Hello... I can  run js through my web browser's console")

// === chapter 2
var a = "deepak";
var b = " kumar";
var c = a + b;
alert(c);

var a = 21;
var b = " years old";
var c = a + b;
alert(c);

var a = "certiied";
var b = " mobile";
var c = " Application";
var d = " Development";
var e = a + b + c + d;
alert(e);

var a = "Pizza";
var b = "\nPizz";
var c = " \nPiz"
var d = "\nPi";
var e = "\nP";
var f = a + b + c + d + e;
alert(f);

var a = "My";
var b = " Email";
var c = "  Adrress";
var d = " is";
var e = " deepak@example.com";
var f = a + b + c + d + e;
alert(f);


var a = "I am trying to learn from the book A Smarter";
var b = "\nway to learn JavaScript";
var c = a + b;
alert(c);


var a = "Yah !";
var b = " I can write HTML Content through JavaScript";
c = a + b;
document.write(c);

var a = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
alert(a);

// === chapter 3
var a = "I am ";
var b = "21";
var c = " years old";
var d = a + b + c;
alert(d);

var a = "You have visited this site ";
var b = "14";
var c = " times";
var d = a + b + c;
alert(d);

var a = "My Birth year is ";
var b = 1999;
var c = " date type of declared viarable is number ";
var d = a + b + "<br>" + c + "<br>";
document.write(d);

var a = "john Deo ";
var b = "odered";
var c = " 5 T-shirt ";
var d = "(s) on XYZ Clothing Store";
var e = "<br>" + "<br>" + a.bold() + b + c.bold() + e;
document.write(e);

// === chapter 4
// legal variable names
var a = 1;
var _b = 2;
var $c = 3;
var first_name = 4;
var camelCase = 5;
var x1 = a + _b + $c + first_name + camelCase;
alert(x1);

// illegal variable names
//var 2 = 1;
//var a b = 2;
//var "a" = 3;
//var c# = 4;
//var var = 5;
//var y = 2 + a b + "a" + c# + var;
//alert(y);

var a = "Rules for naming JS variables"
var b = "Variable names can only contain numbers, $,letters, underscores, For example $_1stvariable."
var c = "Variables must begin with a letter, $ or _. For example $name, _name or name"
var d = "Variable names are case sensitive"
var e = "Variable names should not be JS keywords"
var x = a.bold() + "<br>" + "<br>" + "<br>" + b +  "<br>" + c + "<br>" + d + "<br>" + e;
document.write(x)

// === chapter 5
var a = +prompt("Enter a number to create a Table, 5");
document.write("Table of " + a +"<br />")
for (var n=1; n<=10; n++){
document.write(a + "x" + n +"=" + a*n +"<br />")