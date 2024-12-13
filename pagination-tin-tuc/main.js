const itemsPerPage = 15;
const items = document.querySelectorAll('.post-item');
const paginationContainer = document.querySelector('.pagination');

function showPage(pageNumber) {
    items.forEach((item, index) => {
    item.style.display = 'none';
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    if (index >= start && index < end) {
        item.style.display = 'block';
    }
    });

    document.querySelectorAll('.pagination button').forEach((btn, index) => {
    btn.classList.toggle('active', index === pageNumber - 1);
    });
}

function createPagination() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => showPage(i));
    paginationContainer.appendChild(button);
    }
    showPage(1);
}

createPagination();