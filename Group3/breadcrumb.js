// Get the current page's filename
var currentPage = location.pathname.split('/').pop();

// Find the corresponding breadcrumb link and add a class to highlight it
document.querySelectorAll('#breadcrumb a').forEach(function(item) {
    if (item.getAttribute('href') === currentPage) {
        item.classList.add('active');
    }
});
