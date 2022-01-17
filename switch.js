// var angka = prompt('input nilai :');

// switch (angka) {
//     case '1':
//         alert('anda memasukkan angka 1')
//         break;

//     case '2':
//         alert('anda memasukkan angka 2');
//         break;
//     case '3':
//         alert('anda memasukkan angka 3');
//         break;
// }
var lagi = true;
while (lagi == true) {
    // var item = prompt('masukkan makanan dan minuman \n contoh : nasi daging junkfood mie salad');
    // switch(item){
    //     case 'nasi':
    //     alert('makanan anda SEHAT');
    //     break;
    //     case 'daging':
    //     alert('makanan anda kurang sehat');
    //     break;
    //     case 'junkfood':
    //     alert('makanan yang anda masukkan KURANG SEHAT');
    //     break;
    //     case 'mie':
    //     alert('makanan yang anda masukkan KURANG SEHAT');
    //     break;
    //     case 'salad':
    //     alert('maskan yang anda masukkan SANGAT SEHAT');
    //     break;
    //     default:
    //     alert('List yang anda masukkan tidak tersedia');
    //     break;
    // }
    // cara penulisan lain
    var item = prompt('masukkan makanan dan minuman \n contoh : nasi daging junkfood mie salad');
    switch(item){
        case 'nasi':
        case 'salad':
        alert('makanan anda SEHAT');
        break;
        case 'daging':
        case 'junkfood':
        case 'mie':
        alert('makanan anda kurang sehat');
        break;
        
        default:
        alert('List yang anda masukkan tidak tersedia');
        break;
    }


    lagi=confirm('lagi..?');
}
