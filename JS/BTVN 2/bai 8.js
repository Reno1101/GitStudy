// viet phuog trinh kiem tra 2 so co tao thanh tam giac ahy khong
// khai bao loai tam giac

// Declare three integer variables
let a = 5;
let b = 7;
let c = 10;

// Function to check if the given sides can form a triangle
function isValidTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

// Function to determine the type of triangle
function getTriangleType(a, b, c) {
    if (a === b && b === c) {
        return "Equilateral triangle";
    } else if (a === b || b === c || a === c) {
        return "Isosceles triangle";
    } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
        return "Right triangle";
    } else {
        return "Scalene triangle";
    }
}

// Main logic
if (isValidTriangle(a, b, c)) {
    const triangleType = getTriangleType(a, b, c);
    console.log(triangleType);
} else {
    console.log("Cannot form a triangle");
}