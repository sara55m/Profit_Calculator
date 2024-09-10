let x,y,op;
x=parseInt(prompt("enter first number"));
y=parseInt(prompt("enter second number"));
//number1=parseInt(x);
alert(x);
//number2=parseInt(y);
alert(y);
op=prompt("enter operation");
alert(op);

if(op=="+"){
    document.write(x+y);
}else{
    if(op=="-"){
        document.write(x-y);
    }else{
        document.write("that is wrong");
    }
}

