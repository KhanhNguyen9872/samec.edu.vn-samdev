const itemsPerPage = 3;
const items = document.querySelectorAll('.post-item');
const paginationContainer = document.querySelector('.pagination');

// Function to show a specific page
function showPage(pageNumber) {
    // Hide all items
    items.forEach((item, index) => {
    item.style.display = 'none';
    // Calculate start and end indices for the current page
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    if (index >= start && index < end) {
        item.style.display = 'block';
    }
    });

    // Update active button
    document.querySelectorAll('.pagination button').forEach((btn, index) => {
    btn.classList.toggle('active', parseInt(btn.textContent) === pageNumber);
    });
}

// Function to create pagination buttons
function createPagination() {
    const totalPages = Math.ceil(items.length / itemsPerPage);

    if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => {
        showPage(i);
        });
        paginationContainer.appendChild(button);
    }
    } else {
    // First 3 pages
    for (let i = 1; i <= 3; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => {
        showPage(i);
        updatePaginationButtons(i, totalPages);
        });
        paginationContainer.appendChild(button);
    }

    // Ellipsis in the middle
    const ellipsis = document.createElement('button');
    ellipsis.textContent = '...';
    ellipsis.className = 'ellipsis';
    paginationContainer.appendChild(ellipsis);

    // Last 3 pages
    for (let i = totalPages - 2; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => {
        showPage(i);
        updatePaginationButtons(i, totalPages);
        });
        paginationContainer.appendChild(button);
    }
    }

    // Set the first page as active
    showPage(1);
}

createPagination();