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
    }).done(user => {
      $.ajax({
        url: `https://api.github.com/users/${userName}/repos`,
        data: {
          client_id: "e57043ddb744a9481779",
          client_secret: "af79a8edbef5bf03d98f58bf85dbbfe88fed3dfa",
          sort: "created: asc",
          per_page: 5
        }
      }).done(repos => {
        $.each(repos, (index, repo) => {
          $("#repos").append(`
            <div class="card m-3 card-header">
              <div class="row p-1">
                <div class="col-md-7" >
                  <strong>${repo.name}</strong>: ${repo.description}
                </div>
                <div class="col-md-3">
                <span class="badge badge-info">Forks: ${repo.forks_count}</span>
                <span class="badge badge-primary">Watchers: ${
                  repo.watchers_count
                }</span>
                <span class="badge badge-success">Stars: ${
                  repo.stargazers_count
                }</span>
                </div>
                <div class="col-md-2">
                  <a href="${
                    repo.html_url
                  }" target="_blank" class="btn btn-dark" >Repo Page</a>
                </div>
              </div>
            </div>
          `);
        });
      });
      $("#profile").html(`
        
        <div class="card panel-default">
          <div class="card-header">
            <h3 class="card-title">${user.name}</h3>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-3">
                <img class="thumbnail avatar" src="${user.avatar_url}"/>
                <a class="btn btn-primary btn-block mt-3" href="${
                  user.html_url
                }" target="_blank">View Profile</a>
              </div>
              <div class="col-md-9">
                <span class="badge badge-info">Public Repos: ${
                  user.public_repos
                }</span>
                <span class="badge badge-primary">Public Gists: ${
                  user.public_gists
                }</span>
                <span class="badge badge-success">Followers: ${
                  user.followers
                }</span>
                <span class="badge badge-warning">Following: ${
                  user.following
                }</span>
                <br></br>
                <ul class="list-group">
                  <li class="list-group-item">Company: ${user.company}</li>
                  <li class="list-group-item">Website: ${user.blog}</li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Member Since: ${
                    user.created_at
                  }</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h3 class="page-header mt-5">Latest Repos</h3>
        <hr>
        <div id="repos"></div>
      `);
    });
  });
});
