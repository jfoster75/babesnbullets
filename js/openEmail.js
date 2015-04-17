$(document).ready(function() {
  contactForm.onsubmit = openEmail;
});

var openEmail = function() {
  var subject = 'Babes-n-Bullets';
  var body = $('#message').val() + '%0D%0A%0D%0A' + $('#name').val() + '%0D%0A' + $('#phone').val();

  window.open('mailto:test@example.com?subject=' + subject + '&body=' + body);
}