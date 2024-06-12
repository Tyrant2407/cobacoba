class HeroSection extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }

    _loadStyle() {
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', '../src/style/css/components/hero.css');
        this._shadowRoot.appendChild(link);
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = '';
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._emptyContent();
        this._loadStyle();

        this._shadowRoot.innerHTML += `
        <div class="hero_header">
            <picture>
                <img class="hero_poster" src="../src/public/images/banner.jpg">
            </picture>
            <div class="hero_inner">
                <h1 class="hero_title">Mencari tempat makan enak dan murah?</h1>
                <p class="hero_tagline">
                Harga kaki lima, Rasa bintang lima!
                </p>
            </div>
        </div>

      `;
    }
}

customElements.define('hero-section', HeroSection);
