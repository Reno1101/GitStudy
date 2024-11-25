


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


