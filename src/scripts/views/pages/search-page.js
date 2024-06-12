class SearchPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
          <section>
            <h1>Welcome to the Sub Page</h1>
          </section>
        `;
  }
}

customElements.define('search-page', SearchPage);
