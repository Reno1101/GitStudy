//bai 1:


function bai1(){
    const person = {
        name: "John Doe",
        age: 30,
        address: {
          city: "New York",
          zip: "10001",
        },
        hobbies: ["reading", "traveling", "coding"],
    };
    
    //1
    
    var {name, age} = person;
    console.log(name, age);
    
    var {address: {city, zip}} = person;
    console.log(city, zip);
    
    var {hobbies: [x, ...rest]} = person;
    console.log(x);
    
    console.log(person);
    
    //2
    
    var personCopy = {...person};
    
    personCopy.name = 'Jane Doe';
    personCopy.address.city = 'Los Angeles';
    personCopy.hobbies = [...personCopy.hobbies, "hiking"];
    
    console.log(personCopy);
}

bai1();

//bai 2:

function bai2(){
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const array3 = [7, 8, 9];

    //1

    var mergedArray = [...array1, ...array2, ...array3];
    console.log(mergedArray);

    //2

    var [a,...rest] = mergedArray;

    const obj = { 
        firstElement: a, 
        restElements: rest 
    }

    console.log(obj);

}

bai2()

// bai 3

function bai3(){
    const book = {
        title: "JavaScript Deep Dive",
        author: "Jane Smith",
        details: {
          year: 2023,
          genres: ["Programming", "Education"],
        },
      };

    console.log(book); 
    //1

    var bookCopy = {...book};
    bookCopy.title = "Advanced JS";
    bookCopy.details.genres = [...bookCopy.details.genres,"Tech"];

    console.log(bookCopy);   

    //2
    const deepCopyBook = JSON.parse(JSON.stringify(book));
    deepCopyBook.title = "Mastering Javascript";
    deepCopyBook.details.genres = [...deepCopyBook.details.genres,"Tutorial"];

    console.log(deepCopyBook);
    
}

bai3();


// bai 4

const accounts = [
    { name: "Alice", balance: 500 },
    { name: "Bob", balance: 1000 },
    { name: "Charlie", balance: 1500 },
];

var {name, ...rest} = accounts;


function calculateTotalBalance(...accounts){
    console.log(accounts.reduce((acc, x) => {return acc + x.balance},0));
}


calculateTotalBalance(...accounts, { name: "David", balance: 2000 })




//bai 5

const user1 = {
    id: 1,
    name: "Alice",
    roles: ["admin", "editor"],
    profile: {
      email: "alice@example.com",
      phone: "123456789",
    },
};
  
const user2 = {
    id: 2,
    name: "Bob",
    roles: ["viewer"],
    profile: {
      email: "bob@example.com",
      phone: "987654321",
    },
};

  
//1

const users = [{ ...user1 }, { ...user2 }];

console.log(users);

//2

const {roles: rolesUser1} = user1;
const {roles: rolesUser2} = user2;

const {profile: {email: emailUser1}} = user1;
const {profile: {email: emailUser2}} = user2;



console.log(rolesUser1, rolesUser2, emailUser1, emailUser2);
  
//3

function updateUser(x, updatedInfo){
  return{
    ...x,
    ...updatedInfo,
  }
}


const updatedUser = updateUser(user1, {profile:{ email: "new_email@example.com", phone: "000000000" }});

console.log(updatedUser);