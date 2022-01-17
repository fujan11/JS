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

// setelah refactoring  b

function volumekubus(a,b) {
    return a*a*a + b*b*b;
}

alert(volumekubus(3,7));