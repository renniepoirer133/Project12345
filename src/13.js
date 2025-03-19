
const someData = [
  { id: "one", name: "John" },
  { id: "two", name: "Jane" },
  { id: "three", name: "Bob" }
];

someData.forEach(element => {
  console.log(`${element.id}: ${element.name}`);
});