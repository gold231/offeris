// pre cisla - povoli zapis iba cisiel


//var $ = require('jQuery');

function validInteger(elementName) {
    if (document.getElementById(elementName) != null) {
        var value = document.getElementById(elementName).value;
        var finalValue = '';
        for (cykl = 0; cykl < value.length; cykl++) {
            var ok = false;
            if (value.charAt(cykl) == '0') {
                ok = true;
            }
            if (value.charAt(cykl) == '1') {
                ok = true;
            }
            if (value.charAt(cykl) == '2') {
                ok = true;
            }
            if (value.charAt(cykl) == '3') {
                ok = true;
            }
            if (value.charAt(cykl) == '4') {
                ok = true;
            }
            if (value.charAt(cykl) == '5') {
                ok = true;
            }
            if (value.charAt(cykl) == '6') {
                ok = true;
            }
            if (value.charAt(cykl) == '7') {
                ok = true;
            }
            if (value.charAt(cykl) == '8') {
                ok = true;
            }
            if (value.charAt(cykl) == '9') {
                ok = true;
            }
            if (value.charAt(cykl) == '-') {
                ok = true;
            }
            if (ok) {
                finalValue = finalValue + value.charAt(cykl);
            }
        }
        if (getElementValue(elementName) !== finalValue) {
            document.getElementById(elementName).value = finalValue;
        }
    }
}

function validBigDecimal(elementName) {
    if (document.getElementById(elementName) != null) {
        var value = document.getElementById(elementName).value;
        var finalValue = '';
        for (cykl = 0; cykl < value.length; cykl++) {
            var ok = false;
            if (value.charAt(cykl) == '0') {
                ok = true;
            }
            if (value.charAt(cykl) == '1') {
                ok = true;
            }
            if (value.charAt(cykl) == '2') {
                ok = true;
            }
            if (value.charAt(cykl) == '3') {
                ok = true;
            }
            if (value.charAt(cykl) == '4') {
                ok = true;
            }
            if (value.charAt(cykl) == '5') {
                ok = true;
            }
            if (value.charAt(cykl) == '6') {
                ok = true;
            }
            if (value.charAt(cykl) == '7') {
                ok = true;
            }
            if (value.charAt(cykl) == '8') {
                ok = true;
            }
            if (value.charAt(cykl) == '9') {
                ok = true;
            }
            if (value.charAt(cykl) == '-') {
                ok = true;
            }
            if (value.charAt(cykl) == '.') {
                ok = true;
            }
            if (value.charAt(cykl) == ',') {
                ok = true;
            }
            if (value.charAt(cykl) == ' ') {
                ok = true;
            }
            if (ok) {
                finalValue = finalValue + value.charAt(cykl);
            }
        }
        if (getElementValue(elementName) !== finalValue) {
            document.getElementById(elementName).value = finalValue;
        }
    }
}

function validPhoneNumber(elementName) {
    if (document.getElementById(elementName) != null) {
        var value = document.getElementById(elementName).value;
        var finalValue = '';
        for (cykl = 0; cykl < value.length; cykl++) {
            var ok = false;
            if (value.charAt(cykl) == '0') {
                ok = true;
            }
            if (value.charAt(cykl) == '1') {
                ok = true;
            }
            if (value.charAt(cykl) == '2') {
                ok = true;
            }
            if (value.charAt(cykl) == '3') {
                ok = true;
            }
            if (value.charAt(cykl) == '4') {
                ok = true;
            }
            if (value.charAt(cykl) == '5') {
                ok = true;
            }
            if (value.charAt(cykl) == '6') {
                ok = true;
            }
            if (value.charAt(cykl) == '7') {
                ok = true;
            }
            if (value.charAt(cykl) == '8') {
                ok = true;
            }
            if (value.charAt(cykl) == '9') {
                ok = true;
            }
            if (value.charAt(cykl) == '+') {
                ok = true;
            }
            if (value.charAt(cykl) == '-') {
                ok = true;
            }
            if (value.charAt(cykl) == ' ') {
                ok = true;
            }
            if (value.charAt(cykl) == '/') {
                ok = true;
            }
            if (ok) {
                finalValue = finalValue + value.charAt(cykl);
            }
        }
        if (getElementValue(elementName) !== finalValue) {
            document.getElementById(elementName).value = finalValue;
        }
    }
}

function setElementValue(elementName, value) {
    if (document.getElementById(elementName) != null) {
        if (value == null) { value = ""; }
        if (value == "null") { value = ""; }
        if (value == "NULL") { value = ""; }
        document.getElementById(elementName).value = value;
    }
}

