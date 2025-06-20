console.log("this is print")
console.warn("this is warning");
console.error("this is error")
console.table([{ name: "Alice" }, { name: "Bob" }]);
console.time("loop");
for (let i = 0; i < 1000000; i++) { }
console.timeEnd("loop");