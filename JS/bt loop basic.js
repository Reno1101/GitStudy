// Sử dụng console.log để in ra hình bàn cờ vua kích thước (8 x 8) như sau:

// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#

for (let row = 0; row < 8; row++) {
    let str = "";
    for (let col = 0; col < 8; col++) {
      if (row % 2 === col % 2) {
        str += "#";
      } else {
        str += "_";
      }
    }
    console.log(str);
  }


//   Yêu cầu người dùng nhập vào một số size (size là số dương). Sau đó hiển 
//   thị ra hình bàn cờ vua như trên với kích thước là size x size.

function printTable(size){
    for (let x = 0; x < size; x++) {
        let str = "";
        for (let y = 0; y < size; y++) {
          if (x % 2 === y % 2) {
            str += "#";
          } else {
            str += "_";
          }
        }
        console.log(str);
      }
}

printTable(15);


// Bài 4:
// Yêu cầu người dùng nhập vào một số. Nếu người dùng nhập vào một số dương 
// thì hiển thị ra thông báo xem số đó có phải số nguyên tố hay không.

