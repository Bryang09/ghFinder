$(document).ready(function() {
  $("#searchUser").on("keyup", function(e) {
    let userName = e.target.value;

    // MAKE REQUEST
    $.ajax({
      url: `https://api.github.com/users/${userName}`,
      data: {
        client_id: "e57043ddb744a9481779",
        client_secret: "af79a8edbef5bf03d98f58bf85dbbfe88fed3dfa"
      }
    });
  });
});
