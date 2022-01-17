// membuat object
// membuat object literal
        var mhs ={
            nama : 'fauzan',
            nim : '1921400194',
            kels : 'f'
        }
        var mhs1 ={
            nama : 'fauzan',
            nim : '1921400194',
            kels : 'f'
        }

// membuat object menggunakan function

        function buatobject(nama, nim, kelas) {
            var mhs={};
            mhs.nama = nama;
            mhs.nim = nim;
            mhs.kelas = kelas;
            return mhs;
        }
        var nama = prompt('masukkan nama');
        var nim = prompt('masukkan nim');
        var kelas = prompt('masukkan kelas');
        var mhs3 = buatobject(nama,nim,kelas);


// membuat object menggunakan function constructor
        function Mahasiswa(nama, nim, kelas) {
            this.nama = nama;
            this.nim = nim;
            this.kelas =kelas;
        }

        var mhs4 = new Mahasiswa (nama, nim, kelas);