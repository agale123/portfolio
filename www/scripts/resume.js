const links = document.querySelector(".links");
links.innerHTML =
  anchor("https://www.linkedin.com/in/alison-gale/", LINKEDIN) +
  anchor("https://github.com/agale123", GITHUB) +
  anchor("https://twitter.com/agale137", TWITTER) + 
  anchor("https://bsky.app/profile/agale.bsky.social", BLUESKY);

  document.querySelectorAll(".link").forEach(link => {
    link.innerHTML = LINK;
  });