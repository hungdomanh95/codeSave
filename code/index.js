const arr = [
  { id: 1, status: false },
  { id: 2, status: false },
  { id: 3, status: false },
  { id: 4, status: false },
];
const valueChange = { id: 3, status: true };

var test = arr.map((item) => {
  if(item.id === valueChange.id){
    return valueChange
  }
  return item
});
console.log("test: ", test);
console.log([...arr, valueChange]);
