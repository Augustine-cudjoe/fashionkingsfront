const myArray=[10,20,50,60];
 myArray.push(30);
 myArray
console.log(myArray);
 console.log(myArray.reverse());
 // begining of javascript
 //Variable and data type 
 const yourfirstvariable ="learning to code is super";
 const yoursecondvariable=10;
 console.log(yourfirstvariable);
 let newvar; //declare
 newvar=50; //assig
 console.log(newvar);
 //keywoerds to use is let,constant and var but var is not mostly used 
 let a;
 a=1;
 a++;
 console.log(a);
 let b="heaven and earth";
 console.log(b);
 const Variable1=10;
 const Variable2="hellowee";
 const Variable3=false;
console.log( typeof Variable1);
const number1="10";
const number2=20;
console.log(number1+number2);
console.log(Number(number1)+number2);
//data type 
const stringValue="clegy augustine";
console.log(stringValue);
const numberValue=50;
console.log(numberValue);
const booleanvValue=false;
console.log(booleanvValue);
const firstArray=[10,20,50,40];
const secondArray=[10,'a string',{prop:'skillfull'},[1,2]];
console.log(firstArray);
console.log(secondArray);
//index
console.log(firstArray[0]);
console.log(secondArray[3]);
console.log(secondArray[3][0]);
//object is dictionary in python
const objectVariable={prop1:20,prop2:50,prop3:30};
console.log(objectVariable);
//index of object
//how to access the index of an object
console.log(objectVariable.prop1);
console.log(objectVariable['prop1']);
//function
const functionContainerVariable=function(){
    return 20;    
}
//TYpes of variable:String,boolen,number,object and Array
//Execise 
const myBoolean= true;
const myString='hello world';
const firstNumber=20;
let secondNumber=40;
secondNumber=80;
const myArray1=[myBoolean,myString];
console.log(myArray1);
sumNumber=firstNumber+secondNumber;
console.log("The sum of first and secondnumber is :"+sumNumber);
const myObject={firstProperty:myArray1,sumProperty:sumNumber};
console.log(myObject);
console.log("The index of the value of sumpropety is :"+myObject.sumProperty);
console.log("The index of the value of sumpropety is :"+myObject.firstProperty);
//javascript operators
// ==,===,!=,!==,<,>,<=,>==
//Tenary operation
const results=20==20?"the world is wonderful":"the world is not wonderfull";
console.log(results);
let resultsVariable;
if(20==10){
    resultsVariable="value mach";
    console.log(resultsVariable);
}else{
    resultsVariable="value do not match";
    console.log(resultsVariable);
}
//chalange
const myObj={
    pro1:'first value',
    pro2:20
};
const myArr=[40,50,2];
const result= myObj.pro2===(myArr[0]/myArr[2]);
console.log(result)
//functions,conditions and loops
const colors=['orange','green','yellow','purple','blue'];
console.log(colors);
const ramdomIndex=Math.floor(Math.random()*colors.length);
console.log(ramdomIndex);
const randomColor =colors[ramdomIndex];
//conditional
if(randomColor=='organge'){
    console.log('the color is organge');
}else if (randomColor=='green'){
    console.log('the color is green');
}else if (randomColor=='yellow'){
    console.log('the color is yellow');
}else if (randomColor=='purple'){
    console.log('the color is purple');
}else{
    console.log('the color is blue');
}
//you can use the switch instead of if condition
//switch case statement
switch(randomColor){
    case 'orange':
        console.log('the color is organge');
        break;
    case 'gree':
        console.log('the color is green');  
        break;
    case 'yellow':
        console.log('the color is yellow');
        break;
    case 'purple':
        console.log('the color is purple');
        break;
    default:
        console.log('the color is blue');
}
//looping 

