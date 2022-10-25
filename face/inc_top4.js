function loadDeleteCaption(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, action, level) {
    loadAjaxToDiv(level + '/includes/ajax_delete.jsp?publicColumn=' + valueName + '&tableName=' + tableName + '&primaryKeyColumn=' + primaryKeyColumn + '&id=' + id + '&recordActiveColumn=' + recordActiveColumn + '&action=' + action, "delete-confirm");
}

function doDelete(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, level) {
  var xmlHttpAjax22;
  if (window.ActiveXObject) {
    xmlHttpAjax22 = new ActiveXObject("Microsoft.XMLHTTP");
  }
  else if (window.XMLHttpRequest) {
    xmlHttpAjax22 = new XMLHttpRequest();
  }
  xmlHttpAjax22.onreadystatechange = function() {
      if(xmlHttpAjax22.readyState == 4) {
      if(xmlHttpAjax22.status == 200) {
          if (document.mainForm != null) {document.mainForm.submit();}
        }
      }
  }
  xmlHttpAjax22.open("GET", level + '/includes/ajax_delete_go.jsp?publicColumn=' + valueName + '&tableName=' + tableName + '&primaryKeyColumn=' + primaryKeyColumn + '&id=' + id + '&recordActiveColumn=' + recordActiveColumn + '&action=deleteORecord', true);
  xmlHttpAjax22.send(null);
}

function popupDeleteInternal(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, globalYes, globalNo) {
    loadDeleteCaption(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, 'view', '..');

    $( "#dialog:ui-dialog" ).dialog( "destroy" );

    var buttons = {};
    buttons[ globalYes ] = function() {
                            doDelete(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, "..");
                            $( "#delete-confirm" ).dialog( "close" );
                    };
    buttons[ globalNo ] = function() {
                            $( "#delete-confirm" ).dialog( "close" );
                    };

    $( "#delete-confirm" ).dialog({
            resizable: false,
            height:200,
            width: 400,
            modal: true,
            buttons: buttons


    });
}

