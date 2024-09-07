
/*
Khai báo 1 biến với giá trị là 1 ký tự, ví dụ, let a = ‘K’
Viết một chương trình kiểm tra xem ký tự đó là chữ cái in hoa, chữ cái in thường, hoặc không phải là chữ cái. In ra màn hình thông báo tương ứng.

Gợi ý: áp dụng bảng mã ascii

*/

// Declare a variable with a character value
let a = 'K';

// Function to check if the character is uppercase, lowercase, or not a letter
function checkCharacterType(char) {
    let asciiValue = char.charCodeAt(0);

    if (asciiValue >= 65 && asciiValue <= 90) {
        console.log("uppercase letter.");
    } else if (asciiValue >= 97 && asciiValue <= 122) {
        console.log("lowercase letter.");
    } else {
        console.log("not a letter.");
    }
}

// Call the function with the character
checkCharacterType(a);