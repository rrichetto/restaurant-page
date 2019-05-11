function menuLoad() {
  const contentEl = document.querySelector('#content');

  const markup = `
    <div class="container">
      <h1>Best Restaurant</h1>
      <ul class="navigation">
        <li class="nav-item"><a class="nav-link home" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link contact" href="#">Contact</a></li>
        <li class="nav-item"><a class="nav-link menu" href="#">Menu</a></li>
      </ul>
      <ul>
        <li>Pizza</li>
        <li>Pasta</li>
        <li>Lasagna</li>
        <li>Spaghetti</li>
        <li>Salad</li>
      </ul>
      <img src="https://source.unsplash.com/800x500?food" alt="Food">
    </div>
  `;

  contentEl.innerHTML = markup;
}

export { menuLoad };