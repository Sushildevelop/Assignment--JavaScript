let num1 = 90
let num2 = 80
let string = "ADD"

switch ("divide") {

    case "ADD":
        let num3 = num1 + num2
        console.log(num3);
        break

    case "Multiple":
        let num4 = num1 * num2
        console.log(num4);
        break

    case "Divide":
        let num5 = num1 / num2
        console.log(num5);
        break

    case "Modulus":
        let num6 = num1 % num2
        console.log(num6);
        break

    case "Subtract":
        let num7 = num1 - num2
        console.log(num7);
        break
    default:
        console.log("Invalid Operator");
}