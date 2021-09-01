const random = require('random');

const labaBersih_PerModal = [];
const pulsa = [5000, 10000, 20000, 40000, 50000, 100000];
const modalPulsa = [];
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
  if (perModal > 0) {
    console.log(
      `isi saldo baru sebesar :${modalPulsa[0]} + Sisa saldo Pulsa Modal sebelumnya`
    );
    console.log(`saldo berjalan :${modal_ter_awal}`);
  } else {
    console.log(`modal awal :${modal_ter_awal}`);
  }

  console.log(`Pendapatan : ${pendapatan}`);
  console.log(`Pendapatan Bersih : ${pendapatan - modal_ter_awal}`);
  console.log(`Sisa saldo Pulsa Modal :${sisaPulsaModal}`);
  labaBersih_PerModal.push(pendapatan - modal_ter_awal);
  modalPulsa.push(sisaPulsaModal);
}
//baru nih
//perubahan 5666
// perubahan 4
// perubahan 50000
// perubahan 6000
// perubahan 7000
// data baru
