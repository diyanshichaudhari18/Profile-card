function customTag(tagName, fn) {
  document.createElement(tagName);
  //find all the tags occurrences (instances) in the document
  var tagInstances = document.getElementsByTagName(tagName);
  //for each occurrence run the associated function
  for (var i = 0; i < tagInstances.length; i++) {
    fn(tagInstances[i]);
  }
}

function proFileCard(element) {
  //code for rendering the element goes here
  element.innerHTML =
    '<div class="card"><div class="background"><img class="background-img" src="" alt=""></div><div class="content">' +
    '<div class="profile"><img class="profile-img" src="" alt=""></div><div class="header"><h2 class="name">Lorem</h2><p class=\'location\'></p>' +
    '</div><div class="labels"><div class="label"><p>Phone:</p><h2 class="phone"></h2></div><div class="label"><p>Cell:</p><h2 class="cell"></h2></div>' +
    '<div class="label"><p>Email:</p><h2 class="email"></h2></div></div><div class="info"><p class="description"></p></div></div></div>';
}

customTag("profile-card", proFileCard);

const ProfileCard = (() => {
  const profile = document.querySelector(".profile-img");
  const name = document.querySelector(".name");
  const location = document.querySelector(".location");
  const description = document.querySelector(".description");
  const phone = document.querySelector(".phone");
  const cell = document.querySelector(".cell");
  const email = document.querySelector(".email");

  return {
    setData: function (data) {
      let fullname = `${data.name.first} ${data.name.last}`;
      let origin = `${data.location.city}, ${data.nat}`;

      profile.src = data.picture.large;
      name.textContent = fullname;
      location.textContent = origin;
      description.textContent =
        `Hello, i'm ${fullname} from ${origin}. To learn more about me, my username is` +
        `${data.login.username}. Feel free to email me at ${data.email} !`;
      phone.textContent = data.phone;
      cell.textContent = data.cell;
      email.textContent = data.email;
    },
  };
})();

fetch("https://randomuser.me/api/?results=1")
  .then((resp) => resp.json())
  .then((data) => {
    ProfileCard.setData(data.results[0]);
  });
