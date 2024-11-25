


// var str = "hello world"
// var str1 = str.charCodeAt(1);
// var str2 = str.charCodeAt(-2);
// console.log(str1) 

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
console.log(person.fullName());


//Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.


var student =  { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12  };

console.log(student);
delete student.rollno;
console.log(student);

// Write a JavaScript program to get the length of a JavaScript object.

Object.objsize = function(Myobj) {
    var osize = 0, key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
};

var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

var objsize = Object.objsize(student);
console.log('Size of the current object : '+objsize);






//==================================================================================================


// Level 1:
// bai 1: Khai báo mảng chứa các số nguyên
// in ra màn hình giá trị lớn nhất, nhỏ nhất của mảng.

function maxMin0() {
    const arr = [3, 7, 2, 5, 9, 1]; // Định nghĩa mảng chứa các số

    const maxVal = Math.max(...arr); // Tìm giá trị lớn nhất bằng cách spread mảng
    const minVal = Math.min(...arr); // Tìm giá trị nhỏ nhất bằng cách spread mảng

    return { maxVal, minVal }; // Trả về cả giá trị lớn nhất và nhỏ nhất
}

function prmaxMin0() {
    const { maxVal, minVal } = maxMin0(); // Gọi hàm maxMin và nhận kết quả

    console.log(`Max: ${maxVal}`); // In ra giá trị lớn nhất
    console.log(`Min: ${minVal}`); // In ra giá trị nhỏ nhất
}

prmaxMin0(); // Thực thi hàm để hiển thị kết quả

//hoac

function maxMin1(){
    arr = [ 1, 4, 6, 12, 45, 7, 2, 5, 36]

    console.log(`Max: ${Math.max(...arr)}`);
    console.log(`Max: ${Math.min(...arr)}`);
}

maxMin1();

//ngan hon
function maxmin(arr){
    const maxVal = Math.max(...arr);
    const minVal = Math.min(...arr);

    console.log(`max la ${maxVal}`);
    console.log(`min la ${minVal}`);

}

maxmin([1, 2, 3, 4, 5, 6, 7, 8]);

//cach 2


// tạo hàm tính max min
function findMaxMin(arr){
    let max = arr[0];
    let min = arr[0];// index bang 0

    for (i = 0; i < arr.length ; i++){//cho loop  index
        if (arr[i] > max){ //index tại đâu lớn hơn thì max = index
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return {max,min}; //trả về object chứa max và min
}



function prMaxMin(arr){ //Hàm prMaxMin gọi hàm findMaxMin với mảng được truyền vào và lưu kết quả vào biến result.
    let result  = findMaxMin(arr);
    console.log(`Max la: ${result.max}`);
    console.log(`Min la: ${result.min}`);
}

prMaxMin([3, 7, 2, 5, 9, 1]) //Mảng [3, 7, 2, 5, 9, 1] được truyền vào hàm findMaxMin(arr)

//const array = [3, 7, 2, 5, 9, 1]; // tạo mảng
//prMaxMin(array)//truyền mảng vào hàm


// In ra màn hình tổng, tích và giá trị trung bình của mảng đó.

function findSumPowerAvr(arr){
    let sum = 0; pow = 1; avr = 0;
    for (i = 0; i < arr.length; i++){
        sum += arr[i];
        pow *= arr[i];
        avr = sum/2;
    }
    return {sum, pow,avr};
}


function prSumPowerAvr(arr){
    let result  = findSumPowerAvr(arr);
    console.log(`Sum la: ${result.sum}`);
    console.log(`Pow la: ${result.pow}`);
    console.log(`Avr la: ${result.avr}`);
}

prSumPowerAvr([3, 7, 2, 5, 9, 1])


// Đếm số 3 xuất hiện bao nhiêu lần trong mảng.


function counted(n){
    let count = 0;
    for (let i = 0; i < n.length; i++){
        if (n[i] === 3){
            count++;
        }
    }
    return count;
}

function prCount(n){
    console.log(`num counted: ${counted(n)}`);
}

prCount([3, 7, 2, 5, 9, 1, 3, 3])

// Đếm trong mảng có bao nhiêu số nguyên tố.


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


function countPrime(arr){
    let count = 0;
    for (let i = 0; i< arr.length; i++){
        if (isPrime(arr[i])){ //truyền array vào isPrime(n), rồi kiểm tra từng phần tử n[i] 
            count ++;
        }
    }
    return count;
}

function prPrime(n){
    console.log(`Trong mang co ${countPrime(n)} so nguyen to`);
}

prPrime([2 , 3 , 5 , 7 , 11 , 4 , 8 , 12])

// Xóa phần tử tại vị trí 3.

function del_(arr) {
    arr.splice(3, 1); // Removes the element at index 3
    return arr;
}

function prDeleted_(arr) {
    console.log(`Mang sau khi xoa vi tri 3 la ${del_(arr)}`);
}

prDeleted_([2, 3, 5, 7, 11, 4, 8, 12]);

//cach 2 (lưu ý cách delete sẽ để lại khoảng trống trong array)

function del(arr) {
    delete arr[3]; // Removes the element at index 3
    return arr;
}

function prDeleted(arr) {
    console.log(`Mang delete vi tri 3 la ${del(arr)}`);
}

prDeleted([2, 3, 5, 7, 11, 4, 8, 12]);

// Xóa hết các số có giá trị là 2.

function del2(arr){
    for (i = 0; i < arr.length; i++){
        if (arr[i] === 2){
            delete arr[i];
        }
    }
    return arr;
}

function prDeleted2(arr) {
    console.log(`Mang sau khi xoa 2 la ${del2(arr)}`);
}

prDeleted2([2, 3, 5, 7, 11, 2, 8, 12, 2 , 6]);

//cách 2, xóa 2 và không để lại khoảng trống

function del2b(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            arr.splice(i, 1);  // Xóa phần tử tại chỉ mục i
            i--;  // Giảm 1 i để kiểm tra lại chỉ mục này vì mảng đã thay đổi độ dài
        }
    }
    return arr;
}

