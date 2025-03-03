function funValidaAlfaNumCarac(tfText) {
  var inKeyCode = document.all ? event.keyCode : event.which;
  var chCharKey = String.fromCharCode(inKeyCode);

  if (chCharKey == ' ') return true;
  if (inKeyCode == 241) return true; //codigo de ñ
  if (inKeyCode == 209) return true;//codigo de Ñ MAYUSCULA
  if (chCharKey >= 'A' && chCharKey <= 'Z') return true;
  if (chCharKey >= 'a' && chCharKey <= 'z') return true;
  if (chCharKey == '.') return true;
  if (chCharKey == ',') return true;
  if (chCharKey == '+') return true;
  if (chCharKey == ':') return true;
  if (chCharKey == '/') return true;
  if (chCharKey == '(') return true;
  if (chCharKey == ')') return true;
  if (chCharKey == ';') return true;
  if (chCharKey == '-') return true;
  if (chCharKey == '_') return true;
  if (chCharKey == '%') return true;
  if (chCharKey == '&') return true;
  if (inKeyCode == 225 || inKeyCode == 193) return true; //codigo de á | Á
  if (inKeyCode == 233 || inKeyCode == 201) return true; //codigo de é | É
  if (inKeyCode == 237 || inKeyCode == 205) return true; //codigo de í | Í
  if (inKeyCode == 243 || inKeyCode == 211) return true; //codigo de ó | Ó
  if (inKeyCode == 250 || inKeyCode == 218) return true; //codigo de ú | Ú
  if (chCharKey >= '0' && chCharKey <= '9') return true;
  return false;
}

function funValidaTextoEspacio(tfText) {
  var inKeyCode = document.all ? event.keyCode : event.which;
  var chCharKey = String.fromCharCode(inKeyCode);

  if (chCharKey == ' ') return true;
  if (inKeyCode == 241) return true; //codigo de ñ
  if (inKeyCode == 209) return true; //codigo de Ñ
  if (inKeyCode == 225 || inKeyCode == 193) return true; //codigo de á | Á
  if (inKeyCode == 233 || inKeyCode == 201) return true; //codigo de é | É
  if (inKeyCode == 237 || inKeyCode == 205) return true; //codigo de í | Í
  if (inKeyCode == 243 || inKeyCode == 211) return true; //codigo de ó | Ó
  if (inKeyCode == 250 || inKeyCode == 218) return true; //codigo de ú | Ú
  if (chCharKey >= 'A' && chCharKey <= 'Z') return true;
  if (chCharKey >= 'a' && chCharKey <= 'z') return true;
  return false;
}
function funValidaNumerosEnteros(tfText) { //con enter
  var inKeyCode = document.all ? event.keyCode : event.which;
  var chCharKey = String.fromCharCode(inKeyCode);
  if (chCharKey >= '0' && chCharKey <= '9') return true;
  if (inKeyCode === 13) return true; //enter
  if (inKeyCode == 17 && ( inKeyCode == 74 || inKeyCode == 106)){
    inKeyCode = 13;
    if(inKeyCode === 13) return true;
  }
  return false;
}
function funValidaNumerosEnterosSNEnter(tfText) {
  var inKeyCode = document.all ? event.keyCode : event.which;
  var chCharKey = String.fromCharCode(inKeyCode);
  if (chCharKey >= '0' && chCharKey <= '9') return true;
  return false;
}
function funValidaAlfaNum(tfText) { //recibe solo letras, numeros y espacios
  var inKeyCode = document.all ? event.keyCode : event.which;
  var chCharKey = String.fromCharCode(inKeyCode);

  if (chCharKey == ' ') return true;
  if (inKeyCode == 241) return true; //codigo de ñ
  if (inKeyCode == 209) return true;//codigo de Ñ MAYUSCULA
  if (chCharKey >= 'A' && chCharKey <= 'Z') return true;
  if (chCharKey >= 'a' && chCharKey <= 'z') return true;
  if (inKeyCode == 225 || inKeyCode == 193) return true; //codigo de á | Á
  if (inKeyCode == 233 || inKeyCode == 201) return true; //codigo de é | É
  if (inKeyCode == 237 || inKeyCode == 205) return true; //codigo de í | Í
  if (inKeyCode == 243 || inKeyCode == 211) return true; //codigo de ó | Ó
  if (inKeyCode == 250 || inKeyCode == 218) return true; //codigo de ú | Ú
  if (chCharKey == '.') return true;
  if (chCharKey >= '0' && chCharKey <= '9') return true;
  return false;
}