function doChooseIntrauserBranchInternal(idIntrauser, globalClose, level) {
    $( "#dialog:ui-dialog" ).dialog( "destroy" );

    loadAjaxToDiv(level + "/includes/ajax_intrauser_branches.jsp?intrauser_id=" + idIntrauser + "&level=" + level, "chooseIntrauserBranch-confirm");

    var buttons = {};
    buttons[ globalClose ] = function() {
                            $( "#chooseIntrauserBranch-confirm" ).dialog( "close" );
                    };

    $( "#chooseIntrauserBranch-confirm" ).dialog({
            resizable: false,
            height:300,
            width: 400,
            modal: true,
            buttons: buttons


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
  xmlHttpAjax22.onreadystatechange = function() {
      if(xmlHttpAjax22.readyState == 4) {
      if(xmlHttpAjax22.status == 200) {
          $( "#chooseIntrauserBranch-confirm" ).dialog( "close" );
          parent.location.reload(true);
        }
      }
  }
  xmlHttpAjax22.open("GET", level + "/includes/ajax_intrauser_branches.jsp?intrauser_id=" + idIntrauser + "&level=" + level + "&mandant_id=" + idMandant + "&action=setBranch", true);
  xmlHttpAjax22.send(null);
}

function popupDeleteLevelDownInternal(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, globalYes, globalNo) {
    loadDeleteCaption(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, 'view', '../..');
$( "#dialog:ui-dialog" ).dialog( "destroy" );

    var buttons = {};
    buttons[ globalYes ] = function() {
            doDelete(valueName, tableName, primaryKeyColumn, id, recordActiveColumn, "../..");
            $( "#delete-confirm" ).dialog( "close" );
    };
    buttons[ globalNo ] = function() {
            $( "#delete-confirm" ).dialog( "close" );
    };
		$( "#delete-confirm" ).dialog({
			resizable: false,
			height:200,
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
    $( "#dialog:ui-dialog" ).dialog( "destroy" );

    var buttons = {};
    buttons[ globalClose ] = function() {
            $( "#history-confirm" ).dialog( "close" );
    };

		$( "#history-confirm" ).dialog({
			resizable: false,
			height:400,
                        width: 550,
			modal: true,
			buttons: buttons
		});

}


function loadReports(reportType, reportURL, email, lang, action, level, onlyFavourites) {
  loadAjaxToDiv(level + '/includes/ajax_report.jsp?report_type=' + reportType + '&reportURL=' + reportURL + '&email=' + email + '&action=' + action + '&lang=' + lang + '&level=' + level + "&onlyFavourites=true", "reports-most-used");
  loadAjaxToDiv(level + '/includes/ajax_report.jsp?report_type=' + reportType + '&reportURL=' + reportURL + '&email=' + email + '&action=' + action + '&lang=' + lang + '&level=' + level + "&onlyFavourites=false", "reports-all");
}
function chooseReportInternal(reportType, reportURL, email, lang, globalClose) {
    loadReports(reportType, reportURL, email, lang, "view", "..", true);
    $( "#dialog:ui-dialog" ).dialog( "destroy" );

		$( "#report-confirm" ).dialog({
			resizable: false,
			height:350,
                        width: 500,
			modal: true
		});

}
function chooseReportQuotationItemInternal(reportType, reportURL, email, lang, globalClose) {
    loadReports(reportType, reportURL, email, lang, "view", "..", true);
    $( "#dialog:ui-dialog" ).dialog( "destroy" );

		$( "#report-confirm" ).dialog({
			resizable: false,
			height: 300,
                        width: 500,
			modal: true
		});

}

    function setReportExportType(exportType) {
        if (exportType == null) {exportType = 0;}
        if (exportType == 0) {
            setElementChecked('chb_pdf', true);
            setElementChecked('chb_xls', false);
        }
        if (exportType == 1) {
            setElementChecked('chb_pdf', false);
            setElementChecked('chb_xls', true);
        }
    }
    function setReportExportTarget(exportTarget) {
        if (exportTarget == null) {exportTarget = 0;}
        if (exportTarget == 0) {
            setElementChecked('chb_screen', true);
            setElementChecked('chb_email', false);
            //setElementDisplay('email', 'none');
        }
        if (exportTarget == 1) {
            setElementChecked('chb_screen', false);
            setElementChecked('chb_email', true);
            //setElementDisplay('email', '');
        }
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
function doReportAidInternal(idReport, aidActionType, globalWait) {
  createXMLHttpRequestReportAid();
  xmlHttpReportAid.onreadystatechange = function() {
      if(xmlHttpReportAid.readyState == 4) {
      if(xmlHttpReportAid.status == 200) {
          if (aidActionType == 1) {
                setElementInnerHTML("report-generating", '<br/><p align="center"><strong>' + xmlHttpReportAid.responseText.replace(/^\s+|\s+$/g,"") + '</strong></p><p align="right"><font color="red">' + globalWait + '</font></p>');
                $( "#dialog:ui-dialog" ).dialog( "destroy" );

                $( "#report-confirm" ).dialog( "close" );
                $( "#report-generating" ).dialog({
                        resizable: false,
                        height: 130,
                        width: 300,
                        modal: true
                });
            }

           if (aidActionType == 2) {
               if ("false" == xmlHttpReportAid.responseText.replace(/^\s+|\s+$/g,"")) {
                   $( "#report-generating" ).dialog( "close" );
               } else {
                   setTimeout("doReportAid(" + idReport +  ", " + aidActionType + ")", 500);
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
    eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=1,menubar=0,resizable=1,width=730,height=600,left = 240,top = 100');");
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

function loadReportMailNameFromSession(idReport, email) {
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
          doReportAid(idReport, 2);
          popUpMail("../mail/sendmail.jsp?fileNameShort=" + xmlHttpAjax.responseText.replace(/^\s+|\s+$/g,"") + "&mail_to=" + email);
        }
      }
  }
  xmlHttpAjax.open("GET", "../report/ajax/getReportExportName.jsp", true);
  xmlHttpAjax.send(null);
}
function loadReportMail(url, idReport, email) {
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
          loadReportMailNameFromSession(idReport, email);
        }
      }
  }
  xmlHttpAjax.open("GET", url, true);
  xmlHttpAjax.send(null);
}

function loadReportPrint(idReport, reportURL, email) {
  doReportAid(idReport, 1);

  createXMLHttpRequestReportPrint();
  xmlHttpReportPrint.onreadystatechange = function() {
      if(xmlHttpReportPrint.readyState == 4) {
      if(xmlHttpReportPrint.status == 200) {
            var exportType = 0;
            if (getElementChecked('chb_xls')) {exportType = 1;}
            var exportTarget = 0;
            if (getElementChecked('chb_email')) {exportTarget = 1;}


            if (exportTarget == 0) {
                window.location = xmlHttpReportPrint.responseText.replace(/^\s+|\s+$/g,"") + '&exportType=' + exportType + '&exportTarget=' + exportTarget;
                doReportAid(idReport, 2);
            }
            if (exportTarget == 1) {
                loadReportMail(xmlHttpReportPrint.responseText.replace(/^\s+|\s+$/g,"") + '&exportType=' + exportType + '&exportTarget=' + exportTarget, idReport, email);
            }
        }
      }
  }
  xmlHttpReportPrint.open("GET", "../report/ajax/savereport.jsp?report_id=" + idReport + "&reportURL=" + reportURL, true);
  xmlHttpReportPrint.send(null);

}

function doReportPrint(idReport, reportURL, email) {
    loadReportPrint(idReport, reportURL, email);
}

function doChooseForm(url, _height, _width, closeButtonText, titleText) {
    $( "#dialog:ui-dialog" ).dialog( "destroy" );

    loadAjaxToDiv(url, "ajax-choose");
    var buttons = {};
    buttons[ closeButtonText ] = function() {
            $( "#ajax-choose" ).dialog( "close" );
    };

    $( "#ajax-choose" ).dialog({
            title: titleText,
            resizable: false,
            height: _height,
            width: _width,
            modal: true,
            buttons: buttons
    });
}
function hideChooseForm() {
    $( "#ajax-choose" ).dialog( "close" )
}
function updateChooseValue(variable, value, joinValue) {
    setElementValue(variable, joinValue);
    setElementValue(variable + "_show", value);
    changeBrToEnter(variable);
    changeBrToEnter(variable + "_show");
    hideChooseForm();
}