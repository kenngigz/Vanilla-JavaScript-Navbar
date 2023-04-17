const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //console.log(links.classList)
  console.log(links.classList.contains("show-links"));
  /////////// THIS ///////
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
  /////////////////OR /////////////
  //alternative using toggle
  //   links.classList.toggle("show-links");
});
