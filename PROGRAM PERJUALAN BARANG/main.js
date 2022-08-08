function hasil() {
    var harga= parseInt(document.getElementById("harga").value);
    var jumlah= parseIn(tdocument.getElementById("jumlah").value);
    var total= parseInt(harga*jumlah);
    document.getElementById("total").innerHTML=total;
    var diskon=0.10;
    var bayar;
    if(total>10){
        bayar=total-(total*diskon);
        document.getElementById("bayar").innerHTML=bayar;
        document.getElementById("diskon").innerHTML="10%";
    }else{
        document.getElementById("bayar").innerHTML=bayar;
        document.getElementById("diskon").innerHTML="0%";
    }
    

}