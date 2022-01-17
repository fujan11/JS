// forEach dan map

// var angka =[1,2,3,4,5,6,7,8];
// menggunakan for
        // for(var i = 0; i<angka.length; i++){
        //     console.log(angka[i]);
        // }

// function declaration
        // angka.forEach(function(n) {
        //     console.log(n);
        // })
// function expression

        // var tampil = function(e){
        //     console.log(e);
        // }
        
        // angka.forEach(tampil)

// menggunakan map
// fungsinya sama seprti foreach tapi bisa mengembalikan array
        // var angka =[1,2,3,4,5,6,7,8];
        // var tampil = angka.map(function(e){
        //     return e * 2;
        // })
        // console.log(tampil);
        

// menggunakan sort
// fungsinya mengurutkan nilai yang ada pada sebuah array

        // var angka =[1,3,6,4,5,2,9,8];
        // angka.sort();
        // console.log(angka.join(' '))

        // var angka =[1,3,6,4,5,2,9,8,10,11];
        // angka.sort();
        // console.log(angka.join(' '));

        var angka =[1,3,6,4,5,2,9,8,10,11];
        angka.sort(function(a,b){
            return a-b;
        });
        console.log(angka.join(' '));









        