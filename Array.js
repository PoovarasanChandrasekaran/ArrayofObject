let array=[
{name:"bala"},
{name:"bala1"},
{name:"bala2"},
{name:"bala3"},
{name:"bala4"}
]
console.log(array);

// -------------------------------

let array1=[
    {name:"bala",age:23},
    {name:"bala1",age:20},
    {name:"bala2",age:10},
    {name:"bala3",age:18},
    {name:"bala4",age:19}
    ]
    let aged=array.filter((array)=>{
        return array.age > 18
    })
     console.log(aged);

// ------------------------------------------- 

let array2=[
    {name:"bala",age:23},
    {name:"bala1",age:20},
    {name:"bala2",age:10},
    {name:"bala3",age:18},
    {name:"bala4",age:19}
    ]
    array.sort((a,b) =>{
        return a.age - b.age 
    })
    console.log(array);

// ------------------------------------------


let array3=[
    {name:"bala",age:23},
    {name:"bala1",age:20},
    {name:"bala2",age:10},
    {name:"bala3",age:18},
    {name:"bala4",age:19}
    ]
    console.log(array[1]);

// --------------------------------------

let object ={
      name:"bala",
      age:23,
      phone:9898
}
for (let i of Object.keys(object)){
    console.log(i);
}

// -----------------------------------------


let array4 =[1,2,3,4,5,6,7]
let array5 =[8,9,10]

let total = array4 + ","+ array5
console.log(total);