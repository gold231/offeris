function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') !== -1) ? parseInt(myNav.split('msie')[1]) : false;
}
function loadDeleteCaption(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, action, level) {
    loadAjaxToDiv(level + '/includes/ajax_delete.jsp?publicColumn=' + valueName + '&tableName=' + tableName + '&primaryKeyColumn=' + primaryKeyColumn + '&id=' + id + '&recordActiveColumn=' + recordActiveColumn + '&action=' + action, "delete-confirm");
}

function doDelete(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, level) {
    doDeleteWithSelectRow(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, level, '');
}

function doDeleteWithSelectRow(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, level, selectRow) {
    var xmlHttpAjax22;
    if (window.ActiveXObject) {
        xmlHttpAjax22 = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        xmlHttpAjax22 = new XMLHttpRequest();
    }
    xmlHttpAjax22.onreadystatechange = function () {
        if (xmlHttpAjax22.readyState == 4) {
            if (xmlHttpAjax22.status == 200) {
                if (document.mainForm != null) {
                    if (selectRow !== '') {
                        setElementValue('selectRow', selectRow);
                    }
                    document.mainForm.submit();
                }
            }
        }
    }
    xmlHttpAjax22.open("GET", level + '/includes/ajax_delete_go.jsp?publicColumn=' + valueName + '&tableName=' + tableName + '&primaryKeyColumn=' + primaryKeyColumn + '&id=' + id + '&recordActiveColumn=' + recordActiveColumn + '&action=deleteORecord', true);
    xmlHttpAjax22.send(null);
}

function popupDeleteInternal(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, globalYes, globalNo) {
    popupDeleteInternalWithSelectRow(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, globalYes, globalNo, '')
}

function popupDeleteInternalWithSelectRow(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, globalYes, globalNo, selectRow) {
    $("#dialog:ui-dialog").dialog("destroy");

    var buttons = {};
    buttons[ globalYes ] = function () {
        if (tableName == 'invoice' || tableName == 'quotation' || tableName == 'orderin' || tableName == 'orderout' || tableName == 'warehouse' || tableName == 'invoicein' || tableName == 'bizcase'){
            setElementValue('post', 'deleteDocument');
        }
        doDeleteWithSelectRow(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, "..", selectRow);
        $(this).closest('.ui-dialog-content').dialog('close');
    };
    buttons[ globalNo ] = function () {
        $(this).closest('.ui-dialog-content').dialog('close');
    };

    loadDeleteCaption(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, 'view', '..');
    $("#delete-confirm").dialog({
        resizable: false,
        width: 400,
        modal: true,
        buttons: buttons


    });
}

function popupDeleteInternalFromDetail(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, globalYes, globalNo, goToJsp) {

    $("#dialog:ui-dialog").dialog("destroy");

    var buttons = {};
    buttons[ globalYes ] = function () {
        doDelete(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, "..");
        window.location = goToJsp;
        $(this).closest('.ui-dialog-content').dialog('close');
    };
    buttons[ globalNo ] = function () {
        $(this).closest('.ui-dialog-content').dialog('close');
    };

    loadDeleteCaption(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, 'view', '..');
    $("#delete-confirm").dialog({
        resizable: false,
        width: 400,
        modal: true,
        buttons: buttons


    });
}

function doChooseIntrauserBranchInternal(idIntrauser, globalClose, level) {
    $("#dialog:ui-dialog").dialog("destroy");

    loadAjaxToDiv(level + "/includes/ajax_intrauser_branches.jsp?intrauser_id=" + idIntrauser + "&level=" + level, "chooseIntrauserBranch-confirm");


    $("#chooseIntrauserBranch-confirm").dialog({
        resizable: false,
        width: 400,
        modal: true
    });
}

function doOfferisModules() {
    $("#dialog:ui-dialog").dialog("destroy");

    $("#offeris-modules").dialog({
        resizable: false,
        height: 425,
        width: 575,
        modal: true

    });
}

function doOfferisHistory() {
    $("#dialog:ui-dialog").dialog("destroy");

    $("#offeris-history").dialog({
        resizable: false,
        height: 425,
        width: 400,
        modal: true

    });
}

