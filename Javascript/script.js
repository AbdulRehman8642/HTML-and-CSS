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
// var tot = Number(eng) + Number(phy) + Number(math) + Number(chem)

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

// if((age > 60 || age < 20) && res === "US"){
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


// var letter
// var pr = prompt("Yes or No")

// if(pr === "yes" || pr === "Yes"){
//     letter = "a"
// }

// if(pr === "no" || pr === "No"){
//     letter = "b"
// }

// document.write(letter)


// var a = []

// a[0] = "name"
// a[1] = "age"
// a[4] = "multimedia"
// a[5] = "contact"

// document.write(a[0],"<br>", a[1], "<br>", a[5], "<br>", a[4])




// MASLA // MASLA // MASLA // MASLA // MASLA // MASLA // MASLA // MASLA // MASLA // MASLA // MASLA // MASLA // MASLA // MASLA





// var a = ["cat", "lion", "giraffe", "zebra", "horse", "fox"]

// a.push("dog", "doggy")

// a.shift()   

// // a.push("oppo")  

// a.splice(2,2, "tiger")

// document.write(a)

// document.write(a[0], "<br>", a[1], "<br>", a[2], "<br>", a[3], "<br>", a[4], "<br>", a[5], "<br>", a[6], "<br>", a[7])

// var b = ["car", "bike", "plane", "rickshaw", "helicopter"]

// b.splice(2,2)

// document.write(b[0], b[1], b[2], b[3], b[4])

// -------------------------------------------------------------------------------------------------------------------------

// var cityToCheck = prompt("Enter your city name")

// cityToCheck = cityToCheck.toLowerCase();

// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];

// for (var i = 0; i < cleanestCities.length; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//         break;
//     }

//     if(i === cleanestCities.length-1){
//         alert("not in the list")
//     }
// }

// Converting camel case into normal case

// var firstChar = cityToCheck.slice(0,1)
// var otherChars = cityToCheck.slice(1)
// firstChar = firstChar.toUpperCase()
// otherChars = otherChars.toLowerCase()
// var cappedCity = firstChar + otherChars
    
// document.write(cappedCity)


// -----------------------------------------------------------------------------------------------------------------------

// Creating flag which is equal to matching //ye kaam baad mein kiya

// var matching = false

// var pr = prompt("Enter the number")
// var checkerElements = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// for(var i = 0; i < checkerElements.length; i++){
//     if(pr === checkerElements[i]){
//         matching = true
//         document.write("You type the letter " + pr)
//         break;
//     }
// }

// if (matching === false){
//     alert("Only type one single letter")
// }

// ---------------------------------------------------------------------------------------------------------------------------

// var matching = false

// var pr = prompt("Enter the number")
// var checkerElements = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// for(var i = 0; i < checkerElements.length; i++){
//     if(pr === checkerElements[i]){
//         matching = true  
//         document.write("You type the letter " + pr)
//         break;
//     }
    
//     if(i === checkerElements.length-1){
//         alert("Only type one single letter")
//     }
// }

//------------------------------------------------------------------------------------------------------------------------------

//  var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
//  var lastNames = ["Zzz", "Burp"];
//  var fullNames = [];
//  for (var i = 0; i < firstNames.length; i++) {
//    for (var j = 0; j < lastNames.length; j++) {
//     fullNames.push(firstNames[i] + lastNames[j]);
// }
// }

// document.write(fullNames)   

// for(var i = 1; i<=100; i = i+10){
//     for(var j = i; j < i + 10; j++){
//         document.write(j + "&nbsp&nbsp")
//     }
//     document.write("<br>")
// }

// var a = ["ayan", "ahmed", "faisal", "jawad", "maaz", "umer"]

// a.splice(2, 0, "amir", "imran", "haseeb", "saad")

// document.write(a.slice(1, 4))


// ----------------------------------------------------------------------------------------------------------------------------
// SAMAJH NHI AYA //
// 1
// if(i === checkerElements.length-1){