function setElementClass(elementName, value) {
    if (document.getElementById(elementName) != null) {
        document.getElementById(elementName).className = value;
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

function setElementDisabled(elementName) {
    if (document.getElementById(elementName) != null) {
        document.getElementById(elementName).disabled = true;
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
    if ($("#" + elementName).attr('type') === 'checkbox') {
        if (document.getElementById(elementName) != null) {
            return document.getElementById(elementName).checked;
        } else {
            return false;
        }
    } else {
        var value = getElementValue(elementName);
        var newValue = value.toUpperCase();
        if (newValue === 'T' || newValue === 'TRUE' || newValue === 'ÁNO' || newValue === 'ANO' || newValue === 'YES' || newValue === true || newValue === 'ON') {
            return true;
        } else {
            return false;
        }
    }
}

function submitFormUsingAjax(form, divName, link) {
    var params = getInputElementsFromForm(form);
    loadAjaxToDivPost(link, divName, params);

}

function getInputElementsFromForm(form){
    var result = "";
    for (var i = 0; i < form.elements.length; i++) {
        if (result != "") result += "&";
        result += form.elements[i].id + "=" + form.elements[i].value;
        if (form.elements[i].id == "publish_invoice_document_type") console.log(form.elements[i].value);
    }
    return result;
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
        if (xmlHttpAjax.readyState == 4) {
            if (xmlHttpAjax.status == 200) {
                setElementInnerHTML(divElementName, xmlHttpAjax.responseText.replace(/^\s+|\s+$/g, ""));
            }
        }
    }
    xmlHttpAjax.open("GET", ajaxFile, true);
    xmlHttpAjax.send(null);
}

function loadAjaxToDivJQuery(ajaxFile, divElementName) {
    $.ajax({
        method: 'get',
        async: 'true',
        url: ajaxFile,
        success: function (data) {
            $("#" + divElementName).html(data);

        },
        error: function (data) {
            console.log(data);

        }
    });
}

function loadAjaxToDivPost(ajaxFile, divElementName, params) {
    $.ajax({
        method: 'post',
        async: 'true',
        url: ajaxFile + "?" + params,
        success: function (data) {
            $('#' + divElementName).html(data);
        },
        error: function (data) {
            console.log(data);
        }
    });
}

function loadTableAjaxToDiv(ajaxFile, divElementName) {
    var xmlHttpAjax;
    if (window.ActiveXObject) {
        xmlHttpAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        xmlHttpAjax = new XMLHttpRequest();
    }
    xmlHttpAjax.onreadystatechange = function() {
        if (xmlHttpAjax.readyState == 4) {
            if (xmlHttpAjax.status == 200) {
                setElementInnerHTML(divElementName, xmlHttpAjax.responseText.replace(/^\s+|\s+$/g, ""));
                if (typeof widerTable == 'function') {
                    widerTable();
                }
            }
        }
    }
    xmlHttpAjax.open("GET", ajaxFile, true);
    xmlHttpAjax.send(null);
}
function loadAjaxToDivSynchro(ajaxFile, divElementName) {
    if (window.XMLHttpRequest) {
        AJAX = new XMLHttpRequest();
    } else {
        AJAX = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (AJAX) {
        AJAX.open("GET", ajaxFile, false);
        AJAX.send(null);
        setElementInnerHTML(divElementName, AJAX.responseText.replace(/^\s+|\s+$/g, ""));
    } else {
        return false;
    }
    return null;
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
        if (xmlHttpAjax.readyState == 4) {
            if (xmlHttpAjax.status == 200) {
                setElementValue(elementName, xmlHttpAjax.responseText.replace(/^\s+|\s+$/g, ""));
            }
        }
    }
    xmlHttpAjax.open("GET", ajaxFile, true);
    xmlHttpAjax.send(null);
}

function loadAjaxToElementSynchro(ajaxFile, elementName) {
    if (window.XMLHttpRequest) {
        AJAX = new XMLHttpRequest();
    } else {
        AJAX = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (AJAX) {
        AJAX.open("GET", ajaxFile, false);
        AJAX.send(null);
        setElementValue(elementName, AJAX.responseText.replace(/^\s+|\s+$/g, ""));
        //alert(AJAX.responseText.replace(/^\s+|\s+$/g, ""));
    } else {
        return false;
    }
    return null;
}

function getValueFromAjax(ajaxFile) {
    if (window.XMLHttpRequest) {
        AJAX = new XMLHttpRequest();
    } else {
        AJAX = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (AJAX) {
        AJAX.open("GET", ajaxFile, false);
        AJAX.send(null);
        //console.log('CALL ' + ajaxFile);
        //console.log(AJAX.responseText.replace(/^\s+|\s+$/g, ""));
        return AJAX.responseText.replace(/^\s+|\s+$/g, "");
    } else {
        return null;
    }
    return null;
    /*
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
     return null;*/
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
        if (xmlHttpAjax.readyState == 4) {
            if (xmlHttpAjax.status == 200) {
                setElementValue(elementName, xmlHttpAjax.responseText.replace(/^\s+|\s+$/g, ""));
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
        if (xmlHttpAjax.readyState == 4) {
            if (xmlHttpAjax.status == 200) {
                setElementValue(elementName, xmlHttpAjax.responseText.replace(/^\s+|\s+$/g, ""));
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
        if (xmlHttpAjax.readyState == 4) {
            if (xmlHttpAjax.status == 200) {
                setElementValue(elementName, xmlHttpAjax.responseText.replace(/^\s+|\s+$/g, ""));
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

function contains(value, searchFor)
{
    return (value || '').indexOf(searchFor) > -1;
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
    var result = sign + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
    
    if (contains(result, decSeparator)) {
        if (result.endsWith('00000000')) { result = result.substr(0, result.length - 8); }
        if (result.endsWith('0000000')) { result = result.substr(0, result.length - 7); }
        if (result.endsWith('000000')) { result = result.substr(0, result.length - 6); }
        if (result.endsWith('00000')) { result = result.substr(0, result.length - 5); }
        if (result.endsWith('0000')) { result = result.substr(0, result.length - 4); }
        if (result.endsWith('000')) { result = result.substr(0, result.length - 3); }
        if (result.endsWith('00')) { result = result.substr(0, result.length - 2); }
        if (result.endsWith('0')) { result = result.substr(0, result.length - 1); }
        if (result.endsWith(decSeparator)) { result += "00"; }
    }
    if (contains(result, "E")) {
        result = "0" + decSeparator + "00"; 
    }
    
    
    return result;
}
function hideDialog(dialog) {
    $("#" + dialog).closest('.ui-dialog-content').dialog("close");
}
function doCorrectNumber(price) {
    if (isNaN(price) || !isFinite(price) || typeof price === 'undefined' || price === 'null' || price === null) {
        price = 0;
    }
    price = Math.round(price);
    return price;
}