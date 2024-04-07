let list = [
    {
        city: "London",
        weather: {
            temperature: 20,
            humidity: 75
        },
    },
    {
        city: "New York",
        weather: {
            temperature: 20,
            humidity: 75
        },
    }
]

let result = list.find((obj)=>{
    return obj.city == "London";
})

console.log(result.weather);