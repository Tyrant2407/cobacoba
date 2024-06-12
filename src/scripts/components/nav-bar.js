class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._clearContent();
    this._loadStyle();

    this.shadowRoot.innerHTML += `
      <nav class="navbar navbar-expand-lg navbar-light navbar-store fixed-top navbar-fixed-top" data-aos="fade-down">
        <div class="container">
          <a href="/index.html" class="navbar-brand">
            <img src="../src/public/images/logo.png" alt="Logo">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <search-bar></search-bar>
              </li>
              <li class="nav-item active">
                <a href="#" data-page="home" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a href="#" data-page="searchpage" class="nav-link">Categories</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Rewards</a>
              </li>
              <li class="nav-item">
                <a href="/register.html" class="nav-link">Sign Up</a>
              </li>
              <li class="nav-item">
                <a href="/login.html" class="btn btn-success nav-link">Sign In</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;

    this.shadowRoot.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', this._navigate.bind(this));
    });
  }

  _loadStyle() {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', '../src/style/css/components/main.css');
    this.shadowRoot.appendChild(link);
  }

  _clearContent() {
    this.shadowRoot.innerHTML = '';
  }

  _navigate(event) {
    event.preventDefault();
    const page = event.target.getAttribute('data-page');
    window.dispatchEvent(new CustomEvent('navigate', { detail: { page } }));
  }
}

customElements.define('nav-bar', NavBar);
