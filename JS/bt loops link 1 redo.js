



// Bài 0:
// Cho một số nguyên dương n bất kỳ. Viết chương trình kiểm tra số n có phải là số nguyên tố không?

// uoc 1 va chinh no
// % (2 - n) false 
//  n < 1 false, n = 1 true, n = 2 true

function isPrime(n){
    if (n < 1){ // remove n < 1
        return false;
    }
    for (let i = 2; i < n; i++){ //chech 2-(n-1)
        if (n % i === 0){
            return false;
        }
    }
    return true; // n thuoc (1,2, chinh no)
}

function printIsPrime(n){
    if (isPrime(n)){
        console.log(`0. So n la Prime: ${isPrime(n)}`);
    } else {
        console.log(`0. So n ko la Prime: ${isPrime(n)}`);
    }
}

printIsPrime(8);

// Bài 1:
// Cho số nguyên n bất kỳ. 
// Viết chương trình in các số chẵn trong khoảng 1 đến n.

function printEven(n){
    for (let i = 1; i <= n; i++){
        if (i % 2 === 0){
            console.log(i);
        }
    }
}

printEven(6);

// Viết chương trình in các số nguyên tố trong khoảng 1 đến n

function checkPrime(n){
    if (n < 1){
        return false;
    }
    
    for (let i = 2; i < n; i++){// % cho i thuoc 2-(n-1) thi false (% 1 va chinh no)
        if (n % i === 0){
            return false;
        }
    }
    return true; //(1,2,n la true)
}

function printPrimes(n){
    for (let i = 1; i <= n; i++){
        if (checkPrime(i)){ // thay i vao function checkPrime(n) *******************************
            console.log(i);
        }
    }
}

printPrimes(22);

// Bài 2:
// Viết chương trình in ra bảng cửu chương

function matrixTable(n){
    for (let i = 1; i <= n; i++){
        console.log(`\n Bang cuu chuong cua ${i}:`);
        for (let k = 1; k <= n; k++){
            console.log(`${i} x ${k} = ${i * k}`);
        }
    }
}

matrixTable(4);


// Bài 3:
// Cho 1 số nguyên n, in ra số đảo ngược của số nguyên đó
// VD: 1234 => 4321
// Gợi ý: dùng while, chia lấy dư cho 10 để lấy số cuối

function reverse(n) {
    let reverse = 0;

    while (n > 0){
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = Math.floor(n / 10);
    }
    return reverse;
}

function printReverse(n){
    console.log(`Reverse number is: ${reverse(n)}`);
}

printReverse(12345678);

// Bài 4:
// Cho số nguyên dương n bất kỳ, viết chương trình in n phần tử đầu tiên của dãy Fibonacci.
// dãy Fibonacci là dãy số được bắt đầu bằng 2 số 0 và 1 (hoặc 1 và 1), 
// số tiếp theo bằng tổng 2 số trước đó.

function fibb (n){
    let a = 0;
    let b = 1;
    if (n < 2){
        console.log(`Nhap lai so lon hon`);
    }

    for (let i = 0; i < n ; i++){
        console.log(a);
        c = a + b;
        a = b;
        b = c;
    }
}
fibb(10);


//cach 2

function isFibonacci(n) {
    let a = 0, b = 1; // Khởi tạo hai phần tử đầu tiên của dãy Fibonacci
    let count = 0;
    console.log(`Dãy Fibonacci với ${n} phần tử đầu tiên là:`);

    while (count < n) {
        console.log(`${a}`); // In phần tử hiện tại
        let c = a + b; // Tính phần tử tiếp theo trong dãy Fibonacci
        a = b; // Cập nhật giá trị của a
        b = c; // Cập nhật giá trị của b
        count++; // Tăng biến đếm
    }
}

isFibonacci(10);

// Bài 5:
// Cho số n nguyên dương bất kỳ, tính tổng các số từ 1 đến n.

function sumN5(n){
    let sum = 0;
    for (let i = 1; i <= n ; i++){
        sum = sum + i; //sum += i
    }
    return sum;
}

function printSum(n){
    console.log(`S(n): ${sum5(n)}`);
}

printSum5(5);


// Cho số nguyên dương x bất kỳ. Viết chương trình tính giai thừa của x.

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

// Bài 6:
// Cho một số nguyên dương n. Viết chương trình kiểm tra số n có phải là số hoàn hảo hay không?
// Số hoàn hảo là số có tổng ước số của nó (không tính nó) bằng chính nó. Ví dụ như Số 28 là số 
// hoàn hảo vì ước chung lớn nhất của 28 (không tính số 28) gồm: 1; 2; 4; 7; 14. mà 1+2+4+7+14=28. 

function perfect(n){
    if (n <= 1) return false;
    let sum = 0;
    for (i = 1; i < n; i++){
        if (n % i === 0 ){
            sum += i;
        }
    }
    return sum === n;
}


function printPerfect(n){
    console.log(`Check n: ${perfect(n)}`);
}

printPerfect(28);

// Bài 7:
// Cho 1 số nguyên dương n
// Viết chương trình tính kết quả biểu thức S= 1+1/2^3+1/3^3+...+1/n^3 (làm tròn 3 chữ số thập phân).

function sum7(n){
    let sum = 0;
    for (i = 1; i < n; i++){
        sum += 1 / Math.pow(n, 3) ;
    }
}

function printSum7(n){
    console.log(`S(n): ${sum7(n)}`);
}

printSum7(5);


