class HomePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
        <section>
            <hero-section></hero-section>
            <categories-section></categories-section>
        </section>
      `;
  }
}

customElements.define('home-page', HomePage);
