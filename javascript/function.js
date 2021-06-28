
" ======================== ARROW FUNCTION =================== "
function tinhTuoi(year) {
  return 2020 - year;
}
console.log(tinhTuoi(1995));

var tinhTuoi2 = function(year) {
  return 2020 - year;
};
console.log(tinhTuoi2(1995));

var tinhTuoi3 = year => {
  return 2020 - year;
};
console.log(tinhTuoi3(1995));

const tinhTuoi4 = year => 2020 - year;
console.log(tinhTuoi4(1995));

// John Smith => John

const getFirtName = fullName => {
  //split => Tách chuỗi thành 1 mảng dựa vào kí tự phân cách truyền vào
  // "John Smith" -> " " -> array =["John","Smith"]

  return fullName.split(" ")[0];
};
console.log(getFirtName("John Smith"));

console.log(
  "// ======================== Sự khác biệt fuction thường và Arrow Fuction =================== //"
);
console.log("=====> Argument");
//argument object  => không được ràng buộc vào trong arrow function

const add = function(a, b) {
  //argument hiển thị ra hết các tham số truyền vào và có length
  console.log(arguments);
  return a + b;
};
console.log(add(15, 1, 2, 3));

// arrow function không có arguments
const add1 = (a, b) => {
  return a + b;
};
console.log(add1(15, 1, 2, 3));

console.log("=====> Con trỏ this trong Object");
const countries = [{ name: "ABC", code: "AQ" }, { name: "CDF", code: "AX" }];
const John = {
  firstName: "John",
  lastName: "Smith",
  year: 1990,
  countries: ["AX", "AQ"],
  tinhTuoi: function() {
    console.log(this);
    return 2020 - this.year;
  },
  tinhTuoi2: () => {
    console.log(this);
  },
  getNameCountry: function() {
    var code = "AX";
    var name = "";
    for (let index = 0; index < countries.length; index++) {
      const c = countries[index];
      if (c.code === code) {
        name = c.name;
        break;
      }
    }
    console.log("name", name);
  }
};

//Ràng buộc this -> tầm vực ngữ cảnh của nơi gọi nó
console.log(John.tinhTuoi());
John.tinhTuoi2();
John.getNameCountry();
// nếu this ở ngoài cùng, this chính là cửa số window

// nếu dùng Obj muốn truy xuất vào những thông tin của nó thì bắt buộc phải dùng function thường, k đc phép dùng arrow function



"=========================== VAR,LET,CONST ======================"
var name = "Hung";
var name = "Hung1";
console.log(name);

let nameLet = "Hung2";
nameLet = "Hung3";
console.log(nameLet);

// scope =>> tầm vực

// tầm vực của từ khóa var -> trong function
// tầm cực của từ khóa let -> trong block {}

var age = 30;
if (age > 20) {
  var message = "OLD";
}
console.log("ngoai tam vuc block", message);

var age = 30;
if (age > 20) {
  let message = "OLDLET";
  console.log("trong tam vuc block", message);
}

//scope

//local scope
//=>> function scople
// =>> block scope

//global scope


// function scope
function test() {

  var messageVar = "testfunction Var ";
  let messageLet = "test function Let";
  console.log("trong tam vuc function", messageVar);
  console.log("trong tam vuc function", messageLet);
}
test();

// const : Hang so khong thay doi trong qua trinh lap trinh
// const với dữ liệu bình thường
const pi = 3.14;
// không thể khai báo lại pi để thay đổi giá trị

// thao tác const với Object
var obj = {
  firstname: "John"
};
//const của obj -> bản chất của nó là không thay đổi về mặt địa chỉ của obj lưu trong bộ nhớ
var newObj = {};
obj.firstname = "Smith";
console.log(obj.firstname);
// không báo lỗi, bởi vì chỉ thay đổi giá trị của thuộc tính bên trong, chứ không thay đổi địa chỉ của nó

obj = newObj;

// báo lỗi khi khai báo Obj cũ bằng newObj, là đã trỏ qua địa chỉ mới của Obj mới
