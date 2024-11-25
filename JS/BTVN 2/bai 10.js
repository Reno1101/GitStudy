/*
Khai báo biến với giá trị là 1 năm bất kỳ.
Viết một chương trình kiểm tra xem năm đó có phải là năm nhuận hay không.
In ra màn hình thông báo tương ứng.
*/


// Declare a variable with the value of any year
let year = 2024;

// Function to check if the year is a leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Main logic
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}