// Rest parameter 4 spread parameter

// 1. rest parameter

// tanpa rest parameter
const func1 = (param1, param2, param3) => {
    console.log(param1, param2, param3);
};

func1("A", "B", "C");

// mini exercise
// ubah menggunakan rest parameter
const penjumlahan = (a, b, c, d, e) => {
    let arr = [a, b, c, d, e];
    let hasil = 0;
    arr.forEach((item) => (hasil += item));
    return hasil;
};

console.log(penjumlahan(1, 2, 3, 4, 5));