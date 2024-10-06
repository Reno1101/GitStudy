/*

    - CHuỗi đặc biệt: \n. \t
    - Spring propert/method:
        + lenght
        + slice()   cắt chuỗi, dùng với cả mảng
        + substring()   cắt chuỗi
        + replace()     thay thế
        + includes()     có chứa hay k
        + toUpperCase()
        + toLowerCase()
        + concat    nối chuỗi
        + trim()    xóa dấu cách ở đầu và cuối
        + split()   tach chuỗi thành mảng
        + join()    hàm này của mảng, gộp mảng thành chuỗi
        + String search:
            - indexof(), lastIndexOf(), endsWith(), startWith()
        + template string: ``, ${}
        +charAt()
    - Number:
        + Number method: toString(), toFixed()
        + Convert String to Number: Number(), parseFloat(), parseInt(), + (gộp number)
*/

// Bt 0

//console.log(b[0]);  // ten dau
//console.log(b[b.lenght - 1])   // ten cuoi

function TenDem(n){
    x = n.split(" ")

    console.log(x[0]);  // ten dau
    console.log(x[x.length - 1])   // ten cuoi

    let tendem = "";  // ten dem
    
    for (let i = 1; i < (x.length - 1); i++){  //i = 1 -> (n-1) // (01234) 5
        tendem += x[i] + ' ';
    }
    return tendem;
}

function printTenDem(n){
    console.log(`TenDem: ${TenDem(n)}`);
}
printTenDem("ngUyeN vAn kim nguyet khAng");

//           0      1   2   3      4      5 = length
// Bt 1
// Correction chữ in hoa

function chuanHoaTen(n){
    let a = n.toLowerCase();
    a = a.slice(0, 1).toUpperCase() + a.slice(1); //viet hoa chu cai dau
    //Nguyen + V +
    for (let i = 1; i < a.length; i++){
        if (a[i] === " "){  // bat dau tu _van -> 0 _ 1 V 2 a 3 n 4
            a = a.slice(0, i+1) + a.slice(i+1, i+2).toUpperCase() + a.slice(i+2);
        }
    }
    return a;
}


function printchuanHoaTen(n){
    console.log(`Chuan hoa ten: ${chuanHoaTen(n)}`);
}

printchuanHoaTen("ngUyeN vAn khAng");


// Bt 2
//tính tổng các số trong chuỗi

function sumString(n){
    let sum = 0;
    for (let i = 1; i < n.length; i++){
        if (n.charCodeAt(i) <= 57 && n.charCodeAt(i) >= 48){  //dung bang ma ASCII 
            sum += n.charCodeAt(i) - 48; //ép sang acsii (so acssi - 48)
        }
    }
    return sum;
}

function printTongString(n){
    console.log(`Sum number in n: ${sumString(n)}`);
}

printTongString("m1m2n3b4");






// cách 2
// function sumOfNumbersInString(n) {
//     let sum = 0;
//     for (let i = 0; i < n.length; i++) {
//         if (!isNaN(n[i]) && n[i] !== " ") { // loại các kí tự # số && dấu cách
//             sum += parseInt(n[i]); //ép sang number
//         }
//     }
//     return sum;
// }

// function printumOfNumbersInString(n){
//     console.log(`Sum number in n: ${sumOfNumbersInString(n)}`);
// }

// printumOfNumbersInString("abc123def45");


// Cấp độ 1
// Bài tập 1: Đảo ngược chuỗi
// Viết một hàm nhận vào một chuỗi và trả về chuỗi đảo ngược của nó. 
// Ví dụ: Nếu nhập vào "Hello", hàm sẽ trả về "olleH".

function reverseChar(str) {
    return str.split("").reverse().join("");
}


function printReverse(n){
    console.log(`ReverseChar: ${reverseChar(n)}`);
}

printReverse("Hello");

// Bài tập 2: Đếm số lượng ký tự
// Viết một hàm nhận vào một chuỗi và một ký tự, 
// sau đó trả về số lần xuất hiện của ký tự đó trong chuỗi. 
// Ví dụ: Nếu chuỗi là "programming" và ký tự là "m", hàm sẽ trả về 2.

function countChar(str, char){
    let count = 0;
    for (let i = 0; i < str.length; i ++){
        if (str[i] === char){
            count++;
        }
    }
    return count;
}


function printCountChar(str, char){
    console.log(`Number of char: ${countChar(str, char)}`);
}
printCountChar("Hello programming", "l");


// Bài tập 3: Chuẩn hóa tên
// Viết một hàm nhận vào một chuỗi chứa tên và chuẩn hóa 
// nó theo định dạng "Họ Và Tên". Ví dụ: Nếu nhập vào "ngUYỄN VăN a", 
// hàm sẽ trả về "Nguyễn Văn A".


