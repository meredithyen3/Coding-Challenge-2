// Task 1: Store Inventory
let products = ["Notebook", "Pencils", "Computers", "Backpacks", "Books"]
console.log(products);
products.push("Highlighters");
console.log(products);
console.log(products.pop());


// Task 2: Student Scores
let scores = [90, 92, 78, 65, 100];
console.log(scores);
scores[1] = 94;
console.log(scores);
function calculateAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}
const average = calculateAverage(scores);
console.log(average);
