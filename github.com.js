$(document).ready(function () {
  'use strict';

  // create PR
  if (parseParam('create_pr')) {
    $('.compare-pr-placeholder .js-details-target').click()
    $('#pull_request_title').val(parseParam('pr_title'))
    $('#pull_request_body').val(parseParam('pr_body'))
  }

  function parseParam(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
})
