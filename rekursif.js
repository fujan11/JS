function urut(n){
    if (n===0) {
        return
    }
    // base case
    console.log(n);
    return urut(n-1);
}
 urut(10);

//  cara menghitung faktorial rekursif

function factorial(n) {
    if (n === 0 ){
        return 1;
    }
    return n * factorial(n-1);
}
console.log(factorial(5));