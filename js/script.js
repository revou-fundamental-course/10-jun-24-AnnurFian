celciusfarenheit = () => {
    let input = document.getElementById('celcius').value;
    // (9/5) * C +32
    let hasil = (((9 / 5) * input) + 32);
    let rumus = "(9 / 5) * C + 32";
    document.getElementById('fahrenheit').value = hasil;
    document.getElementById('rumus').value = rumus;
 }
fahrenheitcelcius = () => {
    let input = document.getElementById('fahrenheit').value;
    // 5/9 * (F-32)
    let hasil = (input-32) / (9/5);
    let rumus = "5 / 9 * (F - 32)";
    document.getElementById('celcius').value = hasil;
    document.getElementById('rumus').value = rumus;
}
resetdata = () => {
    let input = document.getElementById('reset');
    let hasil = null;
    document.getElementById('celcius').value= hasil;
    document.getElementById('fahrenheit').value = hasil;
    document.getElementById('rumus').value = hasil;
}
