class HomePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
          <carousel-section></carousel-section>
          <categories-section></categories-section>
      `;
  }
}

customElements.define('home-page', HomePage);
