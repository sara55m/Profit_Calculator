let x,y,op;
x=parseInt(prompt("enter first number"));
y=parseInt(prompt("enter second number"));
op=prompt("enter operation");
alert(op);

if(op=="+"){
    document.write(x+y);
}else{
    if(op=="-"){
        document.write(x-y);
    }else{
        if(op=="*"){
            document.write(x*y);
        }else{
            if(op=="/"){
                document.write(x/y);
            }else{
                if(op=="%"){
                    document.write(x%y);
                }else{
                    if(op=="**"){
                        document.write(x**y);
                    }else{
                        document.write("that is wrong");
                    }
                }
            }
        }      
    }
}

