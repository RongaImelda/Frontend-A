//Bualah fungsi untuk menghitung BMI (Body Mass Index)
// Rumus : BMI = berat / (tinggi *tinggi)
// Berat dalam kg dan tinggi dalam meter
//170 cm = 1.7 m
//Fungsi tersebut menerima 2 parameter yaitu berat dan tinggi
//Dan mengembalikan output berupa BMI

// Fungsi untuk menghitung BMI
function hitungBMI(berat, tinggi) {
    // Menghitung BMI
    let bmi = berat / (tinggi * tinggi);
    // Mengembalikan hasil BMI
    return bmi;
}

// Contoh penggunaan fungsi
let berat = 70; // Berat dalam kilogram
let tinggi = 1.7; // Tinggi dalam meter

// Menghitung BMI dan menampilkan hasil
let bmi = hitungBMI(berat, tinggi);
console.log(`BMI Anda adalah: ${bmi.toFixed(2)}`);
)}`);
