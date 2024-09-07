// undone
// 1)Tính S(n) = 1 + 2 + 3 + ... + n - 1 + n

function sumN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Ví dụ sử dụng
function printSum1(n) {
    console.log(`1.Tổng S(${n}) = 1 + 2 + ... + ${n} là: ${sumN(n)}`);
}

printSum1(10);

// 2)Tính S(n) = 1^2 + 2^2 + 3^2 + ... + (n-1)^2 + n^2

function sumN2 (n){
    let sum = 0;

    for (let i = 1; i <= n; i++){
        sum += i**2;
    }
    return sum;
}

function printSum2(n) {
    console.log(`2.Tổng là: ${sumN2(n)}`);
}

printSum2(4);

// 3)Tính S(n) = 1 + 1/2 + 1/3 + ... + 1/n

function sumN3(n){
    let sum = 0;

    for (let i = 1; i <= n; i++){
        sum += 1/i;
    }
    return sum;
}

function printSum3(n) {
    console.log(`3.Tổng là: ${sumN3(n)}`);
}

printSum3(4);

// 4)Tính S(n) = 1/2 + 1/4 + ... + 1/2n

function sumN4(n){
    let sum = 0;

    for (let i = 1; i <= n; i++){
        sum += 1/(2*i);
    }
    return sum;
}

function printSum4(n) {
    console.log(`4.Tổng là: ${sumN4(n)}`);
}

printSum4(4);

// 5)Tính S(n) = 1 + 1/3 + 1/5 + ... + 1/(2n+1)

function sumN5(n){
    let sum = 0;

    for (let i = 1; i <= n; i++){
        sum += 1/((2*i)+1);
    }
    return sum;
}

function printSum5(n) {
    console.log(`5.Tổng là: ${sumN5(n)}`);
}

printSum5(4);

// 6)Tính S(n) = 1/(1*2) + 1/(2*3) + 1/(n*(n-1) ) 

function sumN6(n){
    let sum = 0;

    for (let i = 2; i <= n; i++){
        sum += 1/(i*(i - 1)); /// /(i*(i-1))infinity
    }
    return sum;
}

function printSum6(n) {
    console.log(`6.Tổng là: ${sumN6(n)}`);
}

printSum6(4); 

// 7)Tính S(n) = 1/2 + 2/3 + 3/4 + ... + n/(n+1)

function sumN7(n){
    let sum = 0;

    for (let i = 1; i <= n; i++){
        sum += i/(i + 1);
    }
    return sum;
}
function printSum7(n) {
    console.log(`7.Tổng là: ${sumN7(n)}`);
}
printSum7(4);

// 8)Tính S(n) = 1/2 + 3/4 + 5/6 + ... + (2n+1)/(2n+2)


function sumN8(n){
    let sum= 0;
    for (let i = 1; i <= n; i++){
        sum += ((2*n)+1)/((2*n)+2);
    }
    return sum;
}

function printSum8(n) {
    console.log(`8.Tổng là: ${sumN8(n)}`);
}
printSum8(4);

// 9)Tính T(n) = 1*2*3*.....*n

function sumN9(n){
    let sum= 1;
    for (let i = 1; i <= n; i++){
        sum *= i;
    }
    return sum;
}

function printSum9(n) {
    console.log(`9.Tổng là: ${sumN9(n)}`);
}
printSum9(4);
// 10)Tính T(x,n) = x^n

function printPow10(x, n) {
    console.log(`10.Tổng là: ${Math.pow (x, n)}`);
}

printPow10(3, 7);


// 11)Tính S(n) = 1 + 1.2 + 1.2.3 + .... + 1.2.3....n

function sum11(n) { //x>1
    let sum = 0;
    let fact = 1;
    
    for (let i = 1; i <= n; i++) {
        fact *= i;
        sum += fact; 
    }
    return sum;
}

function printSum11(n){
    console.log(`11,Tổng là: ${sum11(n)}`);
}

printSum11(4);


// 12)Tính S(x,n) = x + x^2 + x^3 + ... + x^n

function sum12(x, n){
    let sum = 0;

    for (let i = 1; i <= n; i++){
        sum += Math.pow(x, i);
    }
    return sum;
}

function printSum12(x, n){
    console.log(`12.Tổng là: ${sum12(x, n)}`);
}

printSum12(2, 4)

// 13)Tính S(x,n) = x^2 + x^4 +.... + x^2n

function sum13(x, n){
    let sum = 0;

    for (let i = 1; i <= n; i++){
        let power = Math.pow(x, 2* i);
        sum += power;
    }
    return sum;
}

