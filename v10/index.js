const random = require('random');

const labaBersih_PerModal = [];
const pulsa = [5000, 10000, 20000, 40000, 50000, 100000];
const modalPulsa = [];
const pendapatanPulsa = [];
let pembulatan = pulsa.reduce((acc, cca) => acc + cca);
modalPulsa.push(pembulatan);
for (let perModal = 0; perModal < 30; perModal++) {
  const modal_awal_berjalan = modalPulsa.reduce((acc, cca) => acc + cca);

  console.log(`${perModal} 
    
    
    
    
    
    `);
  const sisaPulsa = [0];

  const riwayatPembeli = [];
  let hrgJual = pulsa.map((a) => a + 3000);

  let modalawal = modal_awal_berjalan;
  // 72

  const modal_ter_awal = modal_awal_berjalan;

  while (true) {
    let beli = random.int(0, pulsa.length - 1);

    let potong = modalawal - pulsa[beli];
    modalawal = potong;

    if (modalawal > 0) {
      riwayatPembeli.push(hrgJual[beli]);
    } else {
      let sisa = modalawal + pulsa[beli];
      sisaPulsa.push(sisa);
      break;
    }
  }

  console.log(`ini adalah riwayat pembeli ${riwayatPembeli}`);
  const pendapatan = riwayatPembeli.reduce((acc, cca) => acc + cca);
  const sisaPulsaModal = sisaPulsa.reduce((acc, cca) => acc + cca);
  let saldo_jalan = modalPulsa.slice(-1)[0] + pendapatanPulsa.slice(-1)[0];
  if (perModal > 0) {
    console.log(`saldo Awal :${modalPulsa[0]}`);
    console.log(`isi saldo + sisa saldo sebelumnya :${saldo_jalan} `);

    console.log(`Pendapatan : ${pendapatan}`);
    console.log(`Pendapatan Bersih : ${pendapatan - saldo_jalan}`);
    let hasilP = pendapatan - saldo_jalan;
    if (hasilP > 0) {
      labaBersih_PerModal.push(hasilP);
      pendapatanPulsa.push(pendapatan - hasilP);
    } else {
      labaBersih_PerModal.push(0);
      pendapatanPulsa.push(pendapatan);
    }
  } else {
    console.log(`modal awal :${modalPulsa[0]}`);
    console.log(`Pendapatan : ${pendapatan}`);
    console.log(`Pendapatan Bersih : ${pendapatan - modalPulsa[0]}`);
    let hasilP = pendapatan - modalPulsa[0];
    if (hasilP > 0) {
      labaBersih_PerModal.push(hasilP);
      pendapatanPulsa.push(pendapatan - hasilP);
    } else {
      labaBersih_PerModal.push(0);
      pendapatanPulsa.push(pendapatan);
    }
  }

  console.log(`Sisa saldo Pulsa Modal :${sisaPulsaModal}`);

  modalPulsa.push(sisaPulsaModal);
}

console.log(labaBersih_PerModal);
let bersihaja = labaBersih_PerModal.reduce((acc, cca) => acc + cca);
console.log(`Pendapat Bersih adalah : ${bersihaja}`);
