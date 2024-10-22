const penjumlahan = (...angka) => {
    let hasil = 0;
    angka.forEach((item) => (hasil += item));
    return hasil;
};

console.log(penjumlahan(1, 2, 3, 4, 5));
