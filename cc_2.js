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


// Task 3: Working with Objecs
let employee = {
    name: "Violet",
    age: 8,
    department: "Agriculture",
    isActive: true
};
console.log(employee);
department = "Biology";
console.log(department); 
employee.position = "Manager";
console.log(employee.position)


// Task 4: Array of Objects
let customers = [
    {name:

        "Citrus", email: "citrus03@gmail.com", purchaseAmount: 175 },
        {name: "Harper", email: "harper02@gmail.com", purchaseAmount: 200 },
        {name: "Sunshine", email: "sunshine04@gmail.com", purchaseAmount: 250 }
];
console.log(customers);
customers.push({name: "Nettles", email: "nettles2015@gmail.com", purchaeAmount: 400 })


// Task 5: Order Processing System
let order = {
    orderId: 748394594382,
    customerName: "Diamond",
    amount: 1000
};
console.log(order);

function calculateTax(price, taxRate) {
    return price * taxRate;
}

let price = 1000;
let taxRate = 0.10; // 10% tax

let taxAmount = calculateTax(price, taxRate);
console.log(`Tax Amount: $${taxAmount}`); 

