let nilai_random = [];
let arrayGanjil = [];
let arrayGenap = [];
// Mengisi array dengan 100 nilai acak antara 1 dan 50
for (let i = 0; i < 100; i++) {
  let nilai_acak = Math.floor(Math.random() * 50) + 1;
  nilai_random.push(nilai_acak);
}

// pecah menjadi 2 array

for (let i = 0; i < nilai_random.length; i++) {
  if (i == 0) {
    arrayGenap.push(nilai_random[i]);
  } else if (i % 2 == 0) {
    arrayGenap.push(nilai_random[i]);
  } else {
    arrayGanjil.push(nilai_random[i]);
  }
}

// hitung masing2 yang ganjil
var nilaiMinGanjil = arrayGanjil[0];
var nilaiMaxGanjil = arrayGanjil[0];
var totalGanjil = arrayGanjil[0];

for (let i = 1; i < arrayGanjil.length; i++) {
  // cari nilai minimal
  if (nilaiMinGanjil > arrayGanjil[i]) {
    nilaiMinGanjil = arrayGanjil[i];
  }

  // cari nilai maximal
  if (nilaiMaxGanjil < arrayGanjil[i]) {
    nilaiMaxGanjil = arrayGanjil[i];
  }

  totalGanjil += arrayGanjil[i];
}

var nilaiRata2Ganjil = totalGanjil / arrayGanjil.length;

var nilaiMinGenap = arrayGenap[0];
var nilaiMaxGenap = arrayGenap[0];
var totalGenap = arrayGenap[0];

for (let i = 1; i < arrayGenap.length; i++) {
  // cari nilai minimal
  if (nilaiMinGenap > arrayGenap[i]) {
    nilaiMinGenap = arrayGenap[i];
  }

  // cari nilai maximal
  if (nilaiMaxGenap < arrayGenap[i]) {
    nilaiMaxGenap = arrayGenap[i];
  }

  totalGenap += arrayGenap[i];
}

var nilaiRata2Genap = totalGenap / arrayGenap.length;

console.log(nilai_random);
console.log(arrayGanjil);
console.log(arrayGenap);
console.log(nilaiMinGanjil);
console.log(nilaiMaxGanjil);
console.log(totalGanjil);
console.log(nilaiRata2Ganjil);
console.log(nilaiMinGenap);
console.log(nilaiMaxGenap);
console.log(totalGenap);
console.log(nilaiRata2Genap);

if (nilaiMinGenap > nilaiMinGanjil) {
  console.log("Lebih besar nilai min genap daripada min ganjil");
}
if (nilaiMinGenap < nilaiMinGanjil) {
  console.log("Lebih besar nilai min ganjil daripada min genap ");
}
if (nilaiMaxGenap > nilaiMaxGanjil) {
  console.log("Lebih besar nilai max genap daripada max ganjil");
}
if (nilaiMaxGenap < nilaiMaxGanjil) {
  console.log("Lebih besar nilai max ganjil daripada max genap");
}
if (totalGanjil > totalGenap) {
  console.log("Lebih besar nilai total ganjil daripada total genap ");
}
if (totalGenap > totalGanjil) {
  console.log("Lebih besar nilai total genap daripada total ganjil");
}
if (nilaiRata2Ganjil > nilaiRata2Genap) {
  console.log("lebih besar rata2 ganjil dibanding rata2 genap");
}
if (nilaiRata2Genap > nilaiRata2Ganjil) {
  console.log("lebih besar rata2 nilai genap dibanding rata2 nilai ganjil");
}
if (nilaiMinGanjil == nilaiMinGenap) {
  console.log("nilai min ganjil dan genap sama");
}
if (nilaiMaxGenap == nilaiMaxGanjil) {
  console.log("nilai max ganjil dan genap sama");
}
