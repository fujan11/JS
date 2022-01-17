// find dan filter 
// find itu menghasilkan satu nilai dan tidak mengembalikan array
// filter bisa menghasilkan lebih dari satu nilai dan berbentuk array
        // contoh filter
// var angka =[1,3,6,4,5,2,9,8,10,11];
// var angka2 = angka.filter(function(x){
//     // return x == 5;
//     return x > 5;
// });
// console.log(angka2.join(' '));

        // contoh find
 var angka =[1,3,3,6,4,5,2,9,8,10,11];
 var angka2 = angka.find(function(x){
     return x== 3;
 });
 console.log(angka2);   