for(let i=0; i<colors.length;i++){
       console.log("These are the list of colors: "+colors[i]);
}
const blogPosts=[{
    title:'what is javscript',
    author:'augustine',
    publishDate:'Dec 20,2022',
    content:'some post content here '
},
{
    title:'how do Arrays work',
    author:'moch',
    publishDate :'Jan 1,2002',
    content:'some post content here',
    
},
{
    title:'how ;long does it take to learn coding',
    author:'mosh',
    publishDate:'Jan 20, 2021',
    content:'some post content here '
}];
for(let j=0; j<blogPosts.length;j++){
    console.log("This it the title:"+blogPosts[j].title);
    console.log("This it the name of the author:"+blogPosts[j].author);
    console.log("This it the publish date:"+blogPosts[j].publishDate);
    console.log("This it the content:"+blogPosts[j].content);
} const arr=['amon','muuu','hum',20,50,80];
for(let k=0;k<arr.length;k++){
    if(typeof arr[k]=='number'){
        console.log(arr[k]);
    }
}
//function
function myFunction(){
    console.log('this id my first function');
}myFunction();
//to excute it at a time use 
(function anotherFunction(){
    console.log('hello');
})(); 
//other way of writng a function called arraw function
const arrowFunction=()=>{
    console.log('I am an arraow function');
}
 const returnFunction=()=>{
    const a=20;
    return a;
}
 //const resul=myFunction();
 //console.log(resul);

 const myNum=20;
 let myFunction1=()=>{
    if (myNum<15){
        return "this is a smaller number";
    }
    return 40;
 }
 ///strig method 
 const myNam='cudjoh';
 console.log(myNam);
 myName=myNam.replace('h','e');
 console.log(myName);
 let str='hello world';
 const resultSplit=str.toUpperCase().split(" ");
 console.log(resultSplit);
 //how to resevse a string 
//function sol(scr){
 //   const ar=scr.split(" ");
   // const arrr=ar.reverse();
  //  const finalAns=arrr.join(" ");
  //  return finalAns;
//}
 function even_odd(number){
    if (number%2===0){
        return 'even';
    }else{
        return 'odd';
    }
 }
 console.log(even_odd(10));
 function twoNumber(n,x,y){
    if (n%x===0 && n%y===0){
        return 'true';
    }else{
        return 'false';
    }
 }
console.log(twoNumber(15,5,3));
function makeNegative(num){
    if(num ===0 || num <0){
        return num;
    }else{
        return-num;
    }
}
console.log(makeNegative(5));
console.log(makeNegative(-5));
console.log(makeNegative(0));
//programe to write the summarion of
function sumNr(num1){
    sum=0;
    for(let i=1; i<=num1;i++){
       sum=sum+i ;
    }
    return sum;
}
console.log("The summation of the number is :"+sumNr(2));
//write a program to compute the meean of numbers
function getAverage(marks){
    mean=0;
       for (let i=0;i<marks.length;i++){
         mean=mean+marks[i];
         mean1=mean/marks.length;
         mean2=Math.floor(mean1);
       }
    return mean2;
}
console.log("Your avarage score is "+getAverage([25,30,40,50]));
//program to remove first and last character from a string 
function removeChar(word){
    for(let i=0; i<word.length;i++){
        if(word[i]===0 || word[i]===word.length){
         
            
        }
        return word.substring(1,word.length-1);;
    }
}
console.log(removeChar("people school"));
//write a function to sum the positive numbers in an array 
function positiveNumbers(mum){
     sum=0;
    for(let i=0;i<mum.length;i++){
        if(mum[i]>0){
            sum=sum+mum[i];
        }
    }
    return sum;
}

