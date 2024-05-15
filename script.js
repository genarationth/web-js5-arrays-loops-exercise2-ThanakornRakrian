// Ex2
// Part 1

const bankCustomer = [{ name: "Sofia" }, { name: "David" }, { name: "June" }];

console.log(bankCustomer);

// Part 2
bankCustomer.push({ name: "Sara" }, { name: "Augustin" });
bankCustomer.shift();

console.log(bankCustomer);

// Part 3
bankCustomer.splice(1, 0, { name: "Renata" });

bankCustomer.push({ name: "Elena" });
console.log(bankCustomer);
