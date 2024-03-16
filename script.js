///////////////////////////////////



var age=+prompt("Enter your age: ")

if (age > 0 && age < 18){
    alert("you're still young ")
}

 else if (age > 18 && age < 50 ){
    alert("you have to work")
}

else if (age > 50 && age < 100 ){
    alert("you're a retiree")
}

else {
    alert("OOOOOPS, something went wrong!!!!!!!!!!!!!!!!!")
}


////////////////////////////

var time=+prompt("enter current time:")
if (time==0){
    alert("полночь!!!!!")
}

if (time > 0 && time <= 4) {
    alert(time+ " часа ночи")
}

 else if (time > 4 && time < 12) {
    alert(time+ " часа утра")
}

if (time >= 12 && time <= 17) {
    alert((time-12)+ " часа дня")
}

if (time > 17 && time <= 23) {
    alert((time-12)+ " часа вечера")
}

else {
    alert("OOOOOOPS! somthing went wrong!!!!")
}



/////////////////


var num1=+prompt("Enter first number:")
var num2=+prompt("Enter second number:")
var num3=+prompt("Enter third number:")

//3 4 5 
if (num1<num2 && num2<num3) {
    alert(num2+" is average number")
}
else if (num1<num2 && num1>num3) {
    alert(num1+" is average number")
}
else{
    alert(num3+" is average number")
}


//////////////////




