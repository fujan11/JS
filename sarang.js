var v = '';
var h='';
for(var i = 1; i<=10; i++){
    for(var j = 1; j<=i; j++){
        if (j >= i) {
                hasil += '* ';
            } else {
                hasil += ' '
            }
        v += '*';
    // s+= '*'
    // sama dengan s=s+'*';
    } 
    for(var w = 10; w>=i; w--){
        h += '*';
    }
    
    v += '\n'; 
    h += '\n';
}

console.log(v + h);