function prDeleted2b(arr) {
    console.log(`2b Mang sau khi xoa 2 la ${del2b(arr)}`);
}

prDeleted2b([2, 3, 5, 7, 11, 2, 8, 12, 2 , 6]);


// sử dụng filter

function filter2c(arr){
    return arr.filter(num => num !== 2);
}

function prFiltered2c(arr) {
    console.log(`Filtered Mang la ${filter2c([2, 3, 5, 7, 11, 2, 8, 12, 2 , 6])}`);
}

// Kiểm tra trong mảng, nếu có số 6 thì chèn số 8 vào sau nó.

function push8(arr) {
    let i = 0;
    while (i < arr.length){  // Duyệt qua mảng và kiểm tra từng phần tử
        if (arr[i] === 6){
            arr.splice(i + 1, 0 , 8); //0 xóa, chỉ chèn 8 vào sau 6
            i++;// Nhảy qua số 8 vừa chèn vào để tránh lặp lại
        }
        i++;// Tiếp tục với phần tử tiếp theo
    }
    return arr;
}

console.log(`Mang push 8 la ${push8([1, 1, 6, 7, 11, 6, 3, 2, 6])}`);

// Sắp xếp mảng tăng dần

function sortAscending(a, b){
    return a - b;
}

function sorted(n){
    return n.sort(sortAscending);
}

console.log(`Mang sorted la ${sorted([40,100,1,40,5,25,10])}`);


// 	Level 2:
// Bài 1: Khai báo 1 mảng số nguyên
// Kiểm tra mảng có 2 số chẵn gần nhau hay không, in ra (YES/NO)


function isEven(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === arr[i + 1] % 2){//hoac la if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0)
            return "Yes";
        }
    }
    return "No";
}

console.log(`Trong mang co so chan gan nhau ${isEven([40,100,1,40,5,25,10])}`);


// tách mảng ban đầu thành 2 mảng: một mảng chứa toàn số lẻ, 
//một mảng chứa toàn số chẵn (số 0 bỏ qua). in 2 mảng ra màn hình cách 
//nhau bởi ký tự ‘-’ (lẻ - chẵn). Nếu một trong 2 mảng có số phần 
//tử bằng 0 thì in ra -1




function categorize(arr){
    let odd = [];
    let even = [];

    for (i = 0; i < arr.length ; i++){
        if (arr[i] === 0 ){
            continue;
        }
        if (arr[i] % 2 !== 0){
            odd.push(arr[i])
        } else if (arr[i] % 2 === 0){
            even.push(arr[i])
        }
    }
    if (odd.length === 0 || even.length === 0){
        console.log(-1);
        
    } else {
        console.log("Even is", even);
        console.log("Odd is", odd);
        console.log(odd + " --- " + even);

    }
}

categorize([40,100,1,40,5,25,10,0])

// sắp xếp mảng theo thứ tự giảm dần và in ra màn hình


function decending(a, b){
    return a - b
}

function printDecending(n){
    console.log(`Giam dan la ${n.sort(decending)}`);
    
}
printDecending([1, 2, 3, 4, 3, 47, 5])

