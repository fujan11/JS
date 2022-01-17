// var a = parseInt(prompt('masukkan volume kubus A'));
// var b = parseInt(prompt('masukkan volume kubus b'));

// var ahasil = a*a*a;
// var bhasil = b*b*b;

// console.log(ahasil);
// console.log(bhasil);

// function 1

// function volumekubus(a,b) {
//     var ka;
//     var kb;
//     var total;
//     ka = a*a*a;
//     kb = b*b*b;
//     total = ka + kb;
//     return total;
// }

// alert(volumekubus(5,5));

// function 2
// function tambah(a,b) {
//     return a+b;
// }
// function kali(a,b) {
//     return a*b;
// }


// var a1 = parseInt(prompt('masukkan nilai anda'));
// var b2 = parseInt(prompt('masukkan nilai ke dua'));

// var hasilt = tambah(a1, b2);
// var hasilk = kali(a1 , b2);
// console.log(hasilt);
// console.log(hasilk);

//  Sudo variable yang ada di dalam javaScript 

function tambah() {
    var hasil = 0;
    for( var i =0; i < arguments.length ; i++){
        hasil += arguments[i];
    }
    return hasil;
}
function kali(){
    var hasilk =1;
    for(var i = 0;  i< arguments.length; i++){
        hasilk *= arguments[i];
    }
    return hasilk;
}

var coba = tambah(kali(5,5),kali(5,5));
console.log(coba);
