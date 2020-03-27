alert("Howdy!");

var x = prompt("Enter the first number: ");

        if (x < 0 || x >= 0) {
            
        } else {
            alert("Incorrect input!");
            document.write("The first entry is incorrect! ");
        }

var token = prompt("Enter the calculating sign: + - * / ");


        if (token == "+") {
           
        } else if (token == "-") {
            
        } else if (token == "*") {
            
        } else if (token == "/") {
            
        } else {
            alert("Incorrect input!");
            document.write("The operation sign has entered incorrectly! ");
        }

var y = prompt("Enter the second number: ");

        if (y < 0 || y >= 0) {
            
        } else {
            alert("Incorrect input!");
            document.write("The second entry is incorrect! ");
        }


var result;


if (token == "+") {
    result = parseFloat(x) + parseFloat(y);
    alert(result);
    document.write("The result is " + result + "!");
} else if (token == "-") {
    result = x - y;
    alert(result);
    document.write("The result is " + result + "!");
} else if (token == "*") {
    result = x * y;
    alert(result);
    document.write("The result is " + result + "!");
} else if (token == "/") {
    result = x / y;
    alert(result);
        if (result % ! 0) {
            document.write("The result is " + result.toFixed(4) + "!");
        } else {
            document.write("The result is " + result + "!");
        }

} else {
    alert("ERROR!");
    document.write("ERROR!");
}


