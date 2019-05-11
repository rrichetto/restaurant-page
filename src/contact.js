function contactLoad() {
  const contentEl = document.querySelector('#content');

  const markup = `
    <div class="container">
      <h1>Best Restaurant</h1>
      <ul class="navigation">
        <li class="nav-item"><a class="nav-link home" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link contact" href="#">Contact</a></li>
        <li class="nav-item"><a class="nav-link menu" href="#">Menu</a></li>
      </ul>
      <p>Email: thisemailabc@gmail.com</p>
      <p>Phone: (555) 555-5555</p>
      <img src="https://source.unsplash.com/800x500?food" alt="Food">
    </div>
  `;

  contentEl.innerHTML = markup;
}

export { contactLoad };