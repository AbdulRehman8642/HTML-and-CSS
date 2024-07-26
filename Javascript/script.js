// var a = prompt("What is Your Name")

// var n = "thanks " + a + " !"

// document.write(n)

// var num = 20;

// var res = num++;

// document.write(res)

// var nam = "Abdul Rehman"

// var spec = prompt("What is your name?", nam)

// var perc = prompt("Your Percentage in SSC I")

// var percentage = "Your percentage is " + perc + "%";

// document.write(percentage)

// var x = prompt("Enter your country name?")
//  if(x === "Pakistan"){
//     alert("Congratulations! You are able to enter")
//  }

//  else if(x === "pakistan"){
//     alert("Congratulations! You are able to enter")
//  }

//  else if(x === "pk"){
//     alert("Congratulations! You are able to enter")
//  }

//  else if(x === "Pk"){
//     alert("Congratulations! You are able to enter")
//  }

//  else if(x === "pak"){
//     alert("Congratulations! You are able to enter")
//  }

//  else if(x === "Pak"){
//     alert("Congratulations! You are able to enter")
//  }

//  else{
//     alert("Sorry! You are not able to enter")
//  }

// var a = 2
// var b = 3

// document.write(a + b)


// data
// data types
// data structure


// var x = prompt("Enter the weight you lift (in kg)")
// var y = prompt("Enter your age")
// var z = prompt("Enter the sport")

// if (x > 25 && y >= 18 && z === "football" || z === "Football"){
//     alert("Congratulations! You are able to join our team")
// }

// else{
//     alert("Sorry! you are not able to join our team")
// }








// var eng = prompt("Enter English marks")
// var phy = prompt("Enter Physics marks")
// var math = prompt("Enter Maths marks")
// var chem = prompt("Enter Chemistry marks")
// var tot = Number(eng) + Number(phy) + Number(math) + chems

// if(tot >=160){
//     alert("You have passed the exam")
// }

// else{
//     alert("You are fail please try again")
// }

// document.write("Your total marks are " + tot)







// function abd(){
//     alert("hello world")
// }


// document.write(abd())



// var age = prompt("Enter your age")
// var res = prompt("Enter your country")

// if(age > 60 || (age < 20 && res === "US")){
//     alert("you have passed")
// }

// else{
//     alert("you are failed")
// }














// var sel = "Girl name or Boy name"
// var p = prompt("Select 'a' or 'b'")

// var a_var = document.getElementById("a-parnt")
// var b_var = document.getElementById("b-parnt")

// if(p === "a" || p === "A"){
//     a_var.style.display = "block";    
// }

// else if(p === "b" || p === "B"){
//     b_var.style.display = "block";    
// }

// else{
//     document.write("Coming Soon!")
// }


// var a
// var pr = prompt("Yes or No")

// if(pr === "yes" || pr === "Yes"){
//     a = "a"
// }

// if(pr === "no" || pr === "No"){
//     a = "b"
// }

// document.write(a)


// var a = []

// a[0] = "name"
// a[1] = "age"
// a[5] = "contact"

// document.write(a[0],"<br>", a[1], "<br>", a[5], "<br>", a[4])




// MASLA // MASLA // MASLA // MASLA // MASLA // MASLA // MASLA // MASLA // MASLA // MASLA // MASLA // MASLA // MASLA // MASLA





var a = ["cat", "lion", "giraffe", "zebra", "horse", "fox"]

a.push("dog", "doggy")

// a[7] = "oppo"
// a[8] = "oppo"

a.shift()   

// document.write(a[0], "<br>", a[1], "<br>", a[2], "<br>", a[3], "<br>", a[4], "<br>", a[5], "<br>", a[6], "<br>", a[7])

// var b = ["car", "bike", "plane", "rickshaw", "helicopter"]

// b.splice(2,2)

// document.write(b[0], b[1], b[2], b[3], b[4])


var cityToCheck = prompt("Enter your city name")

var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        alert("It's one of the cleanest cities");
    }
    
    else {
        alert("not in the list")
    }
}
    