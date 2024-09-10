let x,y,res1,res2,res3,res4,res5,res6;
x=prompt("enter first number");
y=prompt("enter second number");
number1=parseInt(x);
alert(number1);
number2=parseInt(y);
alert(number2);

res1=parseInt(number1+number2);
res2=parseInt(number1-number2);
res3=parseInt(number1*number2);
res4=parseInt(number1/number2);
res5=parseInt(number1%number2);
res6=parseInt(number1**number2);


document.write(`
    <table style="border:2px solid black">
    <thead>
    <th>Number1</th>
    <th>Number2</th>
    <th>operation</th>
    <th>Result</th>
    </thead>
    <tbody>
    <tr>
    <td>${number1}</td>
    <td>${number2}</td>
    <td>+</td>
    <td>${res1}</td>
    </tr>

    <tr>
    <td>${number1}</td>
    <td>${number2}</td>
    <td>-</td>
    <td>${res2}</td>
    </tr>

    <tr>
    <td>${number1}</td>
    <td>${number2}</td>
    <td>*</td>
    <td>${res3}</td>
    </tr>

    <tr>
    <td>${number1}</td>
    <td>${number2}</td>
    <td>/</td>
    <td>${res4}</td>
    </tr>

    <tr>
    <td>${number1}</td>
    <td>${number2}</td>
    <td>%</td>
    <td>${res5}</td>
    </tr>

    <tr>
    <td>${number1}</td>
    <td>${number2}</td>
    <td>**</td>
    <td>${res6}</td>
    </tr>
    </tbody>
    </table>
    
    
    
    
    `)