// hoac cachh viet ngan hon:

function printDecend(n){
    return n.sort(function(a, b){return a - b})
}

console.log(`Decending is ${printDecend([1, 2, 3, 4, 3, 47, 5])}`)

//hoac 

function sortNumbersDescending(...numbers) { //... rest parameter, dùng để nhiều hơn 2 biến
    // Sắp xếp các số trong mảng theo thứ tự giảm dần
    numbers.sort((a, b) => b - a);
    
    // In mảng đã sắp xếp
    console.log(numbers);
}

// Ví dụ sử dụng
sortNumbersDescending(10, 5, 8, 3, 7);  // Output: [10, 8, 7, 5, 3]
sortNumbersDescending(12, 45, 23, 89, 1); // Output: [89, 45, 23, 12, 1]



// Bài 2:Khai báo 1 mảng số nguyên.
// Khai báo 1 biến x có giá trị là số nguyên tùy ý, 
//Đếm số phần tử có giá trị nhỏ hơn x trong mảng

function compare( n, arr){
    let count = 0;
    for (i = 0; i < arr.length; i++){
        if ((n < arr[i])){
            count++;
        }
    }
    return count;
}

console.log(compare(7, [1, 5, 8, 22, 14, 100]));
 

// Tính trung bình cộng các số chia hết cho 3 mà 
//không chia hết cho 5 trong mảng

function divide3(n){
    let sum = 0
    for (let i = 0; i < n.length; i++){
        if (n[i] % 3 === 0 && n[i] % 5 !== 0){
            sum += n[i];
        }
    }
    return sum;
}

console.log(divide3([3, 5, 15, 22, 33, 100]));
 
// Kiểm tra trật tự mảng. Nếu mảng đã được sắp xếp 
//tăng dần hoặc giảm dần thì in ra màn hình YES, ngược lại in ra NO
 

function checkOrder(arr){
    let descending = true;
    let ascending = true;

    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] > arr[i+1]){
            descending = false;
        } else if (arr[i] < arr[i+1]){
            ascending = false;
        }
    }
    if (ascending || descending ){
        console.log("YEs");
    } else {
        console.log("No");
    }
}
checkOrder([1, 2, 3, 4, 5]);   // Output: YES (tăng dần)
checkOrder([5, 4, 3, 2, 1]);   // Output: YES (giảm dần)
checkOrder([1, 3, 2, 5, 4]);   // Output: NO


// Bài 3: Khai báo 1 mảng số thực
// Tính tổng trung bình cộng phần tử có phần nguyên 
//chẵn trong mảng, nếu không có phần tử có phần nguyên chẵn thì in ra -1.

function checkEven(n){
    let avr = 0;
    let sum = 0;
    for (let i = 0; i < n.length; i++){
        if (n[i] % 2 === 0){
            sum += n[i];
            avr = sum/2;
        }
    }
    if (sum === 0){
        console.log(-1);
    } else {
        console.log(`Avr la`, avr);
    }
    
}
checkEven([0, 2, 4, 5, 6, 12, 20, 5, 4, 3])


// Sắp xếp mảng tăng dần và in ra màn hình
function sortAscending2(arr){
    arr.sort((a, b) => b - a);
    return arr;
}

console.log(`Array ascending la ${sortAscending2([0, 2, 4, 5, 6, 12, 20, 5, 4, 3])}`);


// Chuyển tất cả các phần tử có phần nguyên lẻ thành 
//số 1.23 và in ra màn hình
 
// Bài 4: Khai báo 1 mảng số nguyên
// Chuyển tất cả các số chẵn có trong mảng thành số lẻ bằng 
// phép toán chia cho 2 (chia cho 2 đến bao giờ trở thành số lẻ, số 0 giữ nguyên)

function toOddArray(arr){
    for (let i = 0; i < arr.length; i++){
        while( arr[i] !== 0 && arr[i] % 2 === 0 ){
            arr[i] = arr[i]/2;
        }
    }
    return arr;
}

console.log(`array so le la ${toOddArray([0, 2, 4, 5, 6, 12, 20, 5, 4, 3])}`);



// Nếu phần tử không là số nguyên tố thì chuyển phần tử đó thành 
// số nguyên tố gần nó nhất( nếu 2 số nguyên tố gần phần tử đó thì 
// ưu tiên số nguyên tố nhỏ hơn nó)(dùng mảng ban đầu)


// bc 1: function check so nguyen to
// bc 2:fuction tim prime gan nhat
// b3 3:funtion chay array

function isPrime(k){
    if (k <= 1) return false;
    for (let i = 2; i < k; i++){
        if (k % i === 0){
            return false;
        }
    }
    return true;
}


