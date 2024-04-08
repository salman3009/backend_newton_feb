let list =[
    {name:'akash',age:33},
    {name:'suresh',age:11},
    {name:'amol',age:44}
];

let ref = list.find((obj)=>{
   return obj.name == 'akash';
})

let index = list.indexOf(ref);
console.log(index);

//1 means delete only one data
list.splice(index,1);

console.log(list);
