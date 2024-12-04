console.log("POST FIX");

var m=39;
console.log("m",m);

var n=m++;
console.log("n",n);

console.log("m",m);


console.log("PREFIX");

var p=66;
console.log("p",p);

var q=++p;
console.log("q",q);

var r=p+2;
console.log("r",r);


console.log("EXPONENTIAL OPERATOR");

var k=m**2;
console.log("k",k);


console.log("EXAMPLE OF IMPLICIT CONVERSION");

var a="100"+true;
console.log("a",a);

console.log("EXAMPLE OF IMPLICIT CONVERSION");

var b=56;
console.log("b",typeof b);

var c=String(b);
console.log("c",typeof c);

console.log("DIFFERENTIATE B/W != AND !==");

if(33!="33"){
    console.log("win");
}
else{
    console.log("loose");
}

if(33!=="33"){
    console.log("win");
}
else{
    console.log("loose");
}