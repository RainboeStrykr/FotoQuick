var foto;
window.onload = function() {
  foto = new Foto();
}

function selectImage() {
  document.getElementById('foto-file').click();
}

function grayscale(){
  foto.grayscale();
}

function bright(){
  foto.makeBright();
}

function dark(){
  foto.makeDark();
}

function blur_effect() {
  foto.applyBlurFilter();
}

function emboss() {
  foto.applyEmbossFilter();
}

function sharp() {
  foto.applySharpFilter();
}

function download(){
  foto.export();
}

function flip_img(){
  foto.flipVertically();
}

function crop(){
  foto.cropSelected();
}

function makeTransparent(){
  foto.makeTransparent();
}

function openColorPicker(){
  document.getElementById("colorize-color-picker").click();
}

function makeColorize(elem){
  var color = elem.value;
  foto.applyColorFilter(color);
}