let x,y,op;
x=prompt("enter first number");
y=prompt("enter second number");
number1=parseInt(x);
alert(number1);
number2=parseInt(y);
alert(number2);
op=prompt("enter operation");

if(op=="+"){
    let res=parseInt(x+y);
}else{
    if(op=="-"){
        res=parseInt(x-y);
    }else{
        res="that is wrong";
    }
}