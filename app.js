let express = require("express");
let app = express();

app.get("/",function(req, res) {
    let number1 = req.query.num1
    let number2 = req.query.num2
    let symbol1 = req.query.symbol1
    let result = 0
    console.log('num1:',number1)
    console.log('num2:',number2)
    console.log('symbol:',symbol1)
    if (number1 && number2 && symbol1) {
        debugger
        if (symbol1 == "+") {
            result = number1 + number2
        } else if (symbol1 == "-") {
            result = number1 - number2
        } else if (symbol1 == "*") {
            result = number1 * number2
        } else if (symbol1 == "/") {
            result = number1 / number2
        } else {
            console.log("请输入正确的符号")
        }
    }
    res.send(result.toString());
});

app.listen(3000,'localhost');
