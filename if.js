let cuaca = 'cerah';
let adaSepatuHitam = false;

if (cuaca === 'cerah') {
  if (adaSepatuHitam) {
    console.log('Sumbul akan membeli sepatu hitam.');
  } else {
    console.log('Cuaca sedang hujan, Sumbul akan membeli sepatu online.');
    console.log('Maaf, sepatu hitam tidak tersedia.');
    console.log('Sumbul juga akan membeli kaus kaki warna putih.');
  }
} else {
  console.log('Cuaca tidak sedang cerah, Sumbul akan membeli sepatu online.');
}
