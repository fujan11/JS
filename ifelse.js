// contoh mencari bilangan grnap atau ganjil

var angka = prompt('masukkan angka anda');
if (angka % 2 == 0) {
    console.log('bilangan yang anda masukkan bilangan genap');
} else if (angka % 2 ==1) {
    console.log('bilangan yang anda masukkan adalah bilangan ganjil');
} else{
    console.log('angka yang anda masukkan tidak valid');
}