function printSum13(x, n){
    console.log(`13.Tổng là: ${sum13(x, n)}`);
}

printSum13(2, 4)

// 14)Tính S(x,n) = x + x^3 + x^5 +....+ x^(2n+1)

function sum13(x, n){
    let sum = 0;

    for (let i = 1; i <= n; i++){
        let power = Math.pow(x, 2 * i + 1 );
        sum += power;
    }
    return sum;
}

function printSum13(x, n){
    console.log(`14.Tổng là: ${sum13(x, n)}`);
}

printSum13(2, 4)

// 15)Tính S(n) = 1 + 1/(1+2) + 1/(1+2+3) + ... + 1/(1+2+3+...+n)

function sum15(n) { 
    let sum = 0;
    let denominator = 0;
    
    for (let i = 1; i <= n; i++) {
        denominator += i;
        sum += 1/(denominator);
    }
    return sum;
}

function printSum15(n){
    console.log(`15.Tổng là: ${sum15(n)}`);
}

printSum15(4);

// 16)Tính S(x,n) = x + (x^2)/2! + (x^3)/3! + ... + (x^n)/n!

function s16(x, n){
    let sum = 0;
    let factorial = 1;

    for (i = 1; i <= n; i++){
        factorial *= i;
        sum += (x ** i) / (factorial);
    }
    return sum;
}


function prints16(x, n){
    console.log(`16.Sum la: ${s16(x, n)}`);
}

prints16(3, 4);


// 17)Tính S(x,n) = 1 + (x^2)/2! + (x^4)/4! + ... + (x^2n)/(2n)!

function dofact(k){
    let result = 1;
    for (let i = 2; i <= k; i++){ // start fac = 2!
        result *= i; 
    }
    return result;
}


function s17(x, n){
    let sum = 1;

    for (let i = 1; i <= n; i++){
        sum += (x ** (2 * i)) / dofact(2 * i);// 2i=2(1->n), dofact=!, => (2i)!
    }
    return sum;
}


function prints17(x, n){
    console.log(`17.Sum la: ${s17(x, n)}`);
}

prints17(2, 5);

//cach 2

function factorial(k){
    let fac = 1;
    for (let i = 2; i <= k; i++){ // start fac = 2!
        fac *= i; 
    }
    return fac;
}


function s17(x, n){
    let sum = 1;

    for (let i = 1; i <= n; i++){
        let power = Math.pow(x, 2 * i);
        let fact = factorial (2 * i);// 2i=2(1->n), dofact=!, => (2i)!
        sum += power / fact ;
    }
    return sum;
}


function prints17(x, n){
    console.log(`17b.Sum la: ${s17(x, n)}`);
}

prints17(2, 5);

// 18)Tìm ước số lẻ lớn nhất của số nguyên dương n . Ví dụ : n = 100 ước lẻ lớn nhất của 100 là 25

function largestDivisor(n){
    for (let i = n; i >= 1; i--){
        if (i % 2 !== 0 && n % i === 0){
            return i;
        }
    }
}

function printLargestDivisor(n){
    console.log(`Divisor la: ${largestDivisor(n)}`);
}

printLargestDivisor(100);

// 19)Tính S(n) = sqrt(2 + sqrt (2 + ... sqrt ( 2 + sqrt(2) ) ) )

// note: n - sqrt(2)



function sqrt(n){
    let sum = 0;

    for (let i = 1; i <= n; i++){ // 1-4 step
        sum = Math.sqrt(2 + sum) //or (2 + sum) ** (1/2)
    }
    return sum;
}

function printsqrt(n){
    console.log(`19.Sum la: ${ sqrt(n)}`);
}

printsqrt(4);

// 20)Tính S(n) = sqrt(n + sqrt (n-1 + sqrt(n-2 + ...sqrt(2 + sqrt (1) ) ) ) )

//note: 1 -> n loop; self loop sqrt sum 

function sqrt(n){
    let sum = 0;

    for (let i = 1; i <= n; i++){ // 1-n step (still 4 step)
        sum = Math.sqrt(i + sum) //or (2 + sum) ** (1/2)
    }
    return sum;
}

function printsqrt(n){
    console.log(`20.Sum la: ${ sqrt(n)}`);
}

printsqrt(4);

// 21)Tính S(n) = sqrt(1 + sqrt(2 + sqrt (3 + ...sqrt (n-1 + sqrt (n)))))

