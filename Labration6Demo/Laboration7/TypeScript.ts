

function eCalc(euro: number, krona: number) {
    let euroInput = (<HTMLInputElement>document.getElementById('euro')).value ;
    euro = parseFloat(euroInput) * 9,5787;
    console.log(euroInput, + euro);
    $("#box").val(euro);
    
}
function kCalc(euro: number, krona: number) {
    let kronaInput = (<HTMLInputElement>document.getElementById('krona')).value;
    krona = parseFloat(kronaInput) / 9,5787;
    console.log(krona);

    $("#box").val(krona);
}