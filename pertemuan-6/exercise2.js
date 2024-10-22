// menggunakan IIFE
(function() {
    function hitungBMI(berat, tinggi) {
        return berat / (tinggi * tinggi);
    }

    // Contoh penggunaan:
    let berat = 70;  // dalam kg
    let tinggi = 1.7;  // dalam meter
    console.log("BMI:", hitungBMI(berat, tinggi));
})();

// menggunakan Callback Function
// Fungsi untuk menghitung BMI
function calculateBMI(weight, height, callback) {
    // Hitung BMI
    const bmi = weight / (height * height);
    
    // Panggil callback dengan hasil BMI
    callback(bmi);
}

// Callback function untuk menampilkan hasil BMI
function displayBMI(result) {
    console.log(output);
}

// Contoh penggunaan
const weight = 70; // Berat dalam kg
const height = 1.7; // Tinggi dalam meter

calculateBMI(weight, height, displayBMI);
