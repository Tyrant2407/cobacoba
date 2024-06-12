import '../src/scripts/components/index.js';
import '../src/scripts/views/pages/index.js';

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('navigate', (event) => {
        const page = event.detail.page;
        const content = document.getElementById('content');

        if (page === 'home') {
            content.innerHTML = '<home-page></home-page>';
        } else if (page === 'searchpage') {
            content.innerHTML = '<search-page></search-page>';
        }
    });
});
