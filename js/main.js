$(document).ready(function() {
  $("#searchUser").on("keyup", function(e) {
    let userName = e.target.value;

    // MAKE REQUEST
    $.ajax({
      url: `https://api.github.com/users/${userName}`,
      data: {
        client_id: "-",
        client_secret: "-"
      }
    });
  });
});
