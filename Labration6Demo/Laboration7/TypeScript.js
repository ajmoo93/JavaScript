function eCalc(euro, krona) {
    var euroInput = document.getElementById('euro').value;
    euro = parseFloat(euroInput) * 9, 5787;
    console.log(euroInput, +euro);
    $("#box").val(euro);
}
function kCalc(euro, krona) {
    var kronaInput = document.getElementById('krona').value;
    krona = parseFloat(kronaInput) / 9, 5787;
    console.log(krona);
    $("#box").val(krona);
}
