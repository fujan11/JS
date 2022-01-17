
function Angkot(supir, trayek, penumpang, kas) {
    this.supir = supir;
    this.trayek =trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.pnaik = function (namap) {
        if(this.penumpang.length === 0){
            this.penumpang.push(namap);
            return this.penumpang;
        }else{
            for(var i = 0; i<this.penumpang.length; i++){
                if(this.penumpang[i]==undefined){
                    this.penumpang[i] = namap;
                    return this.penumpang;
                }else if(this.penumpang[i] === namap){
                    console.log( namap + ' sudah ada dalam penumpang');
                    return this.penumpang;

                }else if( i == this.penumpang.length -1){
                    this.penumpang.push(namap);
                    return this.penumpang;
                }
            }
        }
    }
    this.pturun = function (namap, bayar) {
        if(this.penumpang.length === 0 ){
            alert('penumpang masih kosong');
            return false;
        }
        for(var i =0; i<this.penumpang.length;i++){
            if(this.penumpang[i] === namap){
                this.penumpang[i]=undefined;
                this.kas += bayar;
                return this.penumpang;
            }else if(this.penumpang.length -1){
                console.log( namap + 'penumpang tidak di temukan');
            }

        }
    }
};

var angkot1 =new Angkot ('fauzan', ['ambulung','sukajeruk'],[],0);
