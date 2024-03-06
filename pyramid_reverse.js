function drawReversePyramid(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            string += " ";
        }
        for (let k = 0; k < 2 * (n - i) - 1; k++) {
            string += "*";
        }
        string += "\n";
    }
    return string;
}

console.log(drawReversePyramid(6));
// output:
//    ***********
//     *********
//      *******
//       *****
//        ***
//         *