// Bài 1: (2.5đ) Nhập mảng gồm n phần tử nguyên (n>=3 && n < 1000)
// Tìm những số siêu nguyên tố và in chúng ra màn hình
// (số siêu nguyên tố được định nghĩa như sau: tất cả số các chữ số của số đó đều là số nguyên tố)
// Tính tổng tất cả các số siêu siêu nguyên tố
// (số siêu siêu nguyên tố được định nghĩa như sau: tất cả các chữ số của số đó là số nguyên tố, chính nó cũng là số nguyên tố và mỗi khi bỏ đi phần đơn vị của 1 số cho tới hết thì các số đó vẫn là số nguyên tố)

// VD: số siêu nguyên tố: 2352
// VD: số siêu siêu nguyên tố: 233



function isPrime(n){
    if (n < 2){
        return false;
    }

    for (let i = 2; i < n; i++){
        if (n % i === 0){
            return false;
        }
    }
    return true;
}

// Hàm kiểm tra tất cả các chữ số của số đó có phải là số nguyên tố hay không
function isSuperPrimeNumber(num) {
    const primeDigits = [2, 3, 5, 7]; // Các chữ số nguyên tố
    while (num > 0) {
        let digit = num % 10; // Lấy chữ số cuối cùng
        if (!primeDigits.includes(digit)) return false; // Nếu chữ số không phải số nguyên tố
        num = Math.floor(num / 10); // Loại bỏ chữ số cuối cùng
    }
    return true; // Nếu tất cả chữ số đều là số nguyên tố
}

// Hàm tìm các số siêu nguyên tố trong một phạm vi
function findSuperPrimeNumbers() {
    let superPrimes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i) && isSuperPrimeNumber(i)) { // Số nguyên tố và các chữ số đều nguyên tố => siêu siêu nguyên tố
            superPrimes.push(i);
        }
    }
    return superPrimes;
}

const limit = 1000;
console.log(`Các số siêu nguyên tố trong khoảng từ 1 đến ${limit}:`, findSuperPrimeNumbers(limit));

// Bài 2: (2.5đ)  Nhập mảng gồm n phần tử nguyên (n>3 && n < 100)
// Nếu tất cả các phần tử trong mảng đều là số chính phương thì sắp xếp tăng dần và in ra màn hình
// Ngược lại: Xóa tất cả các số không phải là số chính phương ra khỏi mảng và in ra màn hình


function checkSqrt(){
    const arr = [0 , 1 , 9, 64, -9, 23]


    const isPerfectSqrt = arr.reduce((acc, x) => {
        const sqrt = Math.sqrt(x);
        if (Number.isInteger(sqrt)){
            acc.push(x);
        } else {
            delete(x);
        }
        return acc;

    },[])

    console.log(isPerfectSqrt.sort((acc, x) => acc - x));
}
checkSqrt()

// Bài 3: (2.5đ)  Nhập mảng gồm n phần tử nguyên (n>=3 && n <= 100)
// Nếu tất cả các phần tử trong mảng đều là số hoàn hảo thì tìm khoảng cách xa nhất giữa các phần tử trong mảng
// Ngược lại: Xóa hết các phần tử lẻ trong mảng và in ra màn hình

function isPerfectNumber(num) {
    if (num <= 0) return false;
    let sum = 0;
    for (let i = 1; i <= num/2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

function findMaxDistance(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min; //Furthest distance
}


function removeOddNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

function processArray(arr) {
    // điều kiện
    if (arr.length < 3 || arr.length > 100) {
        console.log("Số phần tử phải nằm trong khoảng từ 3 đến 100.");
        return;
    }

    // check every if is perfect num
    const allPerfectNumbers = arr.every(isPerfectNumber);

    if (allPerfectNumbers) {
        // Nếu tất cả đều là số hoàn hảo, tìm khoảng cách xa nhất
        const maxDistance = findMaxDistance(arr);
        console.log("Tất cả các phần tử trong mảng đều là số hoàn hảo.");
        console.log("Khoảng cách xa nhất giữa các phần tử là:", maxDistance);
    } else {
        // Ngược lại, xóa các phần tử lẻ và in ra mảng mới
        const evenNumbers = removeOddNumbers(arr);
        console.log("Không phải tất cả các phần tử trong mảng đều là số hoàn hảo.");
        console.log("Mảng sau khi xóa các phần tử lẻ:", evenNumbers);
    }
}

processArray ([6, 28]);


// Bài 4: (2.5đ)  Nhập mảng gồm n phần tử nguyên (n>3 && n <= 100)
// Nếu trong mảng tồn tại phần tử có giá trị bằng với trung bình cộng các phần tử trong mảng thì đếm số phần tử có giá trị đó
// Ngược lại: Xóa phần tử có giá trị gần với giá trị trung bình trong mảng nhất


function removeClosestToAverage(arr) {
    const n = arr.length;

    if (n.length <= 3 || n.length > 100) {
        console.log("Độ dài mảng không hợp lệ. n phải lớn hơn 3 và nhỏ hơn hoặc bằng 100.");
        return;
    }

    // Tính avr của mảng
    const average = arr.reduce((sum, num) => sum + num, 0) / n;
    // Tìm các phần tử bằng giá trị avr

    const countEqualAverage = arr.filter(num => num === average).length; //.length để đếm số lần trả ra
    if (countEqualAverage > 0) {

        console.log(`Số phần tử bằng giá trị trung bình (${average}): ${countEqualAverage}`);
    } else {
        // Tìm phần tử gần nhất với avr
        const closestValue = arr.reduce((acc, x) =>
            { if (Math.abs(x - average) < Math.abs(acc - average)) {
                x
                } else { 
                    acc
                }
            }
        );

            // Xóa phần tử gần với avr nhất
        const newArray = arr.filter(num => num !== closestValue);
        console.log(`Không có phần tử nào bằng giá trị trung bình.`);
        console.log(`Mảng sau khi xóa phần tử gần với trung bình (${average}) nhất:`, newArray);
    }
}


removeClosestToAverage([7, 5, 3, 1, 5, 9]);