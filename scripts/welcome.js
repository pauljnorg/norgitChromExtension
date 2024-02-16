
function navBar(){
  // Create the nav element with its classes
  var navbar = document.createElement("nav");
  navbar.className = "navbar navbar-default";

  // Create the container fluid
  var containerFluid = document.createElement("div");
  containerFluid.className = "container-fluid";

  // Create the navbar header and its contents
  var navbarHeader = document.createElement("div");
  navbarHeader.className = "navbar-header";
  var navbarBrand = document.createElement("a");
  navbarBrand.className = "navbar-brand";
  navbarBrand.href = "https://norg.it";
  navbarBrand.textContent = "Norg.IT";
  navbarHeader.appendChild(navbarBrand);

  // Append the navbar header to the container fluid
  containerFluid.appendChild(navbarHeader);

  // Create the navbar-nav list
  var navbarNav = document.createElement("ul");
  navbarNav.className = "nav navbar-nav";

  // Create the Schedule list item
  var liSchedule = document.createElement("li");
  liSchedule.id = "sched";
  var aSchedule = document.createElement("a");
  aSchedule.href = "/sos.html";
  aSchedule.innerHTML = '<span class="glyphicon glyphicon-time"></span> Schedule';
  liSchedule.appendChild(aSchedule);

  // Create the Parallax list item
  var liParallax = document.createElement("li");
  var aParallax = document.createElement("a");
  aParallax.href = "/parallax/";
  aParallax.innerHTML = '<span class="glyphicon glyphicon-cloud"></span> Parallax';
  liParallax.appendChild(aParallax);

  // Create the AboutMe list item
  var liAbout = document.createElement("li");
  var aAbout = document.createElement("a");
  aAbout.href = "/about/";
  aAbout.innerHTML = '<span class="glyphicon glyphicon-education"></span> About';
  liAbout.appendChild(aAbout);

  // Append items to the navbar-nav list
  navbarNav.appendChild(liSchedule);
  navbarNav.appendChild(liParallax);
  navbarNav.appendChild(liAbout);

  // Append the navbar-nav to the container fluid
  containerFluid.appendChild(navbarNav);

  // Create the social media list
  var socialMediaList = document.createElement("ul");
  socialMediaList.className = "nav navbar-nav navbar-right social";

  // Create the Facebook list item
  var liFacebook = document.createElement("li");
  var aFacebook = document.createElement("a");
  aFacebook.href = "https://www.facebook.com/pnorg/";
  aFacebook.setAttribute('aria-label', "Visit Facebook page"); 
  aFacebook.innerHTML = '<i class="fab fa-lg fa-facebook"></i>';
  liFacebook.appendChild(aFacebook);

  // Create the LinkedIn list item
  var liLinkedIn = document.createElement("li");
  var aLinkedIn = document.createElement("a");
  aLinkedIn.href = "https://www.linkedin.com/in/paulnorg/";
  aLinkedIn.setAttribute('aria-label', "Visit Linkedin page"); 
  aLinkedIn.innerHTML = '<i class="fab fa-lg fa-linkedin"></i>';
  liLinkedIn.appendChild(aLinkedIn);

  // Create the GitHub list item
  var liGitHub = document.createElement("li");
  var aGitHub = document.createElement("a");
  aGitHub.href = "https://github.com/pauljnorg/";
  aGitHub.setAttribute('aria-label', "Visit GitHub page"); 
  aGitHub.innerHTML = '<i class="fab fa-lg fa-github"></i>';
  liGitHub.appendChild(aGitHub);

  // Create the Reddit list item
  var liReddit = document.createElement("li");
  var aReddit = document.createElement("a");
  aReddit.href = "https://www.reddit.com/user/norgp/";
  aReddit.setAttribute('aria-label', "Visit Reddit page"); 
  aReddit.innerHTML = '<i class="fab fa-lg fa-reddit"></i>';
  liReddit.appendChild(aReddit);

  // Create the Stack-Overflow list item
  var liStackOverflow = document.createElement("li");
  var aStackOverflow = document.createElement("a");
  aStackOverflow.href = "https://stackoverflow.com/users/17520071/paul/";
  aStackOverflow.setAttribute('aria-label', "Visit StackOverflow page"); 
  aStackOverflow.innerHTML = '<i class="fab fa-lg fa-stack-overflow"></i>';
  liStackOverflow.appendChild(aStackOverflow);

  // Create the Blogger list item
  var liBlogger = document.createElement("li");
  var aBlogger = document.createElement("a");
  aBlogger.href = "https://blog.paulnorg.com/";
  aBlogger.setAttribute('aria-label', "Visit my blog page"); 
  aBlogger.innerHTML = '<i class="fab fa-lg fa-blogger"></i>';
  liBlogger.appendChild(aBlogger);

  // Create the Apple list item
  var liApple = document.createElement("li");
  var aApple = document.createElement("a");
  aApple.href = "https://discussions.apple.com/profile/paulnorg/participation/";
  aApple.setAttribute('aria-label', "Visit my Apple discussion forum page"); 
  aApple.innerHTML = '<i class="fab fa-lg fa-apple"></i>';
  liApple.appendChild(aApple);

  // Create the Youtube list item
  var liYoutube = document.createElement("li");
  var aYoutube = document.createElement("a");
  aYoutube.href = "https://www.youtube.com/@tranquility3891/";
  aYoutube.setAttribute('aria-label', "Visit YouTube page"); 
  aYoutube.innerHTML = '<i class="fab fa-lg fa-youtube"></i>';
  liYoutube.appendChild(aYoutube);
  //fa-youtube-play

  // Create the Youtube 2nd list item
  var liYoutube2 = document.createElement("li");
  var aYoutube2 = document.createElement("a");
  aYoutube2.href = "https://www.youtube.com/@PaulNorg/";
  aYoutube2.setAttribute('aria-label', "Visit YouTube page"); 
  aYoutube2.innerHTML = '<i class="fab fa-lg fa-youtube"></i>';
  liYoutube2.appendChild(aYoutube2);
  //fa-youtube-play

  //discordapp.com/users/norg_
   // Create the Discord list item
   var liDiscord = document.createElement("li");
   var aDiscord = document.createElement("a");
   aDiscord.href = "https://discordapp.com/users/norg_/";
   aDiscord.setAttribute('aria-label', "Visit Discord page"); 
   aDiscord.innerHTML = '<i class="fab fa-lg fa-discord"></i>';
   liDiscord.appendChild(aDiscord);

  // Append items to the social media list
  socialMediaList.appendChild(liFacebook);
  socialMediaList.appendChild(liLinkedIn);
  socialMediaList.appendChild(liGitHub);
  socialMediaList.appendChild(liReddit);
  socialMediaList.appendChild(liStackOverflow);  
  socialMediaList.appendChild(liBlogger);
  socialMediaList.appendChild(liApple);
  socialMediaList.appendChild(liYoutube);
  socialMediaList.appendChild(liYoutube2);
  socialMediaList.appendChild(liDiscord);

  // Append the social media list to the container fluid
  containerFluid.appendChild(socialMediaList);

  // Append the container fluid to the navbar
  navbar.appendChild(containerFluid);

  // Append the navbar to the body or specific element
  //document.body.appendChild(navbar);

  return navbar;

}

function documentFirstLoad() {
  var navbar = navBar(); // Use the element returned by navBar()

  var body = document.body;
  if (body.firstChild) {
    body.insertBefore(navbar, body.firstChild);
  } else {
    body.appendChild(navbar);
  }
}

document.addEventListener("DOMContentLoaded", documentFirstLoad);