function setBranchForIntrauser(idIntrauser, idMandant, level) {
    var xmlHttpAjax22;
    if (window.ActiveXObject) {
        xmlHttpAjax22 = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        xmlHttpAjax22 = new XMLHttpRequest();
    }
    xmlHttpAjax22.onreadystatechange = function () {
        if (xmlHttpAjax22.readyState == 4) {
            if (xmlHttpAjax22.status == 200) {
                hideDialog('chooseIntrauserBranch-confirm');
                parent.location.reload(true);
            }
        }
    }
    xmlHttpAjax22.open("GET", level + "/includes/ajax_intrauser_branches.jsp?intrauser_id=" + idIntrauser + "&level=" + level + "&mandant_id=" + idMandant + "&action=setBranch", true);
    xmlHttpAjax22.send(null);
}

function popupDeleteLevelDownInternal(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, globalYes, globalNo) {
    loadDeleteCaption(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, 'view', '../..');
    $("#dialog:ui-dialog").dialog("destroy");

    var buttons = {};
    buttons[ globalYes ] = function () {
        doDelete(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, "../..");
        $(this).closest('.ui-dialog-content').dialog('close');
    };
    buttons[ globalNo ] = function () {
        $(this).closest('.ui-dialog-content').dialog('close');
    };
    $("#delete-confirm").dialog({
        resizable: false,
        width: 400,
        modal: true,
        buttons: buttons
    });
}
function loadHistoryInternal(table, primaryId, lang) {
    loadAjaxToDiv('../includes/ajax_history.jsp?table=' + table + '&primaryId=' + primaryId + '&lang=' + lang, "history-confirm");
}
function popupHistoryInternal(table, primaryId, globalClose) {
    loadHistory(table, primaryId);
    var myHeight = window.innerHeight - 300;
    if (myHeight < 400) {
        myHeight = 400;
    }
    var myWidth = window.innerWidth - 400;
    if (myWidth < 400) {
        myWidth = 400;
    }
    $("#dialog:ui-dialog").dialog("destroy");

    $("#history-confirm").dialog({
        resizable: false,
        height: myHeight,
        width: myWidth,
        modal: true
    });

}


function loadReports(reportType, reportURL, email, lang, action, level, onlyFavourites, source, source_id, ip) {
    var myHeight = window.innerHeight - 50;
    var reportHeight = myHeight - 83;
    if (reportHeight < 400) {
        reportHeight = 400;
    }
    loadAjaxToDivSynchro(level + '/includes/ajax_report.jsp?report_type=' + reportType + '&reportURL=' + reportURL + '&email=' + email + '&action=' + action + '&lang=' + lang + '&level=' + level + "&source=" + source + "&source_id=" + source_id + "&ip=" + ip + "&reportHeight=" + reportHeight, "report-confirm");
    if (typeof setEmailsAmount != "undefined") {
        setEmailsAmount();
    }
}
function chooseReportInternal(reportType, reportURL, email, lang, globalClose, source, source_id, ip) {
    loadReports(reportType, reportURL, email, lang, "view", "..", true, source, source_id, ip);
    $("#dialog:ui-dialog").dialog("destroy");

    var myHeight = window.innerHeight - 50;
    if (myHeight < 400) {
        myHeight = 400;
    }
    $("#report-confirm").dialog({
        resizable: false,
        height: myHeight,
        width: 980,
        modal: true
    });
}
function chooseReportQuotationItemInternal(reportType, reportURL, email, lang, globalClose, source, source_id, ip) {
    loadReports(reportType, reportURL, email, lang, "view", "..", true, source, source_id, ip);
    $("#dialog:ui-dialog").dialog("destroy");
    var myHeight = window.innerHeight - 50;
    if (myHeight < 400) {
        myHeight = 400;
    }

    $("#report-confirm").dialog({
        resizable: false,
        height: myHeight,
        width: 760,
        modal: true
    });

}

