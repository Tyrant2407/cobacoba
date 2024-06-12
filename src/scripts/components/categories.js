class CategoriesSection extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }

    _loadStyle() {
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', '../src/style/css/components/categories.css'); // Replace with the actual path to your CSS file
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
          <div class="category-item">
            <img src="../src/public/images/categorie1.jpg" class="category-icon" alt="Gadgets"> <!-- Replace with actual icon path -->
            <div class="category-name">Gadgets</div>
          </div>
          <div class="category-item">
            <img src="../src/public/images/categorie1.jpg" class="category-icon" alt="Furniture"> <!-- Replace with actual icon path -->
            <div class="category-name">Furniture</div>
          </div>
          <div class="category-item">
            <img src="../src/public/images/categorie1.jpg" class="category-icon" alt="Make Up"> <!-- Replace with actual icon path -->
            <div class="category-name">Make Up</div>
          </div>
          <div class="category-item">
            <img src="../src/public/images/categorie1.jpg" class="category-icon" alt="Sneaker"> <!-- Replace with actual icon path -->
            <div class="category-name">Sneaker</div>
          </div>
          <div class="category-item">
            <img src="../src/public/images/categorie1.jpg" class="category-icon" alt="Tools"> <!-- Replace with actual icon path -->
            <div class="category-name">Tools</div>
          </div>
          <div class="category-item">
            <img src="../src/public/images/categorie1.jpg" class="category-icon" alt="Baby"> <!-- Replace with actual icon path -->
            <div class="category-name">Baby</div>
          </div>
        </div>
      `;
    }
}

customElements.define('categories-section', CategoriesSection);