function sqrt(n){
    let sum = 0;

    for (let i = n; i >= 1; i--){ // 1-n step , or i > 0, still 4 step
        sum = Math.sqrt(i + sum) //or (2 + sum) ** (1/2)
    }
    return sum;
}

function printsqrt(n){
    console.log(`21.Sum la: ${ sqrt(n)}`);
}

printsqrt(4);

// 22)S(n) = 1/(1 + 1/(1 + 1/(1 + 1/(... 1 /(1/(1 + 1/(1 + 1 )))))))

//note 1 -> n (4 step)

function sqrt(n){
    let sum = 1;// is (1/(1 + 0)) alr

    for (let i = 1; i <= n; i++){ // 4 step 
        sum = 1/(1 + sum) 
    }
    return sum;
}

function printsqrt(n){
    console.log(`22.Sum la: ${ sqrt(n)}`);
}

printsqrt(4);

// 23)Hãy đếm số lượng chữ số của số nguyên dương n

function countNDigits(n) {
    let count = 0;
    
    while (n > 0) {
        n = Math.floor(n / 10); // Chia số n cho 10 và lấy phần nguyên (math.floor)
        count++;
    }
    return count;
}

function printNDigits(n){
    console.log(`23. soChuSo la: ${countNDigits(n)}`);
}

printNDigits(123456789);


// cach 2

function countNDigitsB(n) {
    return n.toString().length;
}

function printNDigitsB(n){
    console.log(`23. soChuSo la: ${countNDigitsB(n)}`);
}

printNDigitsB(123456789);

// 24)Hãy tính tổng các chữ số của số nguyên dương n 

function sumDigits(n) {
    let sum = 0;
    
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10); 
    }
    return sum; 
}

function printSumDigits(n){
    console.log(`24a. soChuSo la: ${sumDigits(n)}`);
}

printSumDigits(123456789);

// cach 3 test sum + ndigit
function sumDigits(n) {
    let count = 0;
    let sum = 0;
    
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10); // Chia số n cho 10 và lấy phần nguyên (math.floor)
        count++;
    }
    return {sum, count}; 
}

function printSumDigits(n){
    let result = sumDigits(n);
    console.log(`24b. soChuSo la: ${result.sum}`);
    console.log(`24b. tongSoChuSo la: ${result.count}`);
}

printSumDigits(123456789);

// cach 2

