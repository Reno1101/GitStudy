//Các loại function-------------------------------------------------------

//Declaration function -- co the hosting
showMessage()

function showMessage(){
    console.log(" Hello");
}
  
//Expression function

var showMessage2 = function(){
    console.log(" Hello");
}


setTimeout(function showMessage3(){
    console.log(" Hello");
})

var myObject = {
    showMessage4: function(){
        console.log(" Hello");
    }
}

//arrow function"

hello = function() {
    return "Hello World!";
  }

//with arrow
hello = () => {return "Hello World!";}
//with parameters
hello = (val) => "Hello " + val;
//or
let myFunction = (a, b) => a * b;

//callback"----------------------------------------------------------

function greeting(n) {//hàm viết ra hello têm
    console.log(`Hello, ${n}!`);
}

function processUserInput(f) {//hàm nhận vào tên f = callback
    const n = 'nguyen minh duc';
    f(n);//
}

// Gọi hàm processUserInput và truyền hàm greeting vào như một callback để thực hiện nhập tên trc
processUserInput(greeting)
//----------------------------------------------------------

const numbr = [1, 2, 3, 4, 5];

numbr.forEach(function(numbr) {
    console.log(numbr * 2);
});

//forEach() nhận một hàm callback, và với mỗi phần tử trong mảng numbers, nó gọi lại hàm đó với giá trị của phần tử.
//Trong ví dụ này, hàm callback sẽ nhân đôi giá trị của từng số và in ra kết quả



//----------------------------------------------------------

//Accessing a function without () returns the function and not the function result:


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Hàm kiểm tra số chẵn
function isEven(number) {
  return number % 2 === 0;
}
// truyền array vào numbers, truyền hàm isEven vào .filter()
console.log(number.filter(isEven))



/*
-------------------------------------------------------------------------------------------------------------
function prPrime(n){
    console.log(`Trong mang co ${countPrime(n)} so nguyen to`);
}
prPrime([2 , 3 , 5 , 7 , 11 , 4 , 8 , 12])

-------------------------------------------------------------------------------------------------------------


console.log(`Mang push 8 la ${push8(n)}`);
push8([2 , 3 , 5 , 7 , 11 , 4 , 8 , 12])
-------------------------------------------------------------------------------------------------------------
function isEven(arr){}
console.log(`Trong mang co so chan gan nhau ${isEven([40,100,1,40,5,25,10])}`);

*/

function sortNumbersDescending(...numbers) { //... rest parameter, dùng để nhiều hơn 2 biến
    // Sắp xếp các số trong mảng theo thứ tự giảm dần
    numbers.sort((a, b) => b - a); //function giam
    
    // In mảng đã sắp xếp
    console.log(numbers);
}

// Ví dụ sử dụng
sortNumbersDescending(10, 5, 8, 3, 7);  // Output: [10, 8, 7, 5, 3]
sortNumbersDescending(12, 45, 23, 89, 1); // Output: [89, 45, 23, 12, 1]


