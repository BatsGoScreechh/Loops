var i = 1;

while (i < 101) {
    console.log("TWEET TWEET", i);
    i++;
}

console.log("**End while loop**")
//End While Loop

for(var counter = 1; counter < 101; counter++){
    console.log("TWEET TWEET", counter);
}

console.log("**End for loop**")
//End For Loop

var favoriteFoods = ["Tacos", "Pizza", "Ice Cream", "Steak", "Hamburgers"];

for(var foodCounter = 0; foodCounter<favoriteFoods.length; foodCounter++){
    console.log (favoriteFoods[foodCounter])
}

console.log("**End Favorite Foods**")
//End Favorite Foods

var myInterests = ["Gaming", "Computers", "Coding", "Movies", "Science"]

for(var interestCounter = 0; interestCounter<myInterests.length; interestCounter++){

    if(myInterests[interestCounter] === "Coding"){
        console.log("My absolute favorite interest is: ", myInterests[2])
    
    }
    else {
        console.log("One of my interests is: ", myInterests[interestCounter])

    }
}

console.log("**End Interests**")
//End Interests

var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"]

for(var harryCounter = 0; harryCounter<harryPotterTitles.length; harryCounter++){

    console.log("Harry Potter", harryPotterTitles[harryCounter])
}

console.log("**End Harry Potter**")
//End Harry Potter

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for(gradeCounter = 0; gradeCounter<grades.length; gradeCounter++){
 
    if(grades[gradeCounter] >= 0 && grades[gradeCounter] <= 69){
        console.log("You got an F", grades[gradeCounter])
    }
    else if(grades[gradeCounter] >= 70 && grades[gradeCounter] <= 75) {
        console.log("You got a D", grades[gradeCounter])
    }
    else if(grades[gradeCounter] >= 77 && grades[gradeCounter] <= 84){
        console.log("You got a C", grades[gradeCounter])
    }
    else if(grades[gradeCounter] >= 85 && grades[gradeCounter] <= 92){
        console.log("You got a B", grades[gradeCounter])
    }
    else{
        console.log("You got an A", grades[gradeCounter])
    }
}

console.log("**End Grades**")
//End Grades

// Solution without Moooooos
// var htmlstring = "";
// var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
// for(var i = 0; i < sentenceArray.length; i++){
//     htmlstring = `${htmlstring} ${sentenceArray[i]}`;
//   }
// Create link to HTML content
// var cow = document.querySelector('#cow-sentence');
// cow.innerHTML = htmlstring

var mooString = "";
var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
for(var mooCounter = 0; mooCounter < sentenceArray.length; mooCounter++){
    
    if (mooCounter%3 === 0 && mooCounter!=0) {
      mooString = `${mooString} MOOOOO ${sentenceArray[mooCounter]}`; 
    } else {
      mooString = `${mooString} ${sentenceArray[mooCounter]}`; 
    }
  
  }
  // Create link to HTML content
  var cow = document.querySelector('#cow-sentence');
  cow.innerHTML = mooString