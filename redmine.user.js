// ==UserScript==
// @name          Redmine Usability Enhancements
// @description	  Adds extra fucntionality to redmine.
// @include       https://redmine.<org>.com/redmine/issues/*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js
// ==/UserScript==
// Users
var COMPLETION_USER = '66';
// Statuses
var NEW         = '1';
var IN_PROGRESS = '2';
var RESOLVED    = '3';
var FEEDBACK    = '4';
var CLOSED      = '5';
var REJECTED    = '6';
var REOPENED    = '7';
// Acitivies
var DESIGN        = '8';
var DEVELOPMENT   = '9';
var DOCUMENTATION = '13';
var TESTING       = '14';
var DEPLOYMENT    = '15';
var SUPPORT       = '16';
var RESEARCH      = '17';
var PLANNING      = '20';
// IDs
var STATUS_ID     = '#issue_status_id';
var ASSIGN_ID     = '#issue_assigned_to_id';
var DONE_RATIO_ID = '#issue_done_ratio';
var ACTIVITY      = '#time_entry_activity_id';
var LOCK_VERSION  = '#issue_lock_version';
var NOTES         = '#notes';
var SUBMIT_BUTTON = '#commit';
var PREVIEW       = '#preview';
// Completion Comment
var NOTE = 'Proof of Testing attached';
GM_addStyle('\
    .updateIssueButton {\
	    color: white;\
	    border-radius: 6px 6px 6px 6px;\
	    -moz-border-radius: 6px 6px 6px 6px;\
	    -webkit-border-radius: 6px 6px 6px 6px;\
	    margin-top: 1px;\
	    margin-bottom: 1px;\
	    vertical-align: bottom;\
	    background: -webkit-gradient(linear, left top, left bottom, from(#A6C2ED), to(#5A7FB3));\
	    background: -moz-linear-gradient(top,  #A6C2ED,  #5A7FB3);\
	    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#A6C2ED", endColorstr="#5A7FB3");\
	    padding: 2px 20px 2px 20px;\
}');

function close() {
    $(STATUS_ID).val(CLOSED);
    $(ASSIGN_ID).val(null);
    $(DONE_RATIO_ID).val('100');
    $(ACTIVITY).val(DEVELOPMENT);
    $(NOTES).val(NOTE);
}

function resolve() {
    $(STATUS_ID).val(RESOLVED);
    $(ASSIGN_ID).val(COMPLETION_USER);
    $(DONE_RATIO_ID).val('100');
    $(ACTIVITY).val(DEVELOPMENT);
    $(NOTES).val(NOTE);
}

var closeButton = $('<button id="closeButton" class="updateIssueButton">').text('Close').click(close);
var resolveButton = $('<button id="resolveButton" class="updateIssueButton">').text('Resolve').click(resolve);
$(PREVIEW).before(closeButton).before(resolveButton);