function setReportExportType(exportType) {
    if (exportType == null) {
        exportType = 0;
    }
    if (exportType == 0) {
        setElementClass('report_export_type_pdf', 'report_settings_active');
        setElementClass('report_export_type_xls', 'report_settings');
    }
    if (exportType == 1) {
        setElementClass('report_export_type_pdf', 'report_settings');
        setElementClass('report_export_type_xls', 'report_settings_active');
    }
    setElementValue('report_export_type', exportType);
}
function setReportExportTarget(exportTarget, hasPortalLicence) {
    if (exportTarget == null) {
        exportTarget = 0;
    }
    if (exportTarget == 0) {
        setElementClass('report_export_to_screen', 'report_settings_active');
        setElementClass('report_export_to_email', 'report_settings');
        setElementClass('report_export_to_portal', 'report_settings' + (hasPortalLicence === 'false' || hasPortalLicence === false ? "_disabled" : ""));
        setElementDisplay('email', 'none');
        setElementDisplay('email2', 'none');
    }
    if (exportTarget == 1) {
        setElementClass('report_export_to_screen', 'report_settings');
        setElementClass('report_export_to_email', 'report_settings_active');
        setElementClass('report_export_to_portal', 'report_settings' + (hasPortalLicence === 'false' || hasPortalLicence === false ? "_disabled" : ""));
        setElementDisplay('email', '');
    }
    if (exportTarget == 2) {
        setElementClass('report_export_to_screen', 'report_settings');
        setElementClass('report_export_to_email', 'report_settings');
        setElementClass('report_export_to_portal', 'report_settings_active');
        setElementDisplay('email', '');
    }
    setElementValue('report_export_to', exportTarget);
}

var xmlHttpReportAid;
function createXMLHttpRequestReportAid() {
    if (window.ActiveXObject) {
        xmlHttpReportAid = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        xmlHttpReportAid = new XMLHttpRequest();
    }
}
function doReportAidInternal(idReport, aidActionType, globalWait, source) {
    createXMLHttpRequestReportAid();
    xmlHttpReportAid.onreadystatechange = function () {
        if (xmlHttpReportAid.readyState == 4) {
            if (xmlHttpReportAid.status == 200) {
                if (aidActionType == 1) {
                    if (source !== 'business_calendar') {
                        $("#dialog:ui-dialog").dialog("destroy");
                        hideDialog('report-confirm');
                    } else {
                        setElementDisplay('report-confirm', 'none');
                    }
                    if ((isIE() > 9) || !isIE()) {
                        setElementInnerHTML("report-generating", '<br/><p align="center"><strong>' + xmlHttpReportAid.responseText.replace(/^\s+|\s+$/g, "") + '</strong></p><p align="right"><font color="red">' + globalWait + '</font></p>');
                        if (source !== 'business_calendar') {
                            $("#report-generating").dialog({
                                resizable: false,
                                width: 300,
                                modal: true
                            });
                        } else {
                            var myWidth = window.innerWidth - 300;
                            var myHeight = window.innerHeight - 150;
                            myWidth = myWidth / 2;
                            myHeight = myHeight / 2;
                            setElementDisplay('report-generating', '');
                            document.getElementById('report-generating').style.zIndex = "1";
                            document.getElementById('report-generating').style.position = "absolute";
                            document.getElementById('report-generating').style.top = myHeight + 'px';
                            document.getElementById('report-generating').style.left = myWidth + 'px';
                            document.getElementById('report-generating').style.backgroundColor = "white";
                            document.getElementById('report-generating').style.height = '150px';
                            document.getElementById('report-generating').style.width = '300px';
                            document.getElementById('report-generating').style.border = '1px solid #3D7A99';
                            document.getElementById('report-generating').style.padding = '10px';
                            document.getElementById('report-generating').style.borderRadius = '5px'; // w3c
                            document.getElementById('report-generating').style.MozBorderRadius = '5px'; // mozilla
                        }
                    }
                }
                if (aidActionType == 2) {
                    if ("false" == xmlHttpReportAid.responseText.replace(/^\s+|\s+$/g, "")) {
                        if (source !== 'business_calendar') {
                            hideDialog('report-generating');
                        } else {
                            setElementDisplay('report-generating', 'none');
                        }
                    } else {
                        if (source !== 'business_calendar') {
                            setTimeout("doReportAid(" + idReport + ", " + aidActionType + ")", 500);
                        } else {
                            setTimeout(setElementDisplay('report-generating', 'none'), 500);
                        }
                    }
                }
            }
        }
    }
    xmlHttpReportAid.open("GET", "../report/ajax/getreportname.jsp?report_id=" + idReport + "&actionType=" + aidActionType, true);
    xmlHttpReportAid.send(null);
}

function popUpMail(URL) {
    day = new Date();
    id = day.getTime();
    eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=1,menubar=0,resizable=1,width=800,height=600,left = 240,top = 100');");
}


var xmlHttpReportPrint;
function createXMLHttpRequestReportPrint() {
    if (window.ActiveXObject) {
        xmlHttpReportPrint = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        xmlHttpReportPrint = new XMLHttpRequest();
    }
}

