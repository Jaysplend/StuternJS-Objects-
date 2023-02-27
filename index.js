// Question1: Constructor method of creating function
function InstagramPost(authorHandle, postContent, postImageLink, numViews, numLikes) {
  this.authorHandle = authorHandle;
  this.postContent = postContent;
  this.postImageLink = postImageLink;
  this.numViews = numViews;
  this.numLikes = numLikes;
}


//2. InstagramPost Objects
let myPost = new InstagramPost("myhandle", "Check out my new post!", "https://example.com/image.jpg", 1000, 50);
console.log(myPost.authorHandle); // Output: "myhandle"
console.log(myPost.postContent); // Output: "Check out my new post!"

let Ijaypost  = new InstagramPost("IjayT", "Content here", "https://example.com/image.jpg", 20090, 500);
console.log(Ijaypost);

//3.Using the factory method to create a function.

function createPerson(name, age, location) {
    return {
      name: name,
      age: age,
      location: location
    };
  }
  
  let musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");

  function createJambScores(eng, govt, lit, crk) {
    return {
      ENG: eng,
      GOVT: govt,
      LIT: lit,
      CRK: crk
    };
  }
// we add Musa's JAMB scores object as a property to his musa object using dot notation.
  musa.jambScores = createJambScores(70, 85, 82, 94);
  console.log(musa);

  //4. Cloning Ojects
  //A.Spread operator method
  const data = { name: "Ijeoma", age: 26, height:"162cm" }
const dataCopy = { ...data }

data.age = 1000

console.log(data.age)// output is 1000
console.log(dataCopy.age)// output is 26

//B. Object.assign(): This method creates a new object by copying the properties of an existing object into the new object. 
const original = {a: 1, b: {c: 2}};
const clone = Object.assign({}, original);
original.b.c = 3;

console.log(original); // {a: 1, b: {c: 3}}
console.log(clone); // {a: 1, b: {c: 3}}

//C. JSON.parse() and JSON.stringify(): This method creates a deep clone of the object by converting the object to a JSON string and then parsing the string back to an object. 
const data2 = { name: "Alice", age: 26, hobbies: ["Jogging", "Tennis", "Gym"] }

const dataCopy2 = JSON.parse(JSON.stringify(data2))

data2.hobbies[0] = "Golf"

console.log(data2.hobbies); //[ 'Golf', 'Tennis', 'Gym' ]
console.log(dataCopy2.hobbies);// [ 'Jogging', 'Tennis', 'Gym' ]




//5.Using for...in loop 
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }

 for (let party in presidentialCandidates) {
    let candidate = presidentialCandidates[party];
    console.log(`${candidate} is the presidential candidate of ${party}`);
  }
  
