function drawReverseHollowPyramid(n) {
    let string = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            string += " ";
        }
        for (let k = 0; k < 2 * (n - i) - 1; k++) {
            if (i == 0 || i == n - 1) {
                string += "*";
            } else {
                if (k == 0 || k == 2 * (n - i) - 2) {
                    string += "*";
                } else {
                    string += " ";
                }
            }
        }
        string += "\n";
    }
    return string;
}

console.log(drawReverseHollowPyramid(6));
// output:
//    ***********
//     *       *
//      *     *
//       *   *
//        * *
//         *