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
class DashboardAccount extends HTMLElement {
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
                        href="/dashboard.html"
                        class="list-group-item list-group-item-action"
                        data-page="dashboard"
                        >Dashboard</a
                        >
                        <a
                        href="/dashboard-products.html"
                        class="list-group-item list-group-item-action"
                        data-page="dashboard-products"
                        >Products</a
                        >
                        <a
                        href="/dashboard-transactions.html"
                        class="list-group-item list-group-item-action"
                        data-page="dashboard-transaction"
                        >Transactions</a
                        >
                        <a
                        href="/dashboard-settings.html"
                        class="list-group-item list-group-item-action"
                        data-page="dashboard-settings"
                        >Store Settings</a
                        >
                        <a
                        href="/dashboard-account.html"
                        class="list-group-item list-group-item-action active"
                        data-page="dashboard-account"
                        >My Account</a
                        >
                        <a href="/index.html" class="list-group-item list-group-item-action"
                        data-page="home"
                        >Sign Out</a
                        >
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
                            id="navbar-toggler"
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
                                    >Dashboard</a
                                >
                                <a href="/dashboard-account.html" class="dropdown-item"
                                    >Settings</a
                                >
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
                        data-aos="fade-up"
                    >
                        <div class="container-fluid">
                        <div class="dashboard-heading">
                            <h2 class="dashboard-title">My Account</h2>
                            <p class="dashboard-subtitle">Update your current profile</p>
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
                                            <label for="country">Your Name</label>
                                            <input
                                            type="text"
                                            class="form-control"
                                            id="name"
                                            name="name"
                                            value="Papel La Casa"
                                            />
                                        </div>
                                        </div>
                                        <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="country">Your Email</label>
                                            <input
                                            type="text"
                                            class="form-control"
                                            id="email"
                                            name="email"
                                            value="email@example.com"
                                            />
                                        </div>
                                        </div>
                                        <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="country">Address 1</label>
                                            <input
                                            type="text"
                                            class="form-control"
                                            id="addressOne"
                                            name="addressOne"
                                            value="Setra Duta Cemara"
                                            />
                                        </div>
                                        </div>
                                        <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="adressTwo">Address 2</label>
                                            <input
                                            type="text"
                                            class="form-control"
                                            id="adressTwo"
                                            name="adressTwo"
                                            value="Blok B2 No. 34"
                                            />
                                        </div>
                                        </div>
                                        <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="province">Province</label>
                                            <select
                                            name="province"
                                            id="province"
                                            class="form-control"
                                            >
                                            <option value="West Java">West Java</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="city">City</label>
                                            <select
                                            name="city"
                                            id="city"
                                            class="form-control"
                                            >
                                            <option value="Bandung">Bandung</option>
                                            </select>
                                        </div>
                                        </div>

                                        <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="postalCode">Postal Code</label>
                                            <input
                                            type="text"
                                            class="form-control"
                                            id="postalCode"
                                            name="postalCode"
                                            value="Setra Duta Cemara"
                                            />
                                        </div>
                                        </div>
                                        <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="country">Country</label>
                                            <input
                                            type="text"
                                            class="form-control"
                                            id="country"
                                            name="country"
                                            value="Indonesia"
                                            />
                                        </div>
                                        </div>
                                        <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="mobile">Mobile</label>
                                            <input
                                            type="text"
                                            class="form-control"
                                            id="mobile"
                                            name="mobile"
                                            value="+ 628 2020 111111"
                                            />
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
        this.shadowRoot.getElementById('navbar-toggler').addEventListener('click', this._toggleNavbar.bind(this));
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
        const target = event.currentTarget;
        const page = target.getAttribute('data-page');
        if (page) {
            event.preventDefault();
            window.dispatchEvent(new CustomEvent('navigateNav', {
                detail: {
                    page,
                },
            }));
        }
    }
}

customElements.define('dashboard-account', DashboardAccount);