function loadReportMailNameFromSession(idReport, email, source_id, source) {
    var xmlHttpAjax;
    if (window.ActiveXObject) {
        xmlHttpAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        xmlHttpAjax = new XMLHttpRequest();
    }
    xmlHttpAjax.onreadystatechange = function () {
        if (xmlHttpAjax.readyState == 4) {
            if (xmlHttpAjax.status == 200) {
                doReportAid(idReport, 2, source);
                popUpMail("../mail/sendmail.jsp?fileNameShort=" + xmlHttpAjax.responseText.replace(/^\s+|\s+$/g, "") + "&mail_to=" + email + "&reportSourceId=" + source_id + "&setSubject=true&source=" + source);
            }
        }
    }
    xmlHttpAjax.open("GET", "../report/ajax/getReportExportName.jsp", true);
    xmlHttpAjax.send(null);
}
function loadReportMail(url, idReport, email, source_id, source) {
    var xmlHttpAjax;
    if (window.ActiveXObject) {
        xmlHttpAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        xmlHttpAjax = new XMLHttpRequest();
    }
    xmlHttpAjax.onreadystatechange = function () {
        if (xmlHttpAjax.readyState == 4) {
            if (xmlHttpAjax.status == 200) {
                loadReportMailNameFromSession(idReport, email, source_id, source);
            }
        }
    }
    xmlHttpAjax.open("GET", url, true);
    xmlHttpAjax.send(null);
}


function loadReportPrint(idReport, reportURL, email, source, source_id, ip) {
    doReportAid(idReport, 1, source);
    createXMLHttpRequestReportPrint();
    xmlHttpReportPrint.onreadystatechange = function () {
        if (xmlHttpReportPrint.readyState == 4) {
            if (xmlHttpReportPrint.status == 200) {
                var exportType = getElementValue('report_export_type');
                var exportTarget = getElementValue('report_export_to');

                if (exportTarget == 0) {
                    var windowName = xmlHttpReportPrint.responseText.replace(/^\s+|\s+$/g, "") + '&exportType=' + exportType + '&exportTarget=' + exportTarget;

                    var userAgent = navigator.userAgent;
                    var appName = navigator.appName;
                    if (userAgent.indexOf("Firefox") >= 0) {
                        appName = "Firefox";
                    }

                    if (appName == 'Microsoft Internet Explorer') {
                        window.location = windowName;
                    } else if (appName == 'Netscape') {  // safari, crome
                        //window.open ( windowName );
                        if (source !== 'business_calendar') {
                            hideDialog('report-generating');
                        } else {
                            setElementDisplay('report-generating', 'none');
                        }
                        window.location = windowName;
                    } else if (appName == 'Opera') {
                        window.open(windowName);
                    } else {
                        window.location = windowName;
                    }
                    doReportAid(idReport, 2, source);
                } else if (exportTarget == 1) {
                    loadReportMail(xmlHttpReportPrint.responseText.replace(/^\s+|\s+$/g, "") + '&exportType=' + exportType + '&exportTarget=' + exportTarget, idReport, email, source_id, source);
                }  else if (exportTarget == 2) {
                    loadAjaxToDivSynchro("../report/ajax/setDocumentByReport.jsp?document=" + source + "&idDocument=" + source_id + "&var1=setReportNumber&var2=" + idReport, "");
                    hideDialog('report-generating');
                }
            }
        }
    }
    xmlHttpReportPrint.open("GET", "../report/ajax/savereport.jsp?report_id=" + idReport + "&reportURL=" + reportURL + "&source=" + source + "&source_id=" + source_id + "&ip=" + ip, true);
    xmlHttpReportPrint.send(null);

}

