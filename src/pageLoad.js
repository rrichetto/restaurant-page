function pageLoad() {
  const contentEl = document.querySelector('#content');

  const markup = `
    <div class="container">
      <h1>Best Restaurant</h1>
      <ul class="navigation">
        <li class="nav-item"><a class="nav-link home" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link contact" href="#">Contact</a></li>
        <li class="nav-item"><a class="nav-link menu" href="#">Menu</a></li>
      </ul>
      <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corrupti dolore saepe omnis officia accusantium magni iure esse dolorum praesentium?</p>
      <img src="https://source.unsplash.com/800x500?food" alt="Food">
    </div>
  `;

  contentEl.innerHTML = markup;
}

export { pageLoad };