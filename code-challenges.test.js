// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
describe("colors", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining items", () => {
        expect((colors1)).toEqual(expect.arrayContaining(["purple", "blue", "green", "yellow", "pink"]))
        expect((colors2)).toEqual(expect.arrayContaining(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]))
    })
})


// b) Create the function that makes the test pass.
const arrayColors = (arr) => {
    const[,... rest] = arr
    for (let i = rest.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [rest[i], rest[j]] = [rest[j], rest[i]]
    }
    return rest
}
console.log(arrayColors(colors1))
console.log(arrayColors(colors2))

// Pseudo code: 
//1. fisher yates shuffle algorithm
//2. iterate by generating a random index within unshuffled portion of the array
//3. swap the elements at the randomly selected index within the element at the current end of the unshuffled portion
//4. repeats steps 2-4 until the array is shuffled

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
// const votes1 = {upVotes: 13, downVotes: 2}
// // describe("votes", () =>{
// const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

describe("votes", () =>{
    it("takes in an object that contains up votes and down votes and returns the end tally" , () => {
        expect(votesRemaining(votes1)).toEqual(11)
        expect(votesRemaining(votes2)).toEqual(31)
    })
})

const votes1 = {upVotes: 13, downVotes: 2}

const votes2 = {upVotes: 2, downVotes: 33}

// b) Create the function that makes the test pass.
function votesRemaining(votesTotal) {
    const { upVotes, downVotes} = votesTotal
    const remaining = upVotes - downVotes
    return remaining
}

// Pseudo code:
//1.created a function votesRemaining that takes in the paramiter votesToal
//2.created another variable to descontructing both of them so theyre a single 
//3.another var remaining to = upVotes - downVotes and return the total
//4.return updated array 
