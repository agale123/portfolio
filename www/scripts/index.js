// Create project cards
const container = document.querySelector(".container");
for (const card of CARDS) {
  const cardEl = document.createElement("div");
  cardEl.style.display = "none";
  cardEl.classList.add("card");
  cardEl.innerHTML = `
    <div class="overlay">${PLUS}</div>
    <div class="contents">
      <img src="images/${card.img}" />
      <div class="details">
        ${CLOSE}
        <h3>${card.title}</h3>
        <div class="desc">
          ${card.desc}
        </div>
        <div class="links">
          ${card.link ? anchor(card.link, LINK) : ""}
          ${card.github ? anchor(card.github, GITHUB) : ""}
          ${card.twitter ? anchor(card.twitter, TWITTER) : ""}
        </div>
      </div>
    </div>
    `;

  // Hide cards till the images load
  cardEl.querySelector("img").onload = () => {
    cardEl.style.display = "block";
  };

  // Handle close click events
  cardEl.querySelector(".details svg").addEventListener("click", (e) => {
    cardEl.classList.remove("expanded");
    e.stopPropagation();
  });

  // Handle expand click events
  cardEl.addEventListener("click", () => {
    const otherCards = [...document.querySelectorAll(".card").values()].filter(
      (c) => c !== cardEl
    );

    // Close any other open cards
    const animating = new Promise((resolve, reject) => {
      const open = otherCards.find((c) => {
        if (c.classList.contains("expanded")) {
          c.addEventListener("transitionend", resolve, { once: true });
          c.classList.remove("expanded");
          return true;
        }
      });
      if (!open) {
        resolve();
      }
    });

    animating.then(() => {
      // Get other cards on the same row
      const elsOnRow = [];
      const cardTop = cardEl.getBoundingClientRect().top;
      otherCards.forEach((c) => {
        if (c.getBoundingClientRect().top === cardTop) {
          elsOnRow.push(c);
        }
      });

      // Move the card to the beginning of the row
      const parent = cardEl.parentElement;
      const allCards = [...parent.children];
      const cardIndex = allCards.indexOf(cardEl);
      const otherIndices = elsOnRow.map((el) => allCards.indexOf(el));
      if (cardIndex > Math.min(...otherIndices)) {
        parent.removeChild(cardEl);
        parent.insertBefore(cardEl, elsOnRow[0]);
      }

      // Expand the card
      // Use setTimeout so the card gets rendered collapsed before animating open.
      setTimeout(() => {
        if (!cardEl.classList.contains("expanded")) {
          cardEl.classList.add("expanded");
        }
      });
    });
  });
  container.appendChild(cardEl);
}