function chuanHoaTen(n){
    ten = n.toLowerCase()
    ten = ten.slice(0,1).toUpperCase() + ten.slice(1);
    //Nguyen + H
    for (i = 1; i < ten.length; i++){
        if (ten[i] === " "){
            ten = ten.slice(0, i+1) + ten.slice(i+1, i+2).toUpperCase() +ten.slice(i+2);
        }
    }
    return ten;
}


function printChuanHoaTen(n){
    console.log(`ChuanHoaTen: ${chuanHoaTen(n)}`);
}
printChuanHoaTen("ngUYỄN hữu VăN a");



// Bài tập 4: Loại bỏ khoảng trắng
// Viết một hàm nhận vào một chuỗi và loại bỏ tất cả các khoảng 
// trắng thừa trong chuỗi. 

// Ví dụ: Nếu chuỗi là " Hello     world    ", hàm sẽ trả về "Hello world".


function trimmed(str){
    str = str.trim();
    spaceFound = false;
    result = "";

    for (i = 0; i < str.length; i++){
        if ( str[i] === " "){
            if (!spaceFound){
                result += " ";
                spaceFound = true;
            }
        } else {
            result += str[i];
            spaceFound = false;
        }
    }
    return result;

}


function printTrim(str){
    console.log(`Result is : ${trimmed(str)}`);
}
printTrim(" Hello     this      is      JavaScript");


//cach 2:


function trimmed2(str){

    str = str.trim();
    result = "";
    spaceFound = false;
    for (i = 0; i < str.length ; i++){
        if (str[i] === " " && !spaceFound){// nếu spacefound thì skip chuỗi
            result += " ";//thêm " " vào chuỗi
            spaceFound = true; //tim thấy space đầu tiên, active spacefound
        } else {
            result += str[i];
            spaceFound  = false;
        }
    }
    return result;
}

function printTrim2(str){
    console.log(`Result 2 is : ${trimmed2(str)}`);
}
printTrim2("Hello     this      is      JavaScript");



// Bài tập 5: Chuyển đổi sang dạng title
// Viết một hàm nhận vào một chuỗi và chuyển đổi nó sang dạng title case 
// (chữ cái đầu mỗi từ viết hoa). Ví dụ: Nếu chuỗi là "welcome to javascript", 
// hàm sẽ trả về "Welcome To Javascript".

function titled(n){
    m = n.toLowerCase();
    m = m.slice(0,1).toUpperCase() + m.slice(1);

    for (i = 1; i < m.length; i++){
        if ( m[i] === " "){
            m = m.slice(0, i+1) + m.slice(i+1, i+2).toUpperCase() + m.slice(i+2);
        }
    }
    return m;
}


function printTitle(n){
    console.log(`Titled: ${titled(n)}`);
}

printTitle("welcome to javascript");



// Bài tập 6: Đếm số từ
// Viết một hàm nhận vào một chuỗi và trả về số lượng từ trong chuỗi. 

// Ví dụ: Nếu chuỗi là "This is a sentence.", hàm sẽ trả về 4.



function countedSentences(n){
    n = n.trim(); // trim đầu và cuối sentences
    count = 0;
    wordFound = true; // lấy chữ đầu tiên trong sentences
    for (let i = 0; i < n.length; i++){
        if ( n[i] !== " " && wordFound){
            count ++;
            wordFound = false;//kết thúc đếm, hét chuỗi wordfound.
        } else if ( n[i] === " " && !wordFound ){
            wordFound = true;
        }
    }
    return count;
}
function printCountedResult(n){
    console.log(`Counted sentences: ${countedSentences(n)}`);   
}

printCountedResult("This is a sentence")



// Bài tập 7: Kiểm tra chuỗi đối xứng
// Viết một hàm nhận vào một chuỗi và kiểm tra xem chuỗi đó có phải là
// chuỗi đối xứng hay không. Ví dụ: Nếu chuỗi là "madam", hàm sẽ trả về true.

function mirror(str){
    cleanStr = str.trim().toLowerCase().replace(/\s+/g, '');

    left = 0;
    right = cleanStr.length - 1;

    while (left < right){
        if (cleanStr[left] !== cleanStr[right]){
            return false;
        }
        left ++;
        right --;
    }
    return true;
}

function printmirror(str){
    console.log(`mirror: ${mirror(str)}`);   
}

printmirror("madam");



// Bài tập 8: Thay thế chuỗi con
// Viết một hàm nhận vào một chuỗi, một chuỗi con cần thay thế và một 
// chuỗi thay thế, sau đó trả về chuỗi mới sau khi thay thế. 

// Ví dụ: Nếu chuỗi là "Hello, world!", chuỗi con cần thay thế là "world" 
// và chuỗi thay thế là "universe", hàm sẽ trả về "Hello, universe!".



function replaceSubstring(str, subStr, newSubStr) {
    // Sử dụng replace() để thay thế chuỗi con đầu tiên tìm thấy
    return str.replace(subStr, newSubStr);
}


function printReplaced(str, subStr, newSubStr){
    console.log(`replaced ${replaceSubstring(str, subStr, newSubStr)}`);   
}

printReplaced("Hello, world!","world", "universe" );

