const arr = [];

arr.a = "Apple";
arr.b = "Banana";
arr.c = "Cream";
arr.d = "Dashboard";

console.log(arr);
console.log(arr.a);
console.log(arr.b);
console.log(arr.c);
console.log(arr.d);

console.log(typeof(arr));

const newArr = [1, 2, 3, 5, 6, 9, 7];
console.log(typeof(newArr));
console.log(typeof(Object.getPrototypeOf(newArr)));
console.log(typeof new Array());
console.log(typeof Array);