function sumDigitsB(n) {
    return n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

function printSumDigitsB(n){
    console.log(`24c. soChuSo la: ${sumDigitsB(n)}`);
}

printSumDigitsB(123456789);

// 25)Hãy tính tích các chữ số của số nguyên dương n

function productDigits(n) {
    let sum = 1;
    
    while (n > 0) {
        sum *= n % 10;
        n = Math.floor(n / 10); 
    }
    return sum; 
}
function printProductDigits(n){
    console.log(`25. soChuSo la: ${productDigits(n)}`);
}

printProductDigits(123456789);

// 26)Hãy đếm số lượng chữ số lẻ của số nguyên dương n

function oddCountDigits(n) {
    let count = 0;
    
    while (n > 0) {
        n = Math.floor(n / 10); // loại 1 số và cộng vào count++
        if (n % 2 === 0){
            count++;
        }  
    }
    return count;
}

function printOddCountDigits(n){
    console.log(`26. soChuSo la: ${oddCountDigits(n)}`);
}
printOddCountDigits(123456789);

//cach 2
function oddCountDigitsB(n) {
    let count = 0;
    
    while (n > 0) {
        let digit = n % 10;// laays số cuối
        if (digit % 2 !== 0){
            count++;
        }
        n = Math.floor(n / 10); // loại số cuối
    }
    return count;
}

function printOddCountDigitsB(n){
    console.log(`26. soChuSo la: ${oddCountDigitsB(n)}`);
}
printOddCountDigitsB(123456789);

//số lượng chữ số chẵn của số nguyên dương n

function evenCountDigits(n) {
    let count = 0;
    
    while (n > 0) {
        let digit = n % 10;// laays số cuối
        if (digit % 2 === 0){
            count++;
        }
        n = Math.floor(n / 10); // loại số cuối
    }
    return count;
}

function printEvenCountDigits(n){
    console.log(`26. soChuSo la: ${evenCountDigits(n)}`);
}
printEvenCountDigits(123456789);

// 27)Hãy tính tổng các chữ số chẵn của số nguyên dương n


function sumEvenDigits(n) {
    let sum = 0;
    
    while (n > 0) {
        let digit = n % 10;// laays số cuối
        if (digit % 2 === 0){
            sum += digit;
        }
        n = Math.floor(n / 10); // loại số cuối
    }
    return sum;
}

function printsumEvenDigits(n){
    console.log(`27. Tong ChuSo la: ${sumEvenDigits(n)}`);
}
printsumEvenDigits(123456789);


// 28)Hãy tính tích các chữ số lẻ của số nguyên dương n

function proEvenDigits(n) {
    let sum = 0;
    
    while (n > 0) {
        let digit = n % 10;// laays số cuối
        if (digit % 2 !== 0){
            sum *= digit;
        }
        n = Math.floor(n / 10); // loại số cuối
    }
    return sum;
}

function printProEvenDigits(n){
    console.log(`28. Tong ChuSo la: ${proEvenDigits(n)}`);
}
printProEvenDigits(123456789);

// 29)Cho số nguyên dương n . Hãy tìm chữ số đầu tiên của n

function findFirstDigit(n) {
    while (n >= 10) {
        n = Math.floor(n / 10); // loop Chia n cho 10 để loại bỏ cuối
    }
    return n; // Chữ số đầu tiên sẽ là số cuối cùng còn lại
}

function printFirstDigits(n){
    console.log(`29. soDauTien: ${findFirstDigit(n)}`);
}

printFirstDigits(123456789);


// 30)Hãy tìm chữ số đảo ngược của số nguyên dương n

function ReverseDigits(n) {
    let reverse = 0;

    while (n > 0){
        let digit = n % 10; // lay so cuoi
        reverse = (reverse * 10) + digit;
        n = Math.floor(n / 10); // loại số cuối
    }
    return reverse;
}

function printReverseDigits(n){
    console.log(`30. reverse number : ${ReverseDigits(n)}`);
}
printReverseDigits(123456789);

// 31)Tìm chữ số lớn nhất của số nguyên dương n

function BiggestNum(n){
    let max = 0;

    while (n > 0){
        let digit = n % 10;
        if (digit > max){
        max = digit;
        }
        n = Math.floor (n / 10);
    }
    return max;
}

function printBiggestNum(n){
    console.log(`31. max number : ${BiggestNum(n)}`);
}
printBiggestNum(123495008);

// 32)Tìm chữ số nhỏ nhất của số nguyên dương n

function MinNum(n){
    let min = 9;

    while (n > 0){
        let digit = n % 10;
        if (digit < min){
        min = digit;
        }
        n = Math.floor (n / 10);
    }
    return min;
}

function printMinNum(n){
    console.log(`32. max number : ${MinNum(n)}`);
}
printMinNum(234905678);

// 33)Hãy kiểm tra số nguyên dương n có toàn chữ số lẻ hay không ?

function EvenCheck(n) {

    while (n > 0) {
        let digit = n % 10;// laays số cuối
        if (digit % 2 === 0){ // lập tức loại bỏ
            return false;
        }
        n = Math.floor(n / 10); // loại số cuối
    }
    return true;// cho qua
}

function printEvenCheck(n){
    if (EvenCheck(n)){
        console.log(`29.checked even: ${EvenCheck(n)}`);
    } else {
        console.log(`29.checked even: ${EvenCheck(n)}`);
    }
    
}

printEvenCheck(2468);

// 34)Hãy kiểm tra số nguyên dương n có toàn chữ số chẵn hay không ?

function EvenCheck(n) {

    while (n > 0) {
        let digit = n % 10;// laays số cuối
        if (digit % 2 !== 0){ // lập tức loại bỏ
            return false;
        }
        n = Math.floor(n / 10); // loại số cuối
    }
    return true; // cho qua
}

function printEvenCheck(n){
    if (EvenCheck(n)){
        console.log(`29.checked even: ${EvenCheck(n)}`);
    } else {
        console.log(`29.checked even: ${EvenCheck(n)}`);
    }
    
}

printEvenCheck(2468);

// 35) Viết chương thực hiện các yêu cầu sau:



// a) Đọc 1 file text chứa dữ liệu của 1 đồ thị được cho dưới dạng ma trận kề. File text được



// lưu dưới dạng như sau:


// o Dòng đầu tiên lưu số N là số lượng đỉnh của ma trận (N>10)


// o N dòng tiếp theo mỗi dòng gồm N giá trị chỉ gồm 2 số 0 và 1.


// b) Hãy viết chương trình duyệt đồ thị đã cho theo chiều sâu và chiều rộng xuất phát từ đỉnh


// 1.


// c) Đếm xem trong đồ thị có bao nhiêu miền liên thông. Mỗi miền liên thông chứa những


// đỉnh nào?