import '../src/scripts/components/index.js';
import '../src/scripts/views/pages/index.js';

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('navigateNav', (event) => {
    const { page } = event.detail;
    const content = document.getElementById('content');

    if (page === 'home') {
      content.innerHTML = '<home-page></home-page>';
    } else if (page === 'searchpage') {
      content.innerHTML = '<search-page></search-page>';
    }
  });

  window.addEventListener('navigateCategories', (event) => {
    const { page } = event.detail;
    const content = document.getElementById('content');

    if (page === 'gadgets') {
      content.innerHTML = '<search-page></-page>';
    }
  });
});
