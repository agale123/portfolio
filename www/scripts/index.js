// Create project cards
const container = document.querySelector(".container");
for (const card of CARDS) {
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  const description = card.desc ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis nostrud exercitation ullamco labori  nisi ut aliquip ex ea commodo consequat.";
  cardEl.innerHTML = `
    <div class="overlay">+</div>
    <div class="contents">
      <img src="images/${card.img}" />
      <div class="details">
        ${CLOSE}
        <h3>${card.title}</h3>
        <div class="desc">
          ${description}
        </div>
        <div class="links">
          ${card.link ? anchor(card.link, LINK) : ''}
          ${card.github ? anchor(card.github, GITHUB) : ''}
          ${card.twitter ? anchor(card.twitter, TWITTER) : ''}
        </div>
      </div>
    </div>
    `;
  // Handle close click events
  cardEl.querySelector("svg").addEventListener("click", (e) => {
    cardEl.classList.remove("expanded");
    cardEl.querySelector(".overlay").innerText = "+";
    e.stopPropagation();
  });
  // Handle expand click events
  cardEl.addEventListener("click", () => {
    // Close any other open cards
    document.querySelectorAll(".card").forEach((c) => {
      if (c !== cardEl) {
        c.classList.remove("expanded");
        c.querySelector(".overlay").innerText = "+";
      }
    });
    if (!cardEl.classList.contains("expanded")) {
      cardEl.classList.add("expanded");
      cardEl.querySelector(".overlay").innerText = "";
    }
  });
  container.appendChild(cardEl);
}
