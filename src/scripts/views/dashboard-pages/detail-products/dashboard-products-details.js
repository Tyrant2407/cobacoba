/* eslint-disable no-underscore-dangle */
class DashboardProductDetail extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
            <link rel="stylesheet" href="../src/style/css/components/main.css">
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
              crossorigin="anonymous"
            />
            <div class="page-dashboard" style="margin-top: -100px">
              <div class="d-flex" id="wrapper">
                <!-- Sidebar -->
                        <div class="border-right" id="sidebar-wrapper">
                            <div class="sidebar-heading text-center">
                                <img
                                src="../src/public/images/logo.png"
                                class="my-4"
                                alt="logo dashboard"
                                style="width: 80px;height: 100px"
                                />
                            </div>
                            <div class="list-group list-group-flush">
                                <a
                                href="#"
                                data-page="dashboard"
                                class="list-group-item list-group-item-action"
                                >Dashboard</a
                                >
                                <a
                                href="#"
                                data-page="dashboard-products"
                                class="list-group-item list-group-item-action active"
                                >Products</a
                                >
                                <a
                                href="#"
                                data-page="dashboard-transaction"
                                class="list-group-item list-group-item-action"
                                >Transactions</a
                                >
                                <a
                                href="#"
                                data-page="dashboard-settings"
                                class="list-group-item list-group-item-action"
                                >Store Settings</a
                                >
                                <a
                                href="#"
                                data-page="dashboard-account"
                                class="list-group-item list-group-item-action"
                                >My Account</a
                                >
                                <a data-page="home" class="list-group-item list-group-item-action"
                                >Sign Out</a
                                >
                            </div>
                        </div>
      
                <!-- Page Content -->
                <div id="page-content-wrapper">
                  <nav
                    class="navbar navbar-expand-lg navbar-light navbar-store fixed-top"
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
                              <a href="/dashboard.html" class="dropdown-item">Dashboard</a>
                              <a href="/dashboard-account.html" class="dropdown-item">Settings</a>
                              <div class="dropdown-divider"></div>
                              <a href="/" class="dropdown-item">Logout</a>
                            </div>
                          </li>
                          <li class="nav-item">
                            <a href="#" class="nav-link d-inline-block mt-2">
                              <img
                                src="/images//icon-cart-filled.svg"
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
                  >
                    <div class="container-fluid">
                      <div class="dashboard-heading">
                        <h2 class="dashboard-title">Create New Product</h2>
                        <p class="dashboard-subtitle">Create your own product</p>
                      </div>
                      <div class="dashboard-content">
                        <div class="row">
                          <div class="col-12">
                            <form action="">
                              <div class="card">
                                <div class="card-body">
                                  <div class="row">
                                    <div class="col-md-6">
                                      <div class="form-group">
                                        <label for="product-name">Product Name</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="product-name"
                                          aria-describedby="product-name"
                                          placeholder="Product Name"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                      <div class="form-group">
                                        <label for="price">Price</label>
                                        <input
                                          type="number"
                                          class="form-control"
                                          id="price"
                                          aria-describedby="price"
                                          placeholder="Price"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-md-12">
                                      <div class="form-group">
                                        <label for="category">Category</label>
                                        <select
                                          name="category"
                                          id="category"
                                          class="form-control"
                                        >
                                          <option value="" disabled>Select Category</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-md-12">
                                      <div class="form-group">
                                        <label for="Description">Description</label>
                                        <div id="editor-container"></div>
                                      </div>
                                    </div>
                                    <div class="row">
                                        <div class="col text-right">
                                        <button
                                            type="submit"
                                            class="btn btn-success px-5 btn-block"
                                        >
                                            Save Now
                                        </button>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div class="col-12 mt-4">
                            <div class="card">
                                <div class="card-body">
                                <div class="row mt-2">
                                    <div class="col-md-4">
                                    <div class="gallery-container">
                                        <img
                                        src="/images/product-card-1.png"
                                        alt="product-card-1"
                                        class="w-100"
                                        />
                                        <a href="#" class="delete-gallery"
                                        ><img
                                            src="/images/icon-delete.svg"
                                            alt="icon-delete"
                                        /></a>
                                    </div>
                                    </div>
                                    <div class="col-md-4">
                                    <div class="gallery-container">
                                        <img
                                        src="/images/product-card-2.png"
                                        alt="product-card-2"
                                        class="w-100"
                                        />
                                        <a href="#" class="delete-gallery"
                                        ><img
                                            src="/images/icon-delete.svg"
                                            alt="icon-delete"
                                        /></a>
                                    </div>
                                    </div>
                                    <div class="col-md-4">
                                    <div class="gallery-container">
                                        <img
                                        src="/images/product-card-3.png"
                                        alt="product-card-3"
                                        class="w-100"
                                        />
                                        <a href="#" class="delete-gallery"
                                        ><img
                                            src="/images/icon-delete.svg"
                                            alt="icon-delete"
                                        /></a>
                                    </div>
                                    </div>
                                    <div class="col-12">
                                    <input
                                        type="file"
                                        name="file"
                                        id="file"
                                        style="display: none"
                                        multiple
                                    />
                                    <button
                                        class="btn btn-secondary btn-block mt-3"
                                        onclick="thisFileUpload()"
                                    >
                                        Add Photo
                                    </button>
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
            </div>
            <script
              src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
              crossorigin="anonymous"
            ></script>
            <script
              src="https://cdn.ckeditor.com/ckeditor5/34.2.0/classic/ckeditor.js"
            ></script>
          `;

    // Call the method to initialize CKEditor
    this.init();
  }

  init() {
    // Call the method to initialize CKEditor

    // Initialize CKEditor
    ClassicEditor
      .create(this.querySelector('#editor-container'))
      .catch((error) => {
        console.error(error);
      });

    // Add event listener for toggle sidebar
    this.querySelector('#menu-toggle').addEventListener('click', this._toggleSidebar.bind(this));

    // Add event listener for toggle dropdown
    this.querySelector('#navbarDropdown').addEventListener('click', this._toggleDropdown.bind(this));

    // Add event listener for each menu item
    this.querySelectorAll('.list-group-item').forEach((link) => {
      link.addEventListener('click', this._handleClick.bind(this));
    });

    // Add event listener for file upload
    this.querySelector('#file').addEventListener('change', this._handleFileSelect.bind(this));
  }

  _toggleSidebar() {
    const wrapper = this.querySelector('#wrapper');
    wrapper.classList.toggle('toggled');
  }

  _toggleDropdown(event) {
    const dropdownMenu = this.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show');
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

  _handleFileSelect(event) {
    // Handle file selection logic here
    console.log('Files selected:', event.target.files);
  }
}

customElements.define('dashboard-productdetail', DashboardProductDetail);
