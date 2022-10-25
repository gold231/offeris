/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


// vymaze z cisla medzery, prehodi ciarku na bodku a spravi parsefloat
function myParseFloat(value) {
    var myValue = value.replace(' ', '');
    myValue = myValue.replace(',', '.');
    if (myValue == '') {myValue = '0';}
    var floatValue = parseFloat(myValue);
    return floatValue;
}

// pre cisla - povoli zapis iba cisiel
function validInteger(elementName) {
    if (document.getElementById(elementName) != null) {
        var value = document.getElementById(elementName).value;
        var finalValue = '';
        for (cykl = 0; cykl < value.length; cykl++) {
            var ok = false;
            if (value.charAt(cykl) == '0') {ok = true;}
            if (value.charAt(cykl) == '1') {ok = true;}
            if (value.charAt(cykl) == '2') {ok = true;}
            if (value.charAt(cykl) == '3') {ok = true;}
            if (value.charAt(cykl) == '4') {ok = true;}
            if (value.charAt(cykl) == '5') {ok = true;}
            if (value.charAt(cykl) == '6') {ok = true;}
            if (value.charAt(cykl) == '7') {ok = true;}
            if (value.charAt(cykl) == '8') {ok = true;}
            if (value.charAt(cykl) == '9') {ok = true;}
            if (value.charAt(cykl) == '-') {ok = true;}
            if (ok) {finalValue = finalValue + value.charAt(cykl);}
        }
        document.getElementById(elementName).value = finalValue;
    }
}

function validBigDecimal(elementName) {
    if (document.getElementById(elementName) != null) {
        var value = document.getElementById(elementName).value;
        var finalValue = '';
        for (cykl = 0; cykl < value.length; cykl++) {
            var ok = false;
            if (value.charAt(cykl) == '0') {ok = true;}
            if (value.charAt(cykl) == '1') {ok = true;}
            if (value.charAt(cykl) == '2') {ok = true;}
            if (value.charAt(cykl) == '3') {ok = true;}
            if (value.charAt(cykl) == '4') {ok = true;}
            if (value.charAt(cykl) == '5') {ok = true;}
            if (value.charAt(cykl) == '6') {ok = true;}
            if (value.charAt(cykl) == '7') {ok = true;}
            if (value.charAt(cykl) == '8') {ok = true;}
            if (value.charAt(cykl) == '9') {ok = true;}
            if (value.charAt(cykl) == '-') {ok = true;}
            if (value.charAt(cykl) == '.') {ok = true;}
            if (value.charAt(cykl) == ',') {ok = true;}
            if (value.charAt(cykl) == ' ') {ok = true;}
            if (ok) {finalValue = finalValue + value.charAt(cykl);}
        }
        document.getElementById(elementName).value = finalValue;
    }
}

function validPhoneNumber(elementName) {
    if (document.getElementById(elementName) != null) {
        var value = document.getElementById(elementName).value;
        var finalValue = '';
        for (cykl = 0; cykl < value.length; cykl++) {
            var ok = false;
            if (value.charAt(cykl) == '0') {ok = true;}
            if (value.charAt(cykl) == '1') {ok = true;}
            if (value.charAt(cykl) == '2') {ok = true;}
            if (value.charAt(cykl) == '3') {ok = true;}
            if (value.charAt(cykl) == '4') {ok = true;}
            if (value.charAt(cykl) == '5') {ok = true;}
            if (value.charAt(cykl) == '6') {ok = true;}
            if (value.charAt(cykl) == '7') {ok = true;}
            if (value.charAt(cykl) == '8') {ok = true;}
            if (value.charAt(cykl) == '9') {ok = true;}
            if (value.charAt(cykl) == '+') {ok = true;}
            if (value.charAt(cykl) == '-') {ok = true;}
            if (value.charAt(cykl) == ' ') {ok = true;}
            if (value.charAt(cykl) == '/') {ok = true;}
            if (ok) {finalValue = finalValue + value.charAt(cykl);}
        }
        document.getElementById(elementName).value = finalValue;
    }
}

