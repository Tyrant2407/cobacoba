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
class DetailTransaction extends HTMLElement {
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
                                data-page="dashboard"
                                class="list-group-item list-group-item-action"
                            >Dashboard</a>
                            <a
                                href="/dashboard-products.html"
                                data-page="dashboard-products"
                                class="list-group-item list-group-item-action"
                            >My Products</a>
                            <a
                                href="/dashboard-transactions.html"
                                data-page="dashboard-transaction"
                                class="list-group-item list-group-item-action active"
                            >Transactions</a>
                            <a
                                href="/dashboard-settings.html"
                                data-page="dashboard-settings"
                                class="list-group-item list-group-item-action"
                            >Store Settings</a>
                            <a
                                href="/dashboard-account.html"
                                data-page="dashboard-account"
                                class="list-group-item list-group-item-action"
                            >My Account</a>
                            <a
                                href="/index.html"
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
                                    <h2 class="dashboard-title">#STORE0839</h2>
                                    <p class="dashboard-subtitle">
                                        Big result start from the small one
                                    </p>
                                </div>
                                <div class="dashboard-content" id="transactionDetails">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-12 col-md-4">
                                                            <img
                                                                src="images/product-details-dashboard.png"
                                                                alt="product-details-dashboard"
                                                                class="w-100 mb-3"
                                                            />
                                                        </div>
                                                        <div class="col-12 col-md-8">
                                                            <div class="row">
                                                                <div class="col-12 col-md-6">
                                                                    <div class="product-title">Customer Name</div>
                                                                    <div class="product-subtitle">Angga Risky</div>
                                                                </div>
                                                                <div class="col-12 col-md-6">
                                                                    <div class="product-title">Product Name</div>
                                                                    <div class="product-subtitle">
                                                                        Shirup Marzzan
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-md-6">
                                                                    <div class="product-title">
                                                                        Date of Transaction
                                                                    </div>
                                                                    <div class="product-subtitle">
                                                                        12 Januari, 2020
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-md-6">
                                                                    <div class="product-title">Payment Status</div>
                                                                    <div class="product-subtitle text-danger">
                                                                        Pending
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-md-6">
                                                                    <div class="product-title">Total Amount</div>
                                                                    <div class="product-subtitle">$280,409</div>
                                                                </div>
                                                                <div class="col-12 col-md-6">
                                                                    <div class="product-title">Mobile</div>
                                                                    <div class="product-subtitle">
                                                                        +628 2020 11111
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12 mt-4">
                                                            <h5>Shipping Information</h5>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="row">
                                                                <div class="col-12 col-md-6">
                                                                    <div class="product-title">Address I</div>
                                                                    <div class="product-subtitle">
                                                                        Setra Duta Cemara
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-md-6">
                                                                    <div class="product-title">Address II</div>
                                                                    <div class="product-subtitle">
                                                                        Blok B2 No. 34
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-md-6">
                                                                    <div class="product-title">Province</div>
                                                                    <div class="product-subtitle">West Java</div>
                                                                </div>
                                                                <div class="col-12 col-md-6">
                                                                    <div class="product-title">City</div>
                                                                    <div class="product-subtitle">Bandung</div>
                                                                </div>
                                                                <div class="col-12 col-md-6">
                                                                    <div class="product-title">Postal Code</div>
                                                                    <div class="product-subtitle">123999</div>
                                                                </div>
                                                                <div class="col-12 col-md-6">
                                                                    <div class="product-title">Country</div>
                                                                    <div class="product-subtitle">Indonesia</div>
                                                                </div>
                                                                <div class="col-12 col-md-3">
                                                                    <div class="product-title">Status</div>
                                                                    <select
                                                                        name="status"
                                                                        id="status"
                                                                        class="form-control"
                                                                        v-model="status"
                                                                    >
                                                                        <option value="UNPAID">Unpaid</option>
                                                                        <option value="PENDING">Pending</option>
                                                                        <option value="SHIPPING">Shipping</option>
                                                                        <option value="SUCCESS">Success</option>
                                                                    </select>
                                                                </div>
                                                                <template v-if="status == 'SHIPPING'">
                                                                    <div class="col-md-3">
                                                                        <div class="product-title">Input Resi</div>
                                                                        <input
                                                                            type="text"
                                                                            class="form-control"
                                                                            name="resi"
                                                                            v-model="resi"
                                                                        />
                                                                    </div>
                                                                    <div class="col-md-2">
                                                                        <button
                                                                            type="submit"
                                                                            class="btn btn-success btn-block mt-4"
                                                                        >
                                                                            Update Resi
                                                                        </button>
                                                                    </div>
                                                                </template>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-4">
                                                        <div class="col-12 text-right">
                                                            <button
                                                                type="submit"
                                                                class="btn btn-success btn-lg"
                                                            >
                                                                Save Now
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

customElements.define('detail-transaction', DetailTransaction);
