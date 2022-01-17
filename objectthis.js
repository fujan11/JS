// 
// this sebuah keyword spesial yang secara otomatis di definisikan pada setiap function, jadi apabila kita buat fuction atau object itu otomatis ada keyword function yang di definisikan






// cara membuat object
// cara 1 function declaration
        function halo() {
            console.log(this);
            console.log('halo');
        }

        halo();
        // this pada konteks function declaration adalah mengembalikan variable global

// cara 2 menggunakan object literal
        var obj={ a :10, nama:'fauzan'};
        obj.halo = function () {
            console.log(this);
            console.log('halo');
        
        }
        obj.halo();
        // this pada konteks object literal adalah mengembalikan object itu sendiri




// // menggunakan constructor

        function halo() {
            console.log(this);
            console.log('halo')
        }
        new halo;
    //    object pada cunstructor mengembalikan object yang baru di buat


