# Mobile_JavaScript
alert ("selamat datang");

let pilihan = prompt("mau beli 1. kopi hitam atau 2. cappucino?");

     pilih = Number(pilihan)
     if (pilih === 1)
         {let harga = 5000;
         alert ("kopi hitam ya tuan, untuk harganya Rp" + harga);
           let nilai = Number(prompt("tolong bayar sesuai harga"));
      if (nilai >= harga) {
          let kembalian = nilai - harga;
          alert ("terima kasih, pesanan anda akan kami buat.");
      if (kembalian > 0)
          {alert("ini kembalian anda Rp" + kembalian); }
         } else {alert("maaf, uang anda tidak cukup.");} }
 
     pilih = Number(pilihan)
     if (pilih === 2)
         {let harga = 8000;
         alert ("cappucino ya tuan, untuk harganya Rp" + harga);
           let nilai = Number(prompt("tolong bayar sesuai harga"));
      if (nilai >= harga) {
          let kembalian = nilai - harga;
          alert ("terima kasih, pesanan anda akan kami buat.");
      if (kembalian > 0)
          {alert("ini kembalian anda Rp" + kembalian); }
          
         } else {alert("maaf, uang anda tidak cukup.");} }
      
      if (pilih >= 3) {alert("maaf pesanan anda tidak valid.");}
         
  alert ("terima kasih sudah datang.")
