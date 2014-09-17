$(document).ready(function () {
  'use strict';

  // add github PR create link
  if (document.body.classList.contains("controller-issues") &&
      document.body.classList.contains("action-show")) {
    $('<a id=open_pr href=#>PR</a>')
      .prependTo($('.issue.details .author'))
      .on('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        var loc = document.location
        var issue_number = loc.pathname.match(/\d+/)[0]
        var issue_title = $('#content h2').text().trim() + ' ' + $('.issue .subject h3').text().trim()
        var issue_url = [loc.protocol, '//', loc.host, loc.pathname].join('')
        var queryString = 'create_pr=true&pr_title=' + encodeURIComponent(issue_title) + '&pr_body=' + encodeURIComponent(issue_url)
        var url = [
          'https://github.com/cyanna/edvera/compare/master...rm',
          issue_number,
          '?',
          queryString
        ].join('')
        var github = window.open(url, '_blank')
      })

    // add a button to set finishing task attributes
    $('<button type=button id=finish_task_attributes>Finish task</button>')
      .appendTo($('#attributes .splitcontentleft').first())
      .on('click', function () {
        $('#issue_status_id').val(27); // Code Review
        $('#issue_assigned_to_id').val(149) // Astea
        $('#issue_done_ratio').val(90); // 90%
      });
  }

  // make comments private by default
  $('label[for=issue_private_notes]').click();

  // set logged time activity by default
  $('#time_entry_activity_id').val(9); // Development activity
});
