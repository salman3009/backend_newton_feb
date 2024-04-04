let products=[
    {
        id: 1,
        name: "micromax",
        price: 7000,
        stocks: 5
    },
    {
        id: 2,
        name: "LG",
        price: 8000,
        stocks: 7
    }
];

//params
let id = 2;

//reference object
let result = products.find((obj)=>{
    return obj.id == id;
});

console.log(result);

//body data
let object={
    price: 10000
}

//reference_object--new data
Object.assign(result,object);

console.log(result);

console.log(products);