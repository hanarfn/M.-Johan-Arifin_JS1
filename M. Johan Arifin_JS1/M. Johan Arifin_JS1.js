// Contoh penggunaan Menggunakan if
let nilai = 75;

if (nilai >= 70) {
  console.log("Selamat! Anda lulus.");
}

// Contoh penggunaan if-else
let nilaiangka = 85;
if (nilaiangka >= 80) {
  console.log("Nilai Anda A");
} else if (nilaiangka >= 70) {
  console.log("Nilai Anda B");
} else if (nilaiangka >= 60) {
  console.log("Nilai Anda C");
} else {
  console.log("Nilai Anda D");
}

// Contoh penggunaan Nested if (if bersarang)
let suhu = 28;
let cuacaCerah = true;

if (cuacaCerah) {
  if (suhu > 30) {
    console.log("Hari ini sangat panas.");
  } else {
    console.log("Hari ini cerah.");
  }
} else {
  console.log("Hari ini tidak cerah.");
}

// Contoh penggunaan switch-case
let hari = "Selasa";
switch (hari) {
  case "Senin":
    console.log("Hari ini Senin.");
    break;
  case "Selasa":
    console.log("Hari ini Selasa.");
    break;
  default:
    console.log("Hari ini bukan Senin atau Selasa.");
}

// Contoh penggunaan for statement
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

// Contoh penggunaan while loop
let counter = 1;
while (counter <= 3) {
  console.log("Perulangan ke-" + counter);
  counter++;
}

// Contoh penggunaan do-while loop
let angka = 1;
do {
  console.log("Angka: " + angka);
  angka++;
} while (angka <= 3);

// Contoh penggunaan function
function tambah(a, b) {
  return a + b;
}

let hasil = tambah(5, 3);
console.log("Hasil penambahan: " + hasil);
