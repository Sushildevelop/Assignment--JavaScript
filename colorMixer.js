let color1 = "red" // blue ,  yellow
let color2 = "red" // yellow , red

switch (color1) {
    case "red":
        switch (color2) {
            case "blue":
                console.log("Purple");
                break
            case "yellow":
                console.log("Orange");
                break
            default:
                console.log("Invalid color combination (color1:red)");
                break
        }
        break
    case "blue":
        switch (color2) {
            case "red":
                console.log("Purple");
                break

            case "yellow":
                console.log("green");
                break

            default:
                console.log("Invalid color combination (color1:blue)");
                break

        }
        break

    case "yellow":
        switch (color2) {
            case "red":
                console.log("Orange");
                break

            case "blue":
                console.log("green");
                break

            default:
                console.log("Invalid color combination (color1:yellow)");
                break

        }
        break

    default:
        console.log("Invalid color combination");



}