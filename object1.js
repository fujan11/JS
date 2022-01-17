var profile = {
    nama : 'fauzan mufid',
    kelas : 'f',
    umur : '21',
    sapa : function () {
        return 'nama saya'+ this.nama 
        + 'saya kelas : ' + this.kelas
        + 'umur saya '+ this.umur;
    }
};
console.log(profile.sapa);