function nearestPrime(n){
    //buoc 1: logic: kiem tra xem prime
    //split n to high and low
    let high_n = n;
    let low_n = n;

    //buoc 2: kiem tre prime gan nhat. dung isPrime
    // cong tru den khi dat prime
    while (!isPrime(high_n)){
        high_n ++;
    }
    while (low_n > 1 &&!isPrime(low_n)){// nếu số là 0 hoặc 1 sẽ lặp vô hạn, thêm điều kiện low_n>1
        low_n --;
    }
    if ((high_n - n) >= (n - low_n)){
        return high_n;
    } else {
        return low_n;
    }
    //return ra 1 so lon hoac be hon
}

function updateArray(arr){
    for (let i = 0; i < arr.length; i++){
        if (!isPrime(arr[i])){
            arr[i] = nearestPrime(arr[i])
        }
    }
    return arr;
}


console.log(`updated prime array la ${updateArray([0, 2, 4, 5, 6, 12, 20, 5, 4, 3])}`);


// Bài 1: Sắp xếp mảng sau theo thứ tự độ tuổi giảm dần
//cach 1


function ageSort(){
    const people = [
        { name: 'name1', age: 12 },
        { name: 'name2', age: 20 },
        { name: 'name3', age: 15 },
        { name: 'name4', age: 10 },
        { name: 'name5', age: 27 }
    ];

    people.sort((a,b) => b.age - a.age)
    console.log(people);



// Bài 2: Viết code chuyển mảng đã sắp xếp ở bài 1 thành mảng tên
// VD: [‘name4’, ‘name2’, ‘name3’, ‘name1’]


    namesss = people.map(x => x.name)
    console.log(namesss);
}

ageSort();


// Bài 3: Tạo 1 mảng có 100 phần tử toàn bộ là số 0, chuyển mảng vừa tạo 
// thành mảng mới có giá trị từ 0->99, lọc ra những số chia hết cho 5 rồi 
// tính tổng những số còn lại


function sum5(){

// Bước 1: Tạo mảng 100 phần tử toàn bộ là 0 và chuyển thành [0, 1, ..., 99]
    arr = new Array(100);
    arr = arr.fill(0) 
    for (i = 0; i < 100; i++){
        arr[i] = i + 1;
    }
// Bước 2: Lọc ra các số không chia hết cho 5
    const filtered = arr.filter(num => num % 5 !== 0);
// Bước 3: Tính tổng các số còn lại
    const sum = filtered.reduce((acc, num)=> acc + num, 0);
    console.log(sum);
}

sum5();

// Bài 4: Cho mảng sau
// Viết code nhóm các user có cùng name và cộng tổng số count thành một mảng mới
// VD:
// [
//   { name: 'name1', count: 38 },
//   { name: 'name3', count: 53 },
//   { name: 'name2', count: 47 }
// ]

function bt04(){
    const people = [
    { name: 'name1', count: 13 },
    { name: 'name3', count: 23 },
    { name: 'name1', count: 25 },
    { name: 'name2', count: 27 },
    { name: 'name3', count: 30 },
    { name: 'name2', count: 20 }
    ]


    const groupedPeople = people.reduce((acc, x) => {
        // Kiểm tra xem người với cùng tên đã có trong đối tượng chưa
        if (acc[x.name]) {
            acc[x.name].count += x.count; // Cộng dồn count nếu đã tồn tại
        } else {
            acc[x.name] = {...x}; // Copy object  
        }
        return acc;
    }, []);

    console.log(groupedPeople);
}

bt04();



// Bài 1: Tính tổng tiền thanh toán của giỏ hàng sau
function bt1(){
    const cart = [
        {
          title: "DẾ MÈN PHIÊU LƯU KÝ",
          price: 50000,
          quantity: 2,
        },
        {
          title: "KIM ĐỒNG",
          price: 40000,
          quantity: 7,
        },
        {
          title: "NGỌN LỬA ĐÊM BA MƯƠI",
          price: 21000,
          quantity: 4,
        },
        {
          title: "CÔ BÉ GANH TỊ",
          price: 27500,
          quantity: 5,
        },
    ];
    
    console.log(cart.reduce((acc, x) => {return acc + x.quantity * x.price},0));
}
bt1();

  // Bài 2: Nhóm các cầu thủ theo quốc gia
