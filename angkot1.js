var jumlah = prompt('masukkan jumlah angkot anda');
var kon = prompt('apakah kadaan angkot anda baik');
var angkot =1;
if (kon==1) {
        while (angkot<= jumlah) {
        console.log(`angkot ${angkot}  berjalan dengan baik`);
        angkot++;
    }
}else if(kon ==2){
        while (angkot<= jumlah) {
            console.log(`angkot ${angkot}  berjalan dengan tidak baik`);
            angkot++;
            }
}else{   
    alert('pilihan anda tidak valid')
} 
// contoh ngarang

// var jumlah = prompt('berapakah jumlah angkot anda');
// var keadaan = prompt('apakah kedaan angkot anda berjalan dengan baik');
// var awal = 1;
// while (awal <= jumlah) {
//     console.log(`angkot ${awal} berjalan dengan ${keadaan}`);
//     awal++;
// }
// angkot 3
// var awal = 1;
// var jumlah =10;
// for (awal; awal<=jumlah; awal++) {
//     if (awal<=6) {
//         console.log(`angkot nomer ${awal} bekerja dengan baik`)
//     } else {
//         console.log(`angkot nomer ${awal} sedang tidak bekerja`)
//     }
    
// }

// angkot 4

// var awal = 1;
// var jumlah =10;
// for (awal; awal<=jumlah; awal++) {
//     if (awal<=6 && awal !== 5) {
//         console.log(`angkot nomer ${awal} bekerja dengan baik`);
//     } else if (awal === 8 || awal ===10 || awal === 5) {
//         console.log('sedang kejar setoran');
//     }else {
//         console.log(`angkot nomer ${awal} sedang tidak bekerja`);
//     }
    
// }