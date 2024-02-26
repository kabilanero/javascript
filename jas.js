// var a=10;
// var b=50;
// function fun(){
//     var res=a+b;
//     console.log(res);
//     return res;
// }
// let re=fun();
// fun();
// console.log(re);
//========variable const can change by this======
// const a=10;
// const b=10;
// let c=a+b;
// c=30;
// console.log(c);

// const fun=function(n){
// return (x)=>x**n;
// }
// const square=fun(2);
// console.log(square(3));

//====array length set to zero====//
// var a=[10,20,30,40];
// var len=a.length=0;
// console.log(len);

//=======types and their usage

// var a="hello world!";
// var len=(a.length);
// console.log(len*2);

//one form pf creating the objrct format
// let item={
//     name:"kabil",
//     age:22,
//     prim:1,
//     dimen:{
//         height:40,
//         width:100,
//     },
//     arar:['hello ','all'],
// }
// console.log(item);
// console.log(item.dimen);
// console.log(item.arar);
// console.log(item.arar[0]);
// console.log(item.dimen.height);


// //other form of creating the object
// let object=new Object();
// object.name="wolve";
// object.age=400;
// console.log(object);

// //accessing elements of objects using dot notation
// console.log(item.name);

// //changing the elements usinng dot notation
// item.age=200;
// console.log(item.age);

// //if you want to create new property in object 
// item.ret=false;
// console.log(item);

// //we can access the object by square bracket also
// console.log(item['age']);
// //change elements value
// item['age']=32;
// console.log(item);
// //this is most helpful while handling with variable in dot operator its wont works

// let res='age';
// // res=40;
// // console.log(res);
// item[res]=50;
// console.log(res);
// item.res=3;
// console.log(item);

// //adding function to objects
// func=()=>{
// console.log("hello");
// }
// var ne={
//     final:'yes',
//    fun:func(),
// }
// console.log(ne);


// we can concat more things in single concat 
    var a="hello";
    var b=10;
    var c="good night";
    console.log(a.concat("here",c,b));

                               