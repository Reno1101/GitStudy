
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