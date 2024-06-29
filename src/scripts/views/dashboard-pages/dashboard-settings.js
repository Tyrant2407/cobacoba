/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable no-new */
/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
class DashboardSettings extends HTMLElement {
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
                            >Dashboard</a>
                            <a
                                href="#"
                                data-page="dashboard-products"
                                class="list-group-item list-group-item-action"
                            >Products</a>
                            <a
                                href="#"
                                data-page="dashboard-transaction"
                                class="list-group-item list-group-item-action"
                            >Transactions</a>
                            <a
                                href="#"
                                data-page="dashboard-settings"
                                class="list-group-item list-group-item-action active"
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
                                    <h2 class="dashboard-title">Store Settings</h2>
                                    <p class="dashboard-subtitle">Make store that profitable</p>
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
                                                                    <label for="store-name">Store Name</label>
                                                                    <input
                                                                        type="text"
                                                                        class="form-control"
                                                                        id="store-name"
                                                                        aria-describedby="store-name"
                                                                        placeholder="Store Name"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label for="category">Category</label>
                                                                    <select
                                                                        name="category"
                                                                        id="category"
                                                                        class="form-control"
                                                                    >
                                                                        <option value="" disabled>
                                                                            Select Category
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col md-6">
                                                                <div class="form-group">
                                                                    <label for="store">Store Status</label>
                                                                    <p class="text-muted">
                                                                        Apakah saat ini toko Anda buka?
                                                                    </p>
                                                                    <div
                                                                        class="custom-control custom-radio custom-control-inline"
                                                                    >
                                                                        <input
                                                                            type="radio"
                                                                            class="custom-control-input"
                                                                            name="is_store_open"
                                                                            id="openStoreTrue"
                                                                            :value="true"
                                                                        />
                                                                        <label
                                                                            for="openStoreTrue"
                                                                            class="custom-control-label"
                                                                            >Buka</label
                                                                        >
                                                                    </div>
                                                                    <div
                                                                        class="custom-control custom-radio custom-control-inline"
                                                                    >
                                                                        <input
                                                                            type="radio"
                                                                            class="custom-control-input"
                                                                            name="is_store_open"
                                                                            id="openStoreFalse"
                                                                            :value="true"
                                                                        />
                                                                        <label
                                                                            for="openStoreFalse"
                                                                            class="custom-control-label"
                                                                            >Sementara Tutup</label
                                                                        >
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col text-right">
                                                                <button
                                                                    type="submit"
                                                                    class="btn btn-success px-5"
                                                                >
                                                                    Save Now
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
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
}

customElements.define('dashboard-settings', DashboardSettings);