// 2
// f(pr === checkerElements[i])
// is mein [i] call q kiya
// break;
// break ne statement ko wapas kese bheja

// .toUpperCase

// hasan bhai ne break lagwa kar aur ".length-1" laga kar alert ya yeh keh sakte hen ke false statement par bhi response 
// banwaya tha LEKIN book mein inhon ne filhaal flag ke concept se ye kaam karwaya he
// ooper flag banaya bhi he mene


// ----------------------------------------------------------------------------------------------------------------------------

// Creating month abbreviation

// var monthAbbrev
// var month = prompt("Enter the month name")
// var charsInMonth = month.length
// if(charsInMonth > 3){
//     monthAbbrev = month.slice(0, 3)
//     document.write(monthAbbrev)
// }


// Custom banaya

// var charsLimit
// var name = prompt("Enter your name")

// var totchars = name.length
// ------------------------------------**NAME KI PROBLEM CHECK KARWAO OOPER**---------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// No.1
// var text = "It is startling World War II ye sab kuch bhi nahi he bas aik baat batane wala hun ke ye check kar raha hun mein koi cheez pata he ke lorem bhi likh sakta hun"

// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 9) === "startling") {
//         text = text.slice(0, i) + "me" + text.slice(i + 9);
//     }
// }

// document.write(text)

// No.2
// var para = "Do you know my name? my name is Abdul Rehman Khan"
// for(var i = 0; i < para.length; i++){
//     if(para.slice(i, i + 4) === "know") {
//         para = para.slice(0, i) + "finding" + para.slice(i + 4 )
//     }
// }
// document.write(para)

// ----------------------------------------index of method---------------------------------------------------------------------

// var firstChar = text.indexOf("World War II");
// if (firstChar !== -1) {
// text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
// }

// document.write(text)

// var myText = "The quick brown fox jumps over the lazy dog. Exactly you are shocked yeah it's really a lazy dog and fox is brown"
// document.write(myText)
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")

// var firstChar = myText.indexOf("fox")
// if (firstChar !== -1) {
//     myText = myText.slice(0, firstChar) + "bear" + myText.slice(firstChar + 3)
// }

// for(var i = 0; i < myText.length; i++) {
//     if(myText.slice(i, i + 3) === "fox") {
//         myText = myText.slice(0, i) + "bear" + myText.slice(i + 3)
//     }
    
//     if(myText.slice(i, i + 5) === "brown") {
//         myText = myText.slice(0, i) + "white" + myText.slice(i + 5)
//     }
    
//     if(myText.slice(i, i + 3) === "dog") {
//         myText = myText.slice(0, i) + "deer" + myText.slice(i + 3)
//     }
    
//     if(myText.slice(i, i + 3) === "dog") {
//         myText = myText.slice(0, i) + "deer" + myText.slice(i + 3)
//     }
    
//     if(myText.slice(i, i + 4) === "lazy") {
//         myText = myText.slice(0, i) + "innocent" + myText.slice(i + 4)
//     }
// }

// document.write(myText)



// ------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------WORKING ON FORM------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------

// var pSave = document.getElementById("story")
// var pCont = pSave.innerHTML
// var delWord = document.forms["myForm"]["delInp"].value
// var repWord = document.forms["myForm"]["repInp"].value
// var delChars = delWord.length
// var repChars = repWord.length

// var pSave = document.getElementById("story")
// var pCont = pSave.innerHTML
// var delWord = document.getElementById("delElement").value
// var repWord = document.getElementById("repElement").value
// var delChars = delWord.length
// var repChars = repWord.length


// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 9) === "startling") {
//         text = text.slice(0, i) + "changed word" + text.slice(i + 9);
//     }
// }