function setDocumentByReport(document, idDocument) {
    var doit = false;
    var var1 = "F";
    var var2 = "F";
    var var3 = "F";
    var var4 = "F";
    var var5 = "F";
    if (document == "quotation" || document == "orderin" || document == "orderout") {
        if (getElementChecked("chb_print_discount_percent")) {
            var1 = "T";
        }
        if (getElementChecked("chb_print_summary")) {
            var2 = "T";
        }
        if (getElementChecked("chb_print_delivery_address")) {
            var3 = "T";
        }
        if (getElementChecked("chb_print_item_description")) {
            var4 = "T";
        }
        if (getElementChecked("chb_print_item_pictures")) {
            var5 = "T";
        }
        doit = true;
    }
    if (document == "invoice") {
        if (getElementChecked("chb_print_discount_percent")) {
            var1 = "T";
        }
        if (getElementChecked("chb_print_ignore_payments")) {
            var2 = "T";
        }
        if (getElementChecked("chb_print_delivery_address")) {
            var3 = "T";
        }
        doit = true;
    }
    if (document == "orderins") {
        if (getElementChecked("chb_print_sale")) {
            var1 = "T";
        }
        if (getElementChecked("chb_print_buy_profit")) {
            var2 = "T";
        }
        if (getElementChecked("chb_print_item")) {
            var3 = "T";
        }
        if (getElementChecked("chb_print_internal_note")) {
            var5 = "T";
        }
        doit = true;
    }
    if (document == "invoice" || document == "quotations" || document == "orderins" || document == "orderouts") {
        if (getElementChecked("chb_print_item_description")) {
            var4 = "T";
        }
        doit = true;
    }
    if (document == "warehouse") {
        if (getElementChecked("chb_print_summary")) {
            var1 = "T";
        }
        if (getElementChecked("chb_print_delivery_address")) {
            var2 = "T";
        }
        var3 = getElementValue('print_sort_items_by');
        if (getElementChecked("chb_print_item_description")) {
            var4 = "T";
        }
        if (getElementChecked("chb_print_item_prices")) {
            var5 = "T";
        }
        doit = true;
    }
    if (document == "bizcase") {
        if (getElementChecked("chb_print_account")) {
            var1 = "T";
        }
        if (getElementChecked("chb_print_documents")) {
            var2 = "T";
        }
        doit = true;
    }
    if (document == "catalogue") {
        if (getElementChecked("chb_print_page_break")) {
            var1 = "T";
        }
        doit = true;
    }
    if (document == "business_calendar") {
        var1 = getElementValue('print_date_from');
        var2 = getElementValue('print_date_to');
        doit = true;
    }
    if (doit) {
        loadAjaxToDivSynchro("../report/ajax/setDocumentByReport.jsp?document=" + document + "&idDocument=" + idDocument + "&var1=" + var1 + "&var2=" + var2 + "&var3=" + var3 + "&var4=" + var4 + "&var5=" + var5, "");
    }
}

function setContactByReportDocument(document, idDocument, email) {
    if (email != '' && email != null) {
        loadAjaxToDivSynchro("../report/ajax/setContactByReportDocument.jsp?document=" + document + "&idDocument=" + idDocument + "&email=" + email, "");
    }
}

function setFilter(column, filter) {
    if (column != '' && column != null && filter != '' && filter != null) {
        var value = getElementValue(column);
        if ($("#" + column).attr('type') === 'checkbox') {
            if (getElementChecked(column)) {
                value = "T";
            } else {
                value = "F";
            }
        }
        loadAjaxToDivSynchro("../includes/ajax_set_filter.jsp?column=" + column + "&value=" + value + "&filter=" + filter, "");
    }
}

function setEmail(strict) {
    if (strict) {
        setElementValue("txt_email", getElementValue("selectEmail"));
    }
    if (getElementValue("selectEmail") == "") {
        setElementDisplay("email2", "");
    } else {
        setElementDisplay("email2", "none");
    }
}

function doReportPrint(idReport, reportURL, email, source, source_id, ip) {
    loadReportPrint(idReport, reportURL, email, source, source_id, ip);
}

function doChooseForm(url, _height, _width, closeButtonText, titleText) {
    $("#dialog:ui-dialog").dialog("destroy");

    loadAjaxToDiv(url, "ajax-choose");

    $("#ajax-choose").dialog({
        title: titleText,
        resizable: false,
        height: _height,
        width: _width,
        modal: true
    });
}
function updateChooseValue(variable, value, joinValue) {
    if (variable.indexOf("ifr") > -1) {
        setElementValue("textToSet", value);
        setElementValue("variableToSet", variable.substr(0, variable.lastIndexOf("_")));
        setElementValue("post", "setMessage");
        document.mainForm.submit();
    } else {
        setElementValue(variable, joinValue);
        setElementValue(variable + "_show", value);
        changeBrToEnter(variable);
        changeBrToEnter(variable + "_show");
    }
    hideDialog('ajax-choose');
}
function updateChooseValueHtml(variable, value, joinValue) {
    setElementValue(variable, joinValue);
    setElementValue(variable + "_show", value);
    hideDialog('ajax-choose');
}
