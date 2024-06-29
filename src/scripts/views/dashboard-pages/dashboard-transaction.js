/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable no-new */
/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
class DashboardTransaction extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
              <head>
                  <meta charset="utf-8" />
                  <link rel="stylesheet" href="../src/style/css/components/main.css" />
                  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
              </head>
              <div class="page-dashboard" style="margin-top: -100px">
                  <div class="d-flex" id="wrapper" data-aos="fade-right">
                      <!-- Sidebar -->
                      <div class="border-right" id="sidebar-wrapper">
                          <div class="sidebar-heading text-center">
                              <img
                                  src="/images/dashboard-store-logo.svg"
                                  class="my-4"
                                  alt="logo dashboard"
                              />
                          </div>
                          <div class="list-group list-group-flush">
                              <a
                                  href="#"
                                  data-page="dashboard"
                                  class="list-group-item list-group-item-action"
                              >Dashboard</a>
                              <a
                                  href="#"
                                  data-page="dashboard-products"
                                  class="list-group-item list-group-item-action"
                              >My Products</a>
                              <a
                                  href="#"
                                  data-page="dashboard-transaction"
                                  class="list-group-item list-group-item-action active"
                              >Transactions</a>
                              <a
                                  href="#"
                                  data-page="dashboard-settings"
                                  class="list-group-item list-group-item-action"
                              >Store Settings</a>
                              <a
                                  href="#"
                                  data-page="dashboard-account"
                                  class="list-group-item list-group-item-action"
                              >My Account</a>
                              <a
                                  href="#"
                                  data-page="home"
                                  class="list-group-item list-group-item-action"
                              >Sign Out</a>
                          </div>
                      </div>
  
                      <!-- Page Content -->
                      <div id="page-content-wrapper">
                          <nav
                              class="navbar navbar-expand-lg navbar-light navbar-store fixed-top"
                              data-aos="fade-down"
                          >
                              <div class="container-fluid">
                                  <button
                                      class="btn btn-secondary d-md-none mr-auto mr-2"
                                      id="menu-toggle"
                                  >
                                      &laquo; Menu
                                  </button>
                                  <button
                                      class="navbar-toggler"
                                      type="button"
                                      data-toggle="collapse"
                                      data-target="#navbarSupportedContent"
                                      aria-controls="navbarSupportedContent"
                                      aria-expanded="false"
                                      aria-label="Toggle navigation"
                                  >
                                      <span class="navbar-toggler-icon"></span>
                                  </button>
                                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                      <!-- Desktop Menu -->
                                      <ul class="navbar-nav d-none d-lg-flex ml-auto">
                                          <li class="nav-item dropdown">
                                              <a
                                                  href="#"
                                                  class="nav-link"
                                                  id="navbarDropdown"
                                                  role="button"
                                                  data-toggle="dropdown"
                                              >
                                                  <img
                                                      src="/images/icon-user.png"
                                                      alt="profile"
                                                      class="rounded-circle mr-2 profile-picture"
                                                  />
                                                  Hi, Danari
                                              </a>
                                              <div class="dropdown-menu">
                                                  <a href="/dashboard.html" class="dropdown-item"
                                                  >Dashboard</a>
                                                  <a href="/dashboard-account.html" class="dropdown-item"
                                                  >Settings</a>
                                                  <div class="dropdown-divider"></div>
                                                  <a href="/" class="dropdown-item">Logout</a>
                                              </div>
                                          </li>
                                          <li class="nav-item">
                                              <a href="#" class="nav-link d-inline-block mt-2">
                                                  <img
                                                      src="/images/icon-cart-filled.svg"
                                                      alt="icon cart filled"
                                                  />
                                                  <div class="card-badge">3</div>
                                              </a>
                                          </li>
                                      </ul>
  
                                      <ul class="navbar-nav d-block d-lg-none">
                                          <li class="nav-item">
                                              <a href="#" class="nav-link">Hi, Danari</a>
                                          </li>
                                          <li class="nav-item">
                                              <a href="#" class="nav-link d-inline-block">Cart</a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </nav>
  
                          <!-- Section Content -->
                          <div
                              class="section-content section-dashboard-home"
                              data-aos="fade-up"
                          >
                              <div class="container-fluid">
                                  <div class="dashboard-heading">
                                      <h2 class="dashboard-title">Transactions</h2>
                                      <p class="dashboard-subtitle">
                                          Big result start from the small one
                                      </p>
                                  </div>
                                  <div class="dashboard-content">
                                      <div class="row">
                                          <div class="col-12 mt-2">
                                              <ul class="nav nav-pills mb-3" id="pills-tab">
                                                  <li class="nav-item">
                                                      <a
                                                          class="nav-link active"
                                                          id="pills-sell-tab"
                                                          data-bs-toggle="pill"
                                                          href="#pills-sell"
                                                          role="tab"
                                                          aria-controls="pills-sell"
                                                          aria-selected="true"
                                                      >Sell Product</a>
                                                  </li>
                                                  <li class="nav-item">
                                                      <a
                                                          class="nav-link"
                                                          id="pills-buy-tab"
                                                          data-bs-toggle="pill"
                                                          href="#pills-buy"
                                                          role="tab"
                                                          aria-controls="pills-buy"
                                                          aria-selected="false"
                                                      >Buy Product</a>
                                                  </li>
                                              </ul>
                                              <div class="tab-content" id="pills-tabContent">
                                                  <div
                                                      class="tab-pane fade show active"
                                                      id="pills-sell"
                                                      role="tabpanel"
                                                      aria-labelledby="pills-sell-tab"
                                                  >
                                                      <a
                                                          href="/dashboard-transactions-details.html"
                                                          class="card card-list d-block"
                                                          data-page="detail-transaction"
                                                      >
                                                          <div class="card-body">
                                                              <div class="row">
                                                                  <div class="col-md-1">
                                                                      <img
                                                                          src="/images/dashboard-icon-product-1.png"
                                                                          alt="icon product"
                                                                      />
                                                                  </div>
                                                                  <div class="col-md-4">Shirup Marzzan</div>
                                                                  <div class="col-md-3">Angga Risky</div>
                                                                  <div class="col-md-3">12 Januari, 2020</div>
                                                                  <div class="col-md-1 d-none d-md-block">
                                                                      <img
                                                                          src="/images/dashboard-arrow-right.svg"
                                                                          alt="arrow"
                                                                      />
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </a>
                                                      <a
                                                          href="/dashboard-transactions-details.html"
                                                          class="card card-list d-block"
                                                      >
                                                          <div class="card-body">
                                                              <div class="row">
                                                                  <div class="col-md-1">
                                                                      <img
                                                                          src="/images/dashboard-icon-product-1.png"
                                                                          alt="icon product"
                                                                      />
                                                                  </div>
                                                                  <div class="col-md-4">LeBrone X</div>
                                                                  <div class="col-md-3">Masayoshi</div>
                                                                  <div class="col-md-3">11 January, 2020</div>
                                                                  <div class="col-md-1 d-none d-md-block">
                                                                      <img
                                                                          src="/images/dashboard-arrow-right.svg"
                                                                          alt="arrow"
                                                                      />
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </a>
                                                      <a
                                                          href="/dashboard-transactions-details.html"
                                                          class="card card-list d-block"
                                                      >
                                                          <div class="card-body">
                                                              <div class="row">
                                                                  <div class="col-md-1">
                                                                      <img
                                                                          src="/images/dashboard-icon-product-1.png"
                                                                          alt="icon product"
                                                                      />
                                                                  </div>
                                                                  <div class="col-md-4">Soffa Lembutte</div>
                                                                  <div class="col-md-3">Shayna</div>
                                                                  <div class="col-md-3">11 January, 2020</div>
                                                                  <div class="col-md-1 d-none d-md-block">
                                                                      <img
                                                                          src="/images/dashboard-arrow-right.svg"
                                                                          alt="arrow"
                                                                      />
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </a>
                                                  </div>
                                                  <div
                                                      class="tab-pane fade"
                                                      id="pills-buy"
                                                      role="tabpanel"
                                                      aria-labelledby="pills-buy-tab"
                                                  >
                                                      <a
                                                          href="/dashboard-transactions-details.html"
                                                          class="card card-list d-block"
                                                      >
                                                          <div class="card-body">
                                                              <div class="row">
                                                                  <div class="col-md-1">
                                                                      <img
                                                                          src="/images/dashboard-icon-product-1.png"
                                                                          alt="icon product"
                                                                      />
                                                                  </div>
                                                                  <div class="col-md-4">Shirup Marzzan</div>
                                                                  <div class="col-md-3">Angga Risky</div>
                                                                  <div class="col-md-3">12 Januari, 2020</div>
                                                                  <div class="col-md-1 d-none d-md-block">
                                                                      <img
                                                                          src="/images/dashboard-arrow-right.svg"
                                                                          alt="arrow"
                                                                      />
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </a>
                                                      <a
                                                          href="/dashboard-transactions-details.html"
                                                          class="card card-list d-block"
                                                      >
                                                          <div class="card-body">
                                                              <div class="row">
                                                                  <div class="col-md-1">
                                                                      <img
                                                                          src="/images/dashboard-icon-product-1.png"
                                                                          alt="icon product"
                                                                      />
                                                                  </div>
                                                                  <div class="col-md-4">LeBrone X</div>
                                                                  <div class="col-md-3">Masayoshi</div>
                                                                  <div class="col-md-3">11 January, 2020</div>
                                                                  <div class="col-md-1 d-none d-md-block">
                                                                      <img
                                                                          src="/images/dashboard-arrow-right.svg"
                                                                          alt="arrow"
                                                                      />
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </a>
                                                      <a
                                                          href="/dashboard-transactions-details.html"
                                                          class="card card-list d-block"
                                                      >
                                                          <div class="card-body">
                                                              <div class="row">
                                                                  <div class="col-md-1">
                                                                      <img
                                                                          src="/images/dashboard-icon-product-1.png"
                                                                          alt="icon product"
                                                                      />
                                                                  </div>
                                                                  <div class="col-md-4">Soffa Lembutte</div>
                                                                  <div class="col-md-3">Shayna</div>
                                                                  <div class="col-md-3">11 January, 2020</div>
                                                                  <div class="col-md-1 d-none d-md-block">
                                                                      <img
                                                                          src="/images/dashboard-arrow-right.svg"
                                                                          alt="arrow"
                                                                      />
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          `;
          
    this.shadowRoot.getElementById('menu-toggle').addEventListener('click', this._toggleSidebar.bind(this));
    this.shadowRoot.querySelector('.navbar-toggler').addEventListener('click', this._toggleNavbar.bind(this));
    this.shadowRoot.querySelectorAll('.list-group-item').forEach((link) => {
      link.addEventListener('click', this._handleClick.bind(this));
    });
    this.shadowRoot.querySelectorAll('.card-list').forEach((link) => {
      link.addEventListener('click', this._handleCardClick.bind(this));
    });
    this.shadowRoot.querySelectorAll('.nav-link').forEach((tab) => {
      tab.addEventListener('click', this._handleTabClick.bind(this));
    });
  }
  
  _toggleSidebar() {
    const wrapper = this.shadowRoot.getElementById('wrapper');
    wrapper.classList.toggle('toggled');
  }    
  
  _toggleNavbar() {
    const navbarResponsive = this.shadowRoot.getElementById('navbarSupportedContent');
    navbarResponsive.classList.toggle('show');
  }
  
  _handleClick(event) {
    const target = event.target.closest('.list-group-item');
    if (target) {
      event.preventDefault();
      const page = target.getAttribute('data-page');
      if (page) {
        window.dispatchEvent(new CustomEvent('navigateNav', {
          detail: {
            page,
          },
        }));
      }
    }
  }
  
  _handleCardClick(event) {
    const target = event.currentTarget;
    event.preventDefault();
    const page = target.getAttribute('data-page');
    if (page) {
      window.dispatchEvent(new CustomEvent('navigateNav', {
        detail: {
          page,
        },
      }));
    }
  }
  
  _handleTabClick(event) {
    event.preventDefault();
    const target = event.target.closest('.nav-link');
    const tabId = target.getAttribute('href').substring(1);
      
    this.shadowRoot.querySelectorAll('.nav-link').forEach((tab) => {
      tab.classList.remove('active');
    });
    target.classList.add('active');
  
    this.shadowRoot.querySelectorAll('.tab-pane').forEach((pane) => {
      pane.classList.remove('show', 'active');
    });
    this.shadowRoot.getElementById(tabId).classList.add('show', 'active');
  }
}
  
customElements.define('dashboard-transaction', DashboardTransaction);
