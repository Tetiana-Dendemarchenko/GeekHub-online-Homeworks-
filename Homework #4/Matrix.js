let steps = [[0, 1], [1, 0], [0, -1], [-1, 0]];

function spiralGrid(R, C, r0, c0) {
    let outcome = [];
    for (let i = 0; i < R * C; i++) {
        outcome[i] = new Array();
    }

    if (R === 0 || C === 0) {
        return outcome;
    }

    outcome[0] = [r0, c0];

    let count = 1;
    let index = 0;
    let n = 1;

    while (count < R * C) {
        for (let j = 0; j < 2; j++) {
            let step = steps[index % 4];

            for (let i = 0; i < n; i++) {
                r0 += step[0];
                c0 += step[1];

                if (r0 >= 0 && r0 < R && c0 >= 0 && c0 < C) {
                    outcome[count++] = new Array(r0, c0);
                }
            }

            index++;
        }

        n++;
    }
    return outcome;
}

console.log(spiralGrid(1, 4, 0, 0));
console.log(spiralGrid(5, 6, 1, 4));