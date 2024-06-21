class SearchPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
          <style>
            .breadcrumb {
                background-color: #eceff1;
                padding: 15px;
                border-radius: 5px;
                display: flex;
                align-items: center;
                gap: 5px;
                margin-right: 12%;
                margin-left: 12%;
            }

            .breadcrumb-link {
                color: #007bff;
                text-decoration: none;
            }

            .breadcrumb-link:hover {
                text-decoration: underline;
            }

            .breadcrumb-current {
                color: #6c757d;
            }
            
            .header-text {
              color: #29A867;
            }

            .content {
              max-width: 75%;
              margin: 0 auto;
              padding: 20px;
            }

            .content__heading {
              font-size: 24px;
              margin-bottom: 20px;
            }
            
            #query {
              width: 100%;
              padding: 15px;
              margin-bottom: 20px;
              border: 1px solid #ccc;
              border-radius: 15px;
              
              background-color: #D9D9D9;
            }

            .content__search{
              max-width: 75%;
              margin: 0 auto;
              padding: 20px;
              text-align: center;
            }

            ul {
              list-style-type: none; /* Remove bullets */
              padding: 0; /* Remove default padding */
              margin-top: 20px;
            }

            li {
              margin-top: 40px;
            }
          </style>
          
          <header>
            <nav-bar></nav-bar>
          </header>
          <section>
            <div class="breadcrumb">
                <a href="#" class="breadcrumb-link">Home</a> / 
                <span class="breadcrumb-current">Search Page</span>
            </div>
            
            <div class="content">
              <div class="header-text">
                <h1>Temukan barang yang anda inginkan disini</h1>
              </div>
              <input id="query" type="text" placeholder="Cari nama barang, nama toko disini">
              </input>
              <categories-section></categories-section>
              <div class="content__search">
                <ul>
                  <li><img src="../src/public/images/bag.png" alt="Logo"></li>
                  <li><img src="../src/public/images/DANARI.png" alt="Logo"></li>
                  <li><h3><i>“Kami pasti menemukan apa yang anda inginkan”</i></h3></li>
                </ul>
              </div>
            </div>
          </section>
        `;
  }
}

customElements.define('search-page', SearchPage);