function bt2(){
    const team = [
        { name: "Công Phượng", country: "Việt Nam" },
        { name: "Ronaldo", country: "Portugal" },
        { name: "Quang Hải", country: "Việt Nam" },
        { name: "Messi", country: "Argentina" },
        { name: "Nani", country: "Portugal" },
    ];
    
  // kết quả:
  // {
  //   'Việt Nam': [
  //     { name: 'Công Phượng', country: 'Việt Nam' },
  //     { name: 'Quang Hải', country: 'Việt Nam' }
  //   ],
  //   Portugal: [
  //     { name: 'Ronaldo', country: 'Portugal' },
  //     { name: 'Nani', country: 'Portugal' }
  //   ],
  //   Argentina: [ { name: 'Messi', country: 'Argentina' } ]
  // }
  
    const groupedPlayers = team.reduce((acc, x) => {
        //Gọi phương thức reduce trên array team. Phương thức này sẽ lặp qua từng cầu thủ và tích lũy kết quả vào biến acc (accumulator).
        if(!acc[x.country]){
            acc[x.country] =[];
        };
        // xác định xem quốc gia của cầu thủ hiện tại (player.country) đã có trong đối tượng acc chưa. chưa thì tạo mảng rỗng với tên là player.country
    
        acc[x.country].push(x);
        return acc;
    },{})
    
    console.log(groupedPlayers);
}

bt2();
  

  // Bài 3: Gom các object của posts thành mảng posts
function bt3(){
    const topics = [
        {
          topic: "ReactJS",
          posts: [
            { postID: "id1", title: "title1" },
            { postID: "id2", title: "title2" },
          ],
        },
        {
          topic: "Vue.js",
          posts: [
            { postID: "id3", title: "title3" },
            { postID: "id4", title: "title4" },
          ],
        },
      ];

  // kết quả:
  // [
  //   { postID: 'id1', title: 'title1' },
  //   { postID: 'id2', title: 'title2' },
  //   { postID: 'id3', title: 'title3' },
  //   { postID: 'id4', title: 'title4' }
  // ]
  
    console.log(topics.reduce((b,a) => {
        return b.concat(a.posts) // duyệt qua a.posts rồi lưu vào b, rồi concat
    },[]));
}

bt3();


  // Bài 4: Tính tổng và tích của mảng
    // kết quả: [1, 4, 5, 6]
 // gợi ý: !arr1.includes(curr) => pre.push(curr)
  
function bt4(){
    const arr = [49, 30, 19, 2, 29];

    const sum = arr.reduce((acc, num) => acc + num , 0)
    const pow = arr.reduce((acc, num) => acc * num , 1)

    console.log(sum, pow);
}
bt4()
  // Bài 5: Tìm phần tử khác nhau giữa 2 mảng
function bt5(){
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [2, 3, 6];

    // Lấy các phần tử có trong arr1 nhưng không có trong arr2
    const diff1 = arr1.filter(num => !arr2.includes(num));

    // Lấy các phần tử có trong arr2 nhưng không có trong arr1
    const diff2 = arr2.filter(num => !arr1.includes(num));

    // Kết hợp cả hai mảng
    const result = diff1.concat(diff2);

    console.log(result);
}

  // Bài 6: Làm phẳng mảng
  //ket qua: [0,1,2,3,4,5,6,7,8,9,10,11,12]
  //link tham khảo: https://anonystick.com/blog-developer/4-cach-lam-phang-mot-mang-flatten-array-voi-javascript-2020073169820206#t-2
function bt6(){
    const arrFlat = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

    function flattenArray(arr){
        return arr.reduce((acc, cur) => {
            if (Array.isArray(cur)){// Kiểm tra nếu val là mảng, thì gọi lại flattenArray để làm phẳng tiếp
                return acc.concat(flattenArray(cur));
            } else {// Nếu không phải là mảng, thêm phần tử vào mảng tích lũy acc
                return acc.concat(cur);
            }
        },[]);
    }
    
    console.log(flattenArray(arrFlat));
}  

bt6();
  // Bài 7: Đến số lần xuất hiện các phần tử trong mảng
  // kết quả: { '1': 1, '2': 4, '3': 2, '4': 2, '5': 1, '7': 1, '8': 2 }
  //có thể làm bằng 2 cách: dùng map hoặc reduce
function bt7() {
    const arrCount = [1, 2, 3, 4, 5, 2, 3, 4, 2, 2, 7, 8, 8];
    
    const result = arrCount.reduce((acc, x) => {
        // Kiểm tra xem phần tử đã tồn tại trong đối tượng chưa, nếu có tăng đếm lên, nếu chưa khởi tạo đếm là 1
        acc[x] = acc[x] + 1 || 1;
        return acc;
    }, {});

    console.log(result);
}

bt7();


