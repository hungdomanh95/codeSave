// ========================= STRING ========================= //
//  String ( chuỗi )
"Hello Word"; // double quotes
'Hello Word'; // single quote
`Hello Word` // backticks( template literal )
var userName = "Hung"
console.log(userName);
//  .length : độ dài
console.log(userName.length); // 4
// index là vị trí của từng kí tự trong chuỗi, bao gồm cả khoảng trắng

const myStr = "Frontend Developer"
console.log(myStr.split(" ")); // ["Frontend", "Developer"]
console.log(myStr.split("")); // ["F", "r", "o", "n", "t", "e", "n", "d", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r"]
console.log(myStr.split("/")); // ["Frontend Developer"]
console.log(myStr.toLowerCase()); // frontend developer
console.log(myStr.toUpperCase()); // FRONTEND DEVELOPER
console.log(myStr.startsWith("frontend")); // false
console.log(myStr.startsWith("Frontend")); // false
console.log(myStr.endsWith("Frontend")); // false
console.log(myStr.endsWith("Developer")); // true
// includes kiểm tra trong chuỗi có chưa ký tự cần tìm hay không
console.log(myStr.includes("Developer")); // true
console.log(myStr.includes("abc")); // false
console.log(myStr.includes("Front")); // false
// indexOf: lấy ra vị trí đầu tiên của từ cần tìm
console.log(myStr.indexOf("e")); //5
// lastIndexOf : trả ra vị trí cuối cùng của ký tự cần tìm
console.log(myStr.lastIndexOf("e")); // 16
// replace: thay thế ký tự
console.log(myStr.replace("Developer","Designer"));
// repeat : lặp lại
console.log(myStr.repeat(5));

// =========== Loại bỏ khoảng trắng =========== //
var str = "          Hello World!          ";
console.log("Trim", str.trim()); // Hello World!




