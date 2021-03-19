//1. Test

let x = 10;
console.log(x)

//2. Get Element by ID
let testParagraph = document.getElementById("testParagraph")
testParagraph.style.color="blue";
console.log(testParagraph)

//3. Query Selector All and innerText/HTML

let sampleClasses = document.querySelectorAll("p.sampleClass");
sampleClasses[0].innerText= "My text has changed"

sampleClasses.forEach(pTag => {
    pTag.innerHTML = "<i>My text has changed using the forEach mehtod</i>"
})

/*

innerText - simply references or allows us to change the text of a specific element.
Will return only visible text in a "node"
-textContent- does the same thing innerText does, but will return the Full text of a "node"
innerHTML- allows us to set text as well aws HTML elements, which will be nexted inside of the current HTML element we are referencing.*/

//3.5


console.log(document.getElementById("spanTest").innerText);
console.log(document.getElementById("spanTest").textContent);


//4 addEventListener- click

document.getElementById("clickThis Button").addEventListener("click", event => { 
    event.target.style.backgroundColor = "blue";
})


document.getElementById("click this Button").addEventListener("click", ( ){this.style.backgroundColor= this.style.backgroundColor == "red" ? "blue" : })


//5. addEventListener- Keyup / getElementsByTagName

document.getElementById("nameInput").addEventListener("keyup", event => {
    console.log(event.target.value);
    let allPTags = document.getElementsByTagName("p");
    allPTags[0].innerText - "Nothing has been typed.";

    if (event.target.value ==){
        allPTags[1].innerText= "Nothing has been typed";
    } else {
        allPTags[1].inner `Everyone, please say hello to ${evdent.target.value}!`;
        
    }
})