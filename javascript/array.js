"======================================= ARRAY ======================================="
// =======================sort(),reverse() Sắp Xếp Mảng =======================  //
var fruits1 = ["Chuoi", "Cam", "Tao", "Xoai"];
var fruits2 = ["Chuoi", "Cam", "Tao", "Xoai"];
fruits1.sort();
fruits2.reverse();
console.log("fruits1", fruits1);
console.log("fruits2", fruits2);

// Mặc định, hàm sort() xem các giá trị như chuỗi để thực hiện sắp xếp.
// Nó sẽ thực hiện sắp xếp hiệu quả đối với các chuỗi (“Anh” xếp trước “Ba”)
// Tuy nhiên, nếu các số được sắp xếp như chuỗi thì “25” sẽ lớn hơn “100” vì “2” lớn hơn “1”
// Vì vậy, phương thức sort() sẽ đưa ra kết quả sai khi sắp xếp các số.

var numbers1 = [40, 100, 1, 5, 25, 10];
var numbers2 = [40, 100, 1, 5, 25, 10];
var numbers3 = [40, 100, 1, 5, 25, 10];
numbers1.sort();

// tăng dần
//>= 0 thì a và b sẽ đổi chỗ, trả về < 0 thì a và b sẽ không đổi chỗ cho nhau.
numbers2.sort((a, b) => {
  return a - b;
});

//giảm dần
//>= 0 thì a và b sẽ không đổi chỗ, trả về < 0 thì a và b sẽ đổi chỗ cho nhau.
numbers3.sort((a, b) => {
  return b - a;
});
console.log("numbers1", numbers1);
console.log("numbers2", numbers2);
console.log("numbers3", numbers3);

// ==================== Sắp Xếp Mảng Đối Tượng ====================  //
var cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 }
];
cars.sort((a, b) => {
  return a.year - b.year;
});

console.log("cars", cars);

// ======================= MIN,MAX của Mảng =======================  //

//  Cách1: sắp xếp mảng từ nhỏ tới lớn, sau đó lấy ra index 0
console.log("Số nhỏ nhất", numbers2[0]);
// Cách này đúng nhưng phải sắp xếp toàn bộ mảng chỉ để tìm giá trị lớn nhất hoặc nhỏ nhất là 1 phương pháp kém hiệu quả

// Cách 2: dùng Math.min()
console.log("minInNumbers: ", Math.min.apply(Math, numbers2));
console.log("maxInNumbers: ", Math.max.apply(Math, numbers2));

// =======================concat() Gộp Mảng =======================  //
var nokiaPhones = ["n8", "n81", "n82"];
var iphonePhones = ["iphone 4", "iphone 5", "iphone 6"];
var phones = nokiaPhones.concat(iphonePhones);
console.log("Gộp Mảng", phones);

// ==========every() Kiểm tra điều kiện toàn bộ mảng ========== //

// every() được sử dụng khi bạn muốn kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn một điều kiện do bạn đặt ra hay không. Phương thức trả về true khi tất cả các phần tử đều thỏa mãn, trả về false khi một trong số các phần tử không thỏa mãn.

let numbers = [1, 2, 3, 4, 5];
let isOddArray = numbers.every((item) => {
  return item % 2 != 0;
});
console.log("isOddArray", isOddArray);

// ==========filter() Lọc các phần tử thỏa điều kiện ========== //

//filter() được sử dụng để lọc các phần tử trong mảng theo một điều kiện mà bạn đặt ra. Phương thức này sẽ trả về một mảng mới chứa các phần tử thỏa mãn điều kiện.
var tasks = [
  { title: "Fix bug 1", status: "done" },
  { title: "Fix bug 2", status: "todo" },
  { title: "Fix bug 3", status: "done" }
];

var doneTasks = tasks.filter((task) => {
  return task.status === "done";
});

console.log(doneTasks);

// ==========find() tìm phần tử đầu tiên thỏa điều kiện ========== //
// find() được sử dụng khi bạn muốn tìm phần tử mảng đầu tiên thỏa mãn điều kiện mà bạn đặt ra. var numbers = [1, 2, 3, 4, 5];
var n = numbers.find((item) => {
  return item > 2;
});
console.log(n);

// ==========findIndex() tìm vị trí phần tử đầu tiên thỏa điều kiện ========== //
var n = numbers.findIndex(function (item) {
  return item > 2;
});
console.log(n);

// ==========includes() kiểm tra phần tử có xuất hiện trong mảng hay không ========== //

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Mango");
console.log(n);

// ==========indexOf() Tìm vị trí đầu tiên của phần tử trong mảng ========== //
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple"); // 2
console.log(a);

// ==========map() Thay đổi mảng ========== //
// map() được sử dụng khi bạn muốn làm thay đổi giá trị của các phần tử trong mảng theo một logic nào đó

var doubleNumbers = numbers.map(function (num) {
  return num * 2;
});

console.log(doubleNumbers);

// ==========pop() Xóa phần tử cuối ========== //
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var item = fruits.pop();

console.log(item);
console.log(fruits);

// ==========shift() Xóa phần tử đầu ========== //
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var item = fruits.shift();
console.log(item);
console.log(fruits);

// ==========unshift() Thêm phần tử vào đầu mảng ========== //
//unshift() được sử dụng khi bạn muốn thêm một hoặc một số phần tử vào đầu mảng. Phương thức sẽ trả về số lượng phần tử trong mảng sau khi thêm.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var length = fruits.unshift("Lemon", "Pineapple");
console.log(fruits); // ["Lemon", "Pineapple", "Banana", "Orange", "Apple", "Mango"]
console.log(length); // 6

// ==========push() Thêm phần tử vào cuối mảng, trả ra độ dài mảng ========== //

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var length = fruits.push("Kiwi");
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
console.log(length);
5;

// ==========reverse() Đảo ngược thứ tự trong mảng ========== //
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits);

// ==========slice() Trích mảng ========== //
//slice() được sử dụng khi bạn muốn trích một mảng con từ vị trí n tới vị trí m trong mảng ban đầu. Lưu ý mảng được trích sẽ không bao gồm phần tử thứ m.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

var citrus = fruits.slice(1, 3);
console.log(citrus);

// ==========some() Kiểm tra 1 mảng có thỏa điều kiện không ========== //

var hasOddNumber = numbers.some(function (item) {
  return item % 2 != 0;
});
console.log(hasOddNumber);

// ==========splice() Thay thế phần tử trong mảng bằng phần từ khác ========== //

// splice() được sử dụng khi bạn muốn thay thế một số phần tử trong mảng bằng một số phần tử khác.

// Cú pháp: array.splice(index, howmany, item1, ....., itemX). Trong đó:

// index: Bắt buộc là vị trí bắt đầu thay thế, bạn có thể sử dụng số âm để tính vị trí từ cuối mảng lên (phần tử cuối cùng là -1).
// howmany: Không bắt buộc, có bao nhiêu phần tử sẽ được thay thế, mặc định là 0.
// item1,… itemX: Là các phần tử sẽ được thay thế vào mảng kể từ vị trí index.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits); // ["Banana", "Orange", "Lemon", "Kiwi", "Mango"];

var [greeting, ...intro] = ["Hello", "I", "am", "Sarah"];

console.log(greeting); //"Hello"
console.log(intro); //["I", "am", "Sarah"]

var { gold, ...intro } = { id: 1, name: "Hung", gold: 10000, money: 33333 };

console.log(intro); //["I", "am", "Sarah"]