let x,y,op;
x=prompt("enter first number");
y=prompt("enter second number");
number1=parseInt(x);
alert(number1);
number2=parseInt(y);
alert(number2);
op=prompt("enter operation");
alert(op);

if(op=="+"){
    document.write(number1+number2);
}else{
    if(op=="-"){
        document.write(number1-number2);
    }else{
        document.write("that is wrong");
    }
}

