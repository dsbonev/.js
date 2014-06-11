$(document).ready(function () {
  // make comments private by default
  $('label[for=issue_private_notes]').click();

  // set logged time activity by default
  $('#time_entry_activity_id').val(9); // Development activity

  // add a button to set finishing task attributes
  $('<button type=button id=finish_task_attributes>Finish task</button>')
    .appendTo($('#attributes .splitcontentleft').first())
    .on('click', function () {
      $('#issue_status_id').val(9); // QA/Deployment
      $('#issue_assigned_to_id').val(31) // Daniel
      $('#issue_done_ratio').val(90); // 90%
    });
});
