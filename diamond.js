function drawDiamond(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            string += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            string += "*";
        }
        string += "\n";
    }
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            string += " ";
        }
        for (let k = 0; k < 2 * (n - i) - 1; k++) {
            string += "*";
        }
        string += "\n";
    }
    return string;
}

console.log(drawDiamond(6));
// output:
//         *
//        ***
//       *****
//      *******
//     *********
//    ***********
//     *********
//      *******
//       *****
//        ***
//         *