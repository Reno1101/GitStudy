
function sum5(n){
    let sum = 1;
    for (let i = 1; i <= n ; i++){
        sum *= i; // sum = sum * i
    }
    return sum;
}

function printSum5(n){
    console.log(`S(n): ${sum5(n)}`);
}

printSum5(5);