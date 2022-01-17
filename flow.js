// perulangan 
// var y = prompt('masukkan nilai perulangan');
// for(var x=0; x < y; x++){
//     alert('selamat datang'+ x);
// }
// kalkulator gagal
 var x = parseInt(prompt('masukkan nilai pertama'));
var y = parseInt(prompt('masukkan nilai ke dua '));
var o = prompt('masukkan operator');
if(o == 1){
    var hasil = (x+y);
}else{
    var hasil = x-y;
}
alert('nilai perhitungan anda adalah ' + hasil);

// Kondisi If
// alert('selamat datang di pendeteksi angka genap dan ganjil');
// var angka = prompt('masukkan angka');
// if(angka % 2 === 0){
//     alert('ini bilangan genap');
// }else{
//     alert('ini bilangan ganjil')
// }