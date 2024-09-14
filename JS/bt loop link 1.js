// Bài 0:
// Cho một số nguyên dương n bất kỳ. 
// Viết chương trình kiểm tra số n có phải là số nguyên tố không?

function isPrime(n){
    if (n < 2){
        return false;
    }

    for (let i = 2; i <= n; i++){
        if (n % i === 0){
            return false;
        }
    }
    return true;
}

function checkPrime(n){
    if (isPrime(n)){
        console.log(`${n} là số nguyên tố.`);
    } else {
        console.log(`${n} không là số nguyên tố.`);
    }
}

checkPrime(55)

// Bài 1:
// Cho số nguyên n bất kỳ. 
// Viết chương trình in các số chẵn trong khoảng 1 đến n.
// Viết chương trình in các số nguyên tố trong khoảng 1 đến n.

function printEven(n1a){
    for (let i = 1; i <= n1a; i++){
        if ( i % 2 === 0){
            console.log(i);
        }
    }
}

printEven(10);

// call  f(f(t%i=t/f)=run)
// dieu kien: n >=2, n % 1 va chinh no
 

function isPrime(n){
    if (n < 2){
        return false;
    }
    
    // % cho i thuoc 2-(n-1) thi false (% 1 va chinh no)
    for (let i = 2; i < n1; i++){
        if (n % i === 0){
            return false;
        }
    }
    return true;//(1,2,n la true)
}

//print
function printPrime(n){
    for (let i = 1; i <= n; i++){
        if (isPrime(i)){
            console.log(i);
        }
    }
}

printPrime(22);


// Bài 2:
// Viết chương trình in ra bảng cửu chương

// notes:
// f(i*j)
// i>n, j>n

function mTable(n){
    for (let i = 1; i <= n; i++){
        console.log( `\nBảng cửu chương ${i}:`);
        for (let j = 1; j <= 10; j++){
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}
//call
mTable(3);

// Bài 3:
// Cho 1 số nguyên n, in ra số đảo ngược của số nguyên đó
// VD: 1234 => 4321
// Gợi ý: dùng while, chia lấy dư cho 10 để lấy số cuối

// dk, n>0

function reverse(n){
    let reverse = 0;

    while (n > 0){
        let digit = n % 10; // lay so cuoi, %10 -> 0 take the last digit
        reverse = reverse * 10 + digit;  //x * 10 + vao x^10
        n =  Math.floor(n / 10); //chia 10 khong lay du // round the number (remove last digit)
    }
    return reverse;
}

function printReverse(n){
    console.log(`So dao nguoc ${reverse(n)}`);
}

printReverse(12345678);

// Bài 4:
// Cho số nguyên dương n bất kỳ, viết chương trình in n phần tử đầu 
// tiên của dãy Fibonacci.

// dieu kien
// 2 phan tu dau 0, 1
// n <= 2 nhap lai
// n > 2 ;
// f = f1 + f2 ; printf
// f1 = f2 ; f2 = f


//cach 2

function printFibonacci(n) {
    let a = 0, b = 1; // Khởi tạo hai phần tử đầu tiên của dãy Fibonacci
    let count = 0;

    while (count < n) {
        console.log(a); // In phần tử hiện tại
        let c = a + b; // Tính phần tử tiếp theo trong dãy Fibonacci
        a = b; // Cập nhật giá trị của a
        b = c; // Cập nhật giá trị của b
        count++; // Tăng biến đếm
    }
}


const n = 10;
console.log(`Dãy Fibonacci với ${n} phần tử đầu tiên là:`);
printFibonacci(n);


//F(n) = F(n-1) + F(n-2)





// Bài 5:
// Cho số n nguyên dương bất kỳ, tính tổng các số từ 1 đến n.
// Cho số nguyên dương x bất kỳ. Viết chương trình tính giai thừa của x.





// Bài 6:
// Cho một số nguyên dương n. 
// Viết chương trình kiểm tra số n có phải là số hoàn hảo hay không?
// Số hoàn hảo là số có tổng ước số của nó (không tính nó) bằng chính nó.
// Ví dụ như Số 28 là số hoàn hảo vì ước chung lớn nhất của 28 
// (không tính số 28) gồm: 1; 2; 4; 7; 14. mà 1+2+4+7+14=28. 





// Bài 7:
// Cho 1 số nguyên dương n
// Viết chương trình tính kết quả biểu thức 
// S= 1+1/23+1/33+...+1/n3 (làm tròn 3 chữ số thập phân).















