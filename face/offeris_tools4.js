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