// function changeProcess(){
//     var pSave = document.getElementById("story")
//     var pCont = pSave.innerHTML
//     var delWord = document.getElementById("delElement").value
//     var repWord = document.getElementById("repElement").value
//     var delChars = delWord.length
//     var repChars = repWord.length

    // for(var i = 0; i < pCont.length; i++){        
    //     if(pCont.slice(i, i + delChars).toLowerCase() === delWord.toLowerCase()) {
    //         pCont = pCont.slice(0, i) + repWord + pCont.slice(i + delChars)
    //     }
    // }

//     var changedWord = pCont.replace(delWord, repWord)
//     document.write(changedWord)
//     document.write("<br>")
//     document.write("<br>")
//     document.write("<br>")
//     document.write("<br>")
//     document.write(totChars)
//     document.write("<br>")
//     document.write(totCharsLength)
// }

//---------------------------------------------------------------------------------------------
// ------------------------------TEST OF HASAN BHAI JAVASCRIPT-------------------------------//
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
//Problem No#1

// var name = prompt("Enter your name")
// alert("Hello " + name)
// var age = prompt("Enter your age")
// if(age >= 18){
// 	document.write("You are eligible to vote")
// }
// else{
    // 	document.write("You are not eligible to vote")
// }
//---------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------
// Problem No#2

// var price1 = prompt("Enter first item cost")
// var price2 = prompt("Enter second item cost")
// var totCost = Number(price1) + Number(price2)

// document.write("The total cost is " + totCost)
// document.write("The first item price is " + price1)
// document.write("The second item price is " + price2)
//---------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------
// Problem No#3

// var fruits = ["mango", "apple", "banana", "watermelon", "orange"]

// for(var i = 0; i < fruits.length; i++){
//     alert("I found " + fruits[i])
// }
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// Problem No#4

// var sentence = prompt("Enter a sentence")
// sentence = sentence.toLowerCase()
// var checker = false
// for(var i = 0; i < sentence.length; i++){
//     if(sentence.slice(i, i + 10) === "javascript"){
//         checker = true
//     }
// }

// if(checker === true){
//     document.write("The sentence contains a word 'Javascript'")
// }
// else{
//     document.write("The sentence doesn't contains a word 'Javascript'")
// }
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// Problem No#5
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(var i = 1; i < 11; i++){
//     for(var v = 1; v < 11; v++){
//         // document.write(i * v + "<br>")
//         var multiply = i * v
//         var table = i + " * " + v + " = " + multiply
//         var evenCheck = multiply % 2
//         if(evenCheck === 0){
//             document.write(table + " (is even)" + "<br>")
//         }
//         else{
//         document.write(table + "<br>")
//         }
//     }
// }
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// Problem No#6
// var colors = ["red", "green", "blue", "yellow", "purple"]
// var addingColor = prompt("Add your color")
// var replacedColor = prompt("Replace the color")
// var removingColor = prompt("Remove the last color")
// colors.unshift(addingColor)  
// colors[3] = replacedColor
// colors.pop(removingColor)
// document.write(colors)
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// Problem No#7
// var space = " "
// var spaceChecker = false
// var specialChars = "!@#$%^&*()-_=+{}[]:;'<>,.?/\|~`"
// var specialCharChecker = false
// var username = prompt("Enter the username")
// var usernameChars = username.length
// for(var i = 0; i < username.length; i++){
//     if(username.slice(i, i + 1) === space){
//         spaceChecker = true
//     }
// }
// const startTime=new Date().getMilliseconds()
// for(var j = 0; j < specialChars.length; j++){
//     console.log('here')
//     for(var k = 0; k < username.length; k++){
//         if(username[k] === specialChars[j]){
//             specialCharChecker = true
//             break
//         }
//     }
// }
// const endTime=new Date().getMilliseconds()
// console.log('time',endTime-startTime)
// if(spaceChecker){
//     document.write("Usernames cannot contain spaces" + "<br>")
// }

// if(specialCharChecker){
//     document.write("Usernames cannot contain special character like @,#,$,%" + "<br>")
// }

// if(usernameChars < 5){
//     document.write("Usernames must be atleast 5 characters long")
// } 


//---------------------------------------------------------------------------------------------

