const jsObject = {
    name: "HP",
    age: 25,
    display: function () {
        console.log("Hello");
    },
};

//JavaScript Object Notation
let jsonObject = {
    name: "HP",
    age: 25,
};
//methods(functions inside objects) are not supported

let stringJSON = JSON.stringfy(jsObject);
console.log(stringJSON);
console.log(typeof stringJSON);

let normalJSON = JSON.parse(stringJSON);
console.log(normalJSON);
console.log(typeof normalJSON);