/*

num (method(propertise: value))


- Array và làm việc với array: (array method)
    + chỉ mục là key hoặc index
    
    + thay đổi bất kì bằng index[]:
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits[0] = "Kiwi"; 
        => fruit=["Kiwi,Orange,Apple,Mango"]

    + thay đổi (cuối mảng) bằng .length[]:
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits[fruits.length] = "Kiwi";
        => fruit=["Banana,Orange,Apple,Mango,Kiwi"]

    + delete[]:
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        delete fruits[0];
        => fruit = ["Orange", "Apple", "Mango"]

    + toString() nối bằng dấu ","
    + reverse()
    + join() array = string;
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        console.log(fruits.join(" * "));
        => fruits = Banana * Orange * Apple * Mango

    + pop() xóa phần tử cuối mảng
    + push() thêm phần tử vào cuối mảng
    + shift() xoá phần tử đầu mảng
    + unshift() thêm phần tử đầu mảng

    + special value []
    + concat() nối mảng:
        const myGirls = ["Cecilie", "Lone"];
        const myBoys = ["Emil", "Tobias", "Linus"];

        const myChildren = myGirls.concat(myBoys);
        => myChildren = ...

    + splice(start, deleteCount, item1, item2, ...); 
        start:xóa tại [index], số phần tử cần xóa, (tùy chọn) thêm phần tử vào vị trí start.


    + slice(start?, end?) cắt lấy (end chỉ lấy đến trước end)
        arr = [1,2,3,4] => a = arr.slice (1,3) => console.log(arr) = 2,3

- Sort method 
    + Math.min()
    + Math.max()
    + reverse()

    + sort() (sort alphabetically as string, not num) + sort current array
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.sort() =>> Apple,Banana,Mango,Orange
    
    EG: sort acsending num:
        const points = [40, 100, 1, 5, 25, 10];
        points.sort(function(a, b){return a - b}); => points = ... or// .sort(a, b) => b - a

- Vòng lặp với array (Array Iteration Methods)

    + for (expression 1; expression 2; expression 3)

    + for/in (chỉ mục index) dùng keys; 
        (with enumerable properties object)
        works with objects & arrays (but is more suited to objects)
        deals with data structure over data value

            const obj = { a: 1, b: 2, c: 3 };
            var my String= 'Javascript' // co the dung voi string
 
            for (const key in obj) {
            console.log(key); // Prints 'a', 'b', 'c'
            console.log(obj[key]); // Access the corresponding value: 1, 2, 3
            }
        

    + for/of (trực tiếp giá trị của properties); iterable (can loop)
        works with arrays only
        deals with data value over data structure

            const array = [1, 2, 3];

            for (const value of array) { // de dung object co the dung Object.values(array)
            console.log(value); // Prints 1, 2, 3
            }

-different 4in, 4of:------------

            let arr = ['el1', 'el2', 'el3'];

            arr.addedProp = 'arrProp';

            // elKey are the property keys
            for (let elKey in arr) {
            console.log(elKey);
            }

            // elValue are the property values
            for (let elValue of arr) {
            console.log(elValue)
            }

--------------------------------------------------------------

    + for Each(f)(value/ index/ array)
        lặp qua array, truy cập được cả value lẫn index

            ['a', 'b', 'c'].forEach(
            val => console.log(val)     // a, b, c (array values)
            );

            ['a', 'b', 'c'].forEach(
            (val, i) => console.log(i)  // 0, 1, 2 (array indexes)
            );

    + set(f) // Each value can only occur once 

    + map(f) => return value * value (hold key-value pair)

        Khi nào sử dụng map(): Nếu chúng ta muốn thực hiện cùng một thao tác / 
        chuyển đổi trên từng phần tử của mảng và lấy lại một array mới có 
        cùng length với các value được chuyển đổi, như ví dụ:.

            var numbers= [1,2,3,4,5];
            var doubled  = numbers.map(n => n * 2);
            doubled; // => [2,4,6,8,10]
            use with objects:
            names = people.map(people => people.name)
            => name1; name2; name3
                    ---------------------------------------------------
                    const persons = [
                    {firstname : "Malcom", lastname: "Reynolds"},
                    {firstname : "Kaylee", lastname: "Frye"},
                    {firstname : "Jayne", lastname: "Cobb"}
                    ];

                    persons.map(getFullName);

                    function getFullName(item) {
                    return [item.firstname,item.lastname].join(" ");
                    }

    + filter(f)(value) lọc số 2 => arr.filter(num => num !== 2) || words.filter(word => word.length > 4);, 
        dùng khi chúng ta muốn xóa các mục không thỏa mãn điều kiện:

            var numbers = [1,2,3,4,5];
            var greaterThan2 = numbers.filter(n => n > 2);
            greaterThan2; // [3,4,5]

        hàm trong filter nhận giá trị function myFunction(value, index, array){}:

            const numbers = [45, 4, 9, 16, 25];
            const over18 = numbers.filter(myFunction);

            function myFunction(value, index, array) {
            return value > 18;
            }

            
    + const reducedValue = array.reduce((prev, next, index, array) => {...}, initialValue);

    x.reduce(f(),innitialValue)

    ham se tra ve: f(accumulator(pre), current, index, origin array){}
    arr= [1, 2, 3, 2, 2, 22] (origin array hay chinh la f)




    + some(f) có 1 phần tử thỏa mãn func=> true

        const numbers = [45, 4, 9, 16, 25];
        let someOver18 = numbers.some(myFunction);

        function myFunction(value, index, array) {
        return value > 18;
        }

        console.log(someOver18) => true

    + every(f) có tat cả phần tử thỏa mãn => true 
    


- Search method (array loops)
    + indexOf syntax:array.indexOf(item, start) item = item to search, start (optional) where to start
        => it returns the position of the first occurrence.


    + lastIndexOf 
        => returns the position of the last occurrence of the specified element.
            const fruits = ["Apple", "Orange", "Apple", "Mango"];
            let position = fruits.lastIndexOf("Apple") + 1;

            console.log = "Apple is found in position " + position;


    + find(f)(value) => value % 2 === 0)    find(hàm)   findIndex() cho chỉ mục
    + includes() syntax: array.includes(search-item)
        => check if an element is present in an array


- đọc trước
    + destructuring: take some item from array:
        const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
        // Destructuring
        let {[0]:fruit1 ,[3]:fruit2} = fruits;
        console.log( fruit1 + " " + fruit2 ) 
        =>  bananas ,  , mangos

    You can end a destructuring syntax with a rest property.
    This syntax will store all remaining values into a new array:

        const numbers = [10, 20, 30, 40, 50, 60, 70];
        const [a,,c, ...rest] = numbers
        console.log (
            "<p>a is " + a +
            "<p>c is " + c +
            "<p>the rest is " + rest;
            )
        =>  a is 10
            c is 30
            the rest is 20,40,50,60,70

    Can swap name in object:
        let firstName = "John";
        let lastName = "Doe";
        [firstName, lastName] = [lastName, firstName];

    Can use to calculate:
        function calculate(a, b) {
        const add = a + b;
        const subtract = a - b;
        const multiply = a * b;
        const divide = a / b;
        return [add, subtract, multiply, divide];
        }

        const [add, subtract, multiply, divide] = calculate(4, 7);

    + spread operator: copy all or part of an existing array or object into another array or object.
    + (...)rest : treat an indefinite number of arguments as an array

            function sum(...args) {
            let sum = 0;
            for (let arg of args) sum += arg;
            return sum;}

            let x = sum(4, 9, 16, 25, 29, 100, 66, 77); console.log x
            => 326

-Math method:
    + Math.abs() method returns the absolute value 
    + Math.max() method returns the number with the highest value.
    + Math.min()

    + Math.floor() method rounds a number DOWN to the nearest integer.
    + Math.ceil() method rounds a number rounded UP to the nearest integer.

    + Math.trunc() method removes the decimals (does NOT round the number).


hàm đẹ quy:

function factorial(n) {
    if (n === 0) {
        return 1;  // Điều kiện dừng
    }
    return n * factorial(n - 1);  // Gọi chính nó
}

console.log(factorial(5));  // Kết quả: 120


*/



//Lưu ý toán tử logic &&

var result = 'A' && 'B' && 'C'

console.log(result); 

//=> C vì sẽ đọc từ trái qua phải, nếu gặp phải 6 giá trị null thì sẽ gán null cho result
// 6 loại false, null, 0, ' ', undefined, NaN

//Lưu ý toán tử logic ||

var result = 'A' || 'B' || 'C' || undefined

console.log(result); 
//=> lấy luôn A số đầu (coi như ngược lại với &&)

var languages = [
    'jav',
    'php' ,
    'ruby',
]

for ( var key in languages){
    console.log(languages[key]);   
}



//Đệ quy trong javascript-------------------------------