function setElementValue(elementName, value) {
    if (document.getElementById(elementName) != null) {
        document.getElementById(elementName).value = value;
    }
}

function getElementValue(elementName) {
    if (document.getElementById(elementName) != null) {
        return document.getElementById(elementName).value;
    } else {
        return '';
    }
}
function setOpenerElementValue(elementName, value) {
    if (window.opener.document.getElementById(elementName) != null) {
        window.opener.document.getElementById(elementName).value = value;
    }
}

function getOpenerElementValue(elementName) {
    if (window.opener.document.getElementById(elementName) != null) {
        return window.opener.document.getElementById(elementName).value;
    } else {
        return '';
    }
}

function setElementDisplay(elementName, displayValue) {
    if (document.getElementById(elementName) != null) {
        document.getElementById(elementName).style.display = displayValue;
    }
}

function getElementDisplay(elementName) {
    if (document.getElementById(elementName) != null) {
        return document.getElementById(elementName).style.display;
    } else {
        return '';
    }
}

function getElementChecked(elementName) {
    if (document.getElementById(elementName) != null) {
        return document.getElementById(elementName).checked;
    } else {
        return false;
    }
}

function setElementChecked(elementName, checkedValue) {
    if (document.getElementById(elementName) != null) {
        document.getElementById(elementName).checked = checkedValue;
    }
}

function setElementInnerHTML(elementName, value) {
    if (document.getElementById(elementName) != null) {
        document.getElementById(elementName).innerHTML = value;
    }
}

function getElementInnerHTML(elementName) {
    if (document.getElementById(elementName) != null) {
        return document.getElementById(elementName).innerHTML;
    } else {
        return '';
    }
}


function loadAjaxToDiv(ajaxFile, divElementName) {
  var xmlHttpAjax;
  if (window.ActiveXObject) {
    xmlHttpAjax = new ActiveXObject("Microsoft.XMLHTTP");
  }
  else if (window.XMLHttpRequest) {
    xmlHttpAjax = new XMLHttpRequest();
  }
  xmlHttpAjax.onreadystatechange = function() {
      if(xmlHttpAjax.readyState == 4) {
      if(xmlHttpAjax.status == 200) {
          setElementInnerHTML(divElementName, xmlHttpAjax.responseText.replace(/^\s+|\s+$/g,""));
        }
      }
  }
  xmlHttpAjax.open("GET", ajaxFile, true);
  xmlHttpAjax.send(null);
}
function loadAjaxToElement(ajaxFile, elementName) {
  var xmlHttpAjax;
  if (window.ActiveXObject) {
    xmlHttpAjax = new ActiveXObject("Microsoft.XMLHTTP");
  }
  else if (window.XMLHttpRequest) {
    xmlHttpAjax = new XMLHttpRequest();
  }
  xmlHttpAjax.onreadystatechange = function() {
      if(xmlHttpAjax.readyState == 4) {
      if(xmlHttpAjax.status == 200) {
          setElementValue(elementName, xmlHttpAjax.responseText.replace(/^\s+|\s+$/g,""));
        }
      }
  }
  xmlHttpAjax.open("GET", ajaxFile, true);
  xmlHttpAjax.send(null);
}

