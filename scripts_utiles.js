
//==============================================================
//== CIFRADO CAESAR

var caesar = caesar || (function() {
    var doStaff = function (txt, desp, action) {
        var replace = (function() {
            var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            var l = abc.length;
            return function(c) {
                var i = abc.indexOf(c.toLowerCase());
                if (i != -1) {
                    var pos = i;
                    if (action) {
                        // forward
                        pos += desp;
                        pos -= (pos >= l)?l:0;
                    } else {
                        // backward
                        pos -= desp;
                        pos += (pos < 0)?l:0;
                    }
                    return abc[pos];
                }
                return c;
            };
        })();
        var re = (/([a-z])/ig);
        return String(txt).replace(re, function (match) {
            return replace(match);
        });
    };
    return {
            encode: function(txt, desp) {
            return doStaff(txt, desp, true);
        },
            decode: function(txt, desp) {
            return doStaff(txt, desp, false);
        }
    };
})();

//==============================================================
//== ORDENAR ARRAY

function bubbleSort(arg) {
	var aux=0, max=arg.length;
	for(i=1; i<max; i++)  for(e=0; e<max-1; e++)  if(arg[e] > arg[e+1])  aux=arg[e], arg[e]=arg[e+1], arg[e+1]=aux; 
	return arg;
}

//==============================================================
//== FACTORIAL

var factorial = function(num){
	f = (x) => { return x==1? 1: x*f(x-1) }
	return f(num);
}

//==============================================================
//== SPAM MASIVO EN YAHOO ANSWERS

document.querySelectorAll('.add-answer-prompt').forEach(function(elem){
    elem.click();
});

document.querySelectorAll('.answer').forEach(function(elem){
    elem.innerHTML = "cambia este texto por el tuyo";
});

document.querySelectorAll('#submitAnswer').forEach(function(elem){
    elem.click();
});

//==============================================================
//== NUMEROS PRIMOS

var c = 100;
var j = 2;
var numerosPrimos = [];

for (; j < c; j++) {
    if (primo(j)) {
        numerosPrimos.push(j);
    }
}
console.log(numerosPrimos);

function primo(numero) {
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
        return false;
        }
    }
  return numero !== 1;
}

//==============================================================
//== GENERADOR DE CONTRASEÑAS RANDOM

function generarCodigoClave(){
    var lista = "abcdefghijklmnopqrstuvwxyz0123456789-_,";
    tmp = "";
    for(i = 0; i<10; i++) {
      tmp += lista[Math.floor(Math.random() * lista.length)];
    }
    document.getElementById('resultPassGenerated').value = tmp;
  }

//==============================================================
//== MAIL REGEX

/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

//==============================================================

