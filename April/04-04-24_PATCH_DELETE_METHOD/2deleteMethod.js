let list =[
    {name:'akash',age:33},
    {name:'suresh',age:11},
    {name:'amol',age:44}
];

let ref = list.find((obj)=>{
   return obj.name == 'akash';
})

let resultList = list.indexOf(ref);
console.log(resultList);