function loadAjaxToElementSynchro(ajaxFile, elementName) {
  if (window.XMLHttpRequest) {              
    AJAX=new XMLHttpRequest();              
  } else {                                  
    AJAX=new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (AJAX) {
     AJAX.open("GET", ajaxFile, false);                             
     AJAX.send(null);
     setElementValue(elementName, AJAX.responseText.replace(/^\s+|\s+$/g,""));
  } else {
     return false;
  }      
  return null;
}

function getValueFromAjax(ajaxFile) {
  if (window.XMLHttpRequest) {              
    AJAX=new XMLHttpRequest();              
  } else {                                  
    AJAX=new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (AJAX) {
     AJAX.open("GET", ajaxFile, false);                             
     AJAX.send(null);
     return AJAX.responseText.replace(/^\s+|\s+$/g,"");
  } else {
     return null;
  }      
  return null;
}


function setRoundedProductPrice(elementName, price, idProduct) {
  var xmlHttpAjax;
  if (window.ActiveXObject) {
    xmlHttpAjax = new ActiveXObject("Microsoft.XMLHTTP");
  }
  else if (window.XMLHttpRequest) {
    xmlHttpAjax = new XMLHttpRequest();
  }
  xmlHttpAjax.onreadystatechange = function() {
      if(xmlHttpAjax.readyState == 4) {
      if(xmlHttpAjax.status == 200) {
          setElementValue(elementName, xmlHttpAjax.responseText.replace(/^\s+|\s+$/g,""));
        }
      }
  }
  xmlHttpAjax.open("GET", "../product/ajax/product_rounded_price.jsp?product_id=" + idProduct + "&price=" + price, true);
  xmlHttpAjax.send(null);
}
function setRoundedProductTypePrice(elementName, price, idProduct) {
  var xmlHttpAjax;
  if (window.ActiveXObject) {
    xmlHttpAjax = new ActiveXObject("Microsoft.XMLHTTP");
  }
  else if (window.XMLHttpRequest) {
    xmlHttpAjax = new XMLHttpRequest();
  }
  xmlHttpAjax.onreadystatechange = function() {
      if(xmlHttpAjax.readyState == 4) {
      if(xmlHttpAjax.status == 200) {
          setElementValue(elementName, xmlHttpAjax.responseText.replace(/^\s+|\s+$/g,""));
        }
      }
  }
  xmlHttpAjax.open("GET", "../product/ajax/product_type_rounded_price.jsp?product_id=" + idProduct + "&price=" + price, true);
  xmlHttpAjax.send(null);
}
function setRoundedProductAccessoryPrice(elementName, price, idProduct) {
  var xmlHttpAjax;
  if (window.ActiveXObject) {
    xmlHttpAjax = new ActiveXObject("Microsoft.XMLHTTP");
  }
  else if (window.XMLHttpRequest) {
    xmlHttpAjax = new XMLHttpRequest();
  }
  xmlHttpAjax.onreadystatechange = function() {
      if(xmlHttpAjax.readyState == 4) {
      if(xmlHttpAjax.status == 200) {
          setElementValue(elementName, xmlHttpAjax.responseText.replace(/^\s+|\s+$/g,""));
        }
      }
  }
  xmlHttpAjax.open("GET", "../product/ajax/product_accessory_rounded_price.jsp?product_id=" + idProduct + "&price=" + price, true);
  xmlHttpAjax.send(null);
}

function changeBrToEnter(elementName) {
     var value = getElementValue(elementName);
     value = value.replace(/<br>/g, '\n');
     value = value.replace(/<uvodzovka>/g, '"');
     setElementValue(elementName, value);
}

function changeBrToEnterValue(value) {
     value = value.replace(/<br>/g, '\n');
     value = value.replace('<plus>', '+');
     return value;
}
function changeEnterToBrValue(value) {
     value = value.replace(/\n/g, '<br>');
     value = value.replace('+', '<plus>');
     return value;
}

function directWindow(url) {
    window.location = url;
}

//var formattedMoney = '$' + myMoney.formatMoney(2,',','.');
Number.prototype.formatMoney = function(decPlaces, thouSeparator, decSeparator) {
    var n = this,
    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
    decSeparator = decSeparator == undefined ? "." : decSeparator,
    thouSeparator = thouSeparator == undefined ? "," : thouSeparator,
    sign = n < 0 ? "-" : "",
    i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
    return sign + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
}