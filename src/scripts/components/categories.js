/* eslint-disable no-underscore-dangle */
class CategoriesSection extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({
      mode: 'open',
    });
  }

  _loadStyle() {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', '../src/style/css/components/categories.css'); // Ganti dengan path yang benar ke file CSS Anda
    this._shadowRoot.appendChild(link);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._loadStyle();

    this._shadowRoot.innerHTML += `
        <div class="categories">
          <h2>Trend Categories</h2>
          <a data-page="gadgets" href="#" class="category-item">
            <img src="../src/public/images/categorie1.jpg" class="category-icon" alt="Gadgets"> 
            <div class="category-name">Gadgets</div>
          </a>
          <a data-page="furniture" href="#" class="category-item">
            <img src="../src/public/images/categorie2.jpg" class="category-icon" alt="Furniture"> 
            <div class="category-name">Furniture</div>
          </a>
          <a data-page="makeup" href="#" class="category-item">
            <img src="../src/public/images/categorie3.jpg" class="category-icon" alt="Make Up"> 
            <div class="category-name">Make Up</div>
          </a>
          <a data-page="sneakers" href="#" class="category-item">
            <img src="../src/public/images/categorie4.jpg" class="category-icon" alt="Sneaker"> 
            <div class="category-name">Sneaker</div>
          </a>
          <a data-page="tools" href="#" class="category-item">
            <img src="../src/public/images/categorie5.jpg" class="category-icon" alt="Tools"> 
            <div class="category-name">Tools</div>
          </a>
          <a data-page="baby" href="#" class="category-item">
            <img src="../src/public/images/categorie6.jpg" class="category-icon" alt="Baby"> 
            <div class="category-name">Baby</div>
          </a>
        </div>
      `;
    this._shadowRoot.querySelectorAll('.category-item').forEach((link) => {
      link.addEventListener('click', this._navigateCategories.bind(this));
    });
  }

  // eslint-disable-next-line class-methods-use-this
  _navigateCategories(event) {
    event.preventDefault();
    const page = event.currentTarget.getAttribute('data-page');
    window.dispatchEvent(new CustomEvent('navigateCategories', { detail: { page } }));
  }
}

customElements.define('categories-section', CategoriesSection);
