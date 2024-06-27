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
class DashboardNav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <head>
                <meta charset="utf-8" />
                <link rel="stylesheet" href="../src/style/css/components/main.css" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            </head>
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
                            class="list-group-item list-group-item-action active"
                            >Dashboard</a
                            >
                            <a
                            href="#"
                            data-page="dashboard-products"
                            class="list-group-item list-group-item-action"
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
        `;
        
        this.shadowRoot.getElementById('menu-toggle').addEventListener('click', this._toggleSidebar.bind(this));
        this.shadowRoot.getElementById('navbar-toggler').addEventListener('click', this._toggleNavbar.bind(this));
        this.shadowRoot.querySelectorAll('.page-dashboard').forEach((link) => {
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

customElements.define('dashboardnavbar-component', DashboardNav);
