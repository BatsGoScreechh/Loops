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
