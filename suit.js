var u = true;
while (u === true) {
        var p = prompt('masukkan pilihan anda \n [semut orang gajah]');
        var comp = Math.random();

        if (comp <= 0.34) {
            comp ='orang';
        } else if (comp<= 0.68) {
            comp ='semut';
        }else {
            comp ='gajah';
        }
        // hasil
        var hasil = '';
        if (p == comp) {
            hasil = 'SERI.!';
        }else if( p == 'orang'){
            // if (comp == 'gajah') {
            //     hasil = 'KALAH';
            // } else {
            //     hasil = 'MENANG';
            // }
            // operator Ternary
            hasil = (comp=='gajah') ? 'KALAH' : 'MENANG';
        
        }else if(p == 'semut'){
            // if (comp == 'gajah') {
            //     hasil = 'MENANG';
            // } else {
            //     hasil ='KALAH'
            // }
            // Operator Ternary
            hasil = (comp=='gajah')? 'MENANG' : 'KALAH';
        }else if( p == 'gajah'){
            hasil = (comp == 'orang')? 'MENANG' : 'KALAH';
        }else{
            hasil ='YANG ANDA MASUKKAN TIDAK VALID'
        }

        alert(`Anda Memilih ${p} Komputer Memilih ${comp} \n Anda ${hasil}`);
    u = confirm('apakah anda ingin bermain lagi');
}