console.log(positiveNumbers[1,2,4,5]);
//write a function to accept three operations like (value1=string,value2=number,value3=number) return eg. +,2,1=3,-,5,6=-1;
function basicOp(operation,value1,value2){
     if(operation==='+'){
        return value1 +value2;
     }else if (operation==='-'){
        return value1-value2;
     }else if(operation==='*'){
        return value1 *value2;
     }else {
        return value1**value2;
     }
}
/// u can use eval
function basicOp1(o,a,b){
        return eval(a+o+b);
}
console.log(basicOp1('+', 5 ,2));
console.log(basicOp('-',5,10));
//callback function
const myArray2=[2,4,8,5];
function myCustomMapOperationCallback(itemFromArray){
    return itemFromArray*2
}
const newArray =myArray2.map(myCustomMapOperationCallback);
console.log(newArray);
const strArray=['hello','world','my','name','is','mosh'];
wacall=strArray.map(itemFromArray => itemFromArray[0]);
console.log(wacall);
//primitive
const string1=new String('Hello world');// object
const string2= 'Hello world'; //primitive
console.log(string1===string2);
console.log(string1==string2);
//Date
const myDate=new Date();
console.log(myDate);
console.log(myDate.toString);
console.log(myDate.toISOString);
console.log(myDate.getDate());
console.log(myDate.getFullYear());
//regular expression
//it is use to test a validation 
// this will check if the let 'g' is in the sentence
const regex =new RegExp('g');
const strig3=' my favourite food is steak';
const string4='my favourite thing to do is code';
const string5='my favouritE thing to do is code';
console.log(regex.test(strig3));
console.log(regex.test(string4));
const regex2= new RegExp('favourite');
console.log(regex2.test(string4));
//is case sensitive
console.log(regex2.test(string5));
//Another way of writing regex
console.log(/[A-Z]/.test(string1));
//quntifiers is used extract some part of the code
const wrystr='hello world,2021 @more of a string';
/[a-z]+,[0-9 ]+@[a-z ]/.exec(wrystr);
//Java String methods 
//replaceAll,toUppercase,substring,trim,match
const wyString='my Dog jumped on the bed.my dog is a bad Dog';
const newString=wyString.replaceAll('Dog','Cat');
console.log('This the code'+newString);
const correctStr=wyString.replaceAll(/[Dd]{1}og/g,'cat');
console.log('This is the corrected code after applying regularex'+correctStr);
//toUpper and toString
const capitalize=wyString[0].toUpperCase()+wyString.substring(1);
console.log(capitalize);
//ARRAY METHODS 
//push(),pop(),shift(),unshift(),slice(),splice(),indexof(),forEach(),inclue(),filter()
//pop()-last element,shift-first element
const aM=[1,2,3,4,5,6];
console.log(aM.pop());
console.log(aM.push(7,8,9));
console.log(aM.unshift(0));
//slice()-copy of the array
console.log(aM);
const copyArr=aM.slice();
console.log(copyArr);
//splice()
const bM=[1,2,4,3,5,'ooop',6,7];
const removal=bM.splice(5,1,3.5);
console.log("remover the string:"+removal);
console.log(bM);
const moreComplexArr=[
    {
        firsname:'kofi',
        lastName:'manu'
    },
    {firsname:'kofie',
    lastName:'man',

    },
    {
        firsname:'kof',
        lastName:'mane'
    }
];
moreComplexArr.findIndex((arrItem)=>{
    return arrItem.lastName!='mane';
});
//map()
//include
console.log(moreComplexArr.includes('mane'));
//filter it filter out different results
//console.log(moreComplexArr.filter('kofi'));
//reduce methed 
function reduceCallback(sum,arrItem){
    return sum+=arrItem;
}
const answer =arr.reduce(reduceCallback,0);
console.log(answer);
//u can use the reduce() to calculate the average;
//math
//errortype
//excercise
moni=[1,3,2,'kofi','emma'];
function filter_list(numarr){
    return numarr.filter(callbackfun);
}
function callbackfun(item){
    if(item>=0|| item==='number'){
        return true;
    }else{
        return false;
    }
}
console.log("This is how to filter number from string:"+filter_list(moni));
///another way
function filter_list1(num1){
    return num1.filter(item1=>{
        return item1>=0 || item1==='number';
    })
}
console.log("This is another way of filtering numbers from string :"+filter_list1(moni))
