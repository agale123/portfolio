// Create project cards
const container = document.querySelector(".container");
for (const card of CARDS) {
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardEl.innerHTML = `
    <div class="overlay">+</div>
    <div class="contents">
      <img src="images/${card.img}" />
      <div class="details">
      <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 96 960 960" width="36"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" fill="currentColor"/></svg>
        <h3>${card.title}</h3>
        <div class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </div>
        <div class="links">
            <img src="images/github.png" />
            <img src="images/twitter.png" />
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
        c.querySelector(".overlay").innerText = "";
      }
    });
    if (!cardEl.classList.contains("expanded")) {
      cardEl.classList.add("expanded");
      cardEl.querySelector(".overlay").innerText = "";
    }
  });
  container.appendChild(cardEl);
}
