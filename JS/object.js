//OBJECT TRONG JS:--------------------------------------------------

var emailKey = 'email'// thêm biến và key

var myInfo = {
    name:'MinhDuc', //---> propertise
    age : 18,
    address: 'Ha Noi, VN',
    [emailKey]: ' minhducqazwsx@gmail.com', // thêm biến và key
    getName: function(){ //---> method
        return this.name;
    }
}
//co the dinh nghia 1 key bang 1 bien bên ngoài cách 2
var myKey = 'address'

//co the dinh them key ben ngoai
myInfo.email = 'minhducqazwsxz@gmail.com'
myInfo['gmail'] = 'minhducqazwsx@gmail.com'

delete myInfo.age;

//cac cach goi
console.log(myInfo.name);
console.log(myInfo['name']);// lấy key 
console.log(myInfo[myKey]); // lấy key từ biến
console.log(myInfo.getName());

//---------------------------------------------------------------------------



// Object contructor : bản vẽ cho objects chung---------------------------------

function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function takeName(){
        return `${this.firstName} ${this.lastName}`
    }
}
var author = new User ('Son', 'Dang', 'Avatar');
var user = new User ('Vu', 'Nguyen','Avatar')

author.title = 'F8 official'
user.comment = 'object constructor la gi v ad'

console.log(author);
console.log(user);

console.log(author.getName());
console.log(user.getName());

// Object prototypes : thêm thuộc tính cho tất cả object ---------------------
User.prototype.className = 'lop F8';
User.prototype.getClassName = function(){
    return `${this.className}`;
}

console.log(user.getClassName());


// Toán tử 3 ngôi -------------------------------------------------------------

var a = 1;
var b = 2;
var c = a > 0 ? a: b;
