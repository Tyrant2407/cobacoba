import './components/index.js';
import './views/pages/index.js';
import './views/dashboard-pages/index.js';

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('navigateNav', (event) => {
    const { page } = event.detail;
    const content = document.getElementById('content');

    if (page === 'home') {
      content.innerHTML = '<home-page></home-page>';
    } else if (page === 'searchpage') {
      content.innerHTML = '<search-page></search-page>';
    } else if (page === 'categories') {
      content.innerHTML = '<categories-page></categories-page>';
    } else if (page === 'detail') {
      content.innerHTML = '<product-details></product-details>';
    } else if (page === 'register') {
      content.innerHTML = '<register-form></register-form>';
    } else if (page === 'signup') {
      content.innerHTML = '<signup-component></signup-component>';
    } else if (page === 'signup-success') {
      content.innerHTML = '<signup-success></signup-success>';

    // Dashboard
    } else if (page === 'dashboard') {
      content.innerHTML = '<dashboard-page></dashboard-page>';
    } else if (page === 'dashboard-settings') {
      content.innerHTML = '<dashboard-settings></dashboard-settings>';
    } else if (page === 'dashboard-products') {
      content.innerHTML = '<dashboard-product></dashboard-product>';
    } else if (page === 'dashboard-account') {
      content.innerHTML = '<dashboard-account></dashboard-account>';
    } else if (page === 'dashboard-transaction') {
      content.innerHTML = '<dashboard-transaction></dashboard-transaction>';
    } else if (page === 'detail-transaction') {
      content.innerHTML = '<detail-transaction></detail-transaction>';
    } else if (page === 'product-detail') {
      content.innerHTML = '<dashboard-productdetail></dashboard-productdetail>';
    } else if (page === 'product-create') {
      content.innerHTML = '<dashboard-productcreate></dashboard-productcreate>';
    } else if (page === 'test') {
      content.innerHTML = '<test-page></test-page>';
    }
  });
});
