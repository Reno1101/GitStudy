function sumN1(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function printSumN1(n) {
    console.log(`1.Tổng S(${n}) = 1 + 2 + ... + ${n} là: ${sumN1(n)}`);
}

printSumN1(5);