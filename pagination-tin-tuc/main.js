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
    btn.classList.toggle('active', index === pageNumber - 1);
    });
}

// Function to create pagination buttons
function createPagination() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const maxButtons = 6;

    for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => {
        showPage(i);
        updatePaginationButtons(i, totalPages);
    });
    paginationContainer.appendChild(button);
    }

    // Set the first page as active
    showPage(1);
    updatePaginationButtons(1, totalPages);
}

function updatePaginationButtons(currentPage, totalPages) {
    const buttons = Array.from(paginationContainer.children);
    buttons.forEach(button => (button.style.display = 'none'));

    const maxButtons = 6;
    const start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    const end = Math.min(totalPages, start + maxButtons - 1);

    for (let i = start; i <= end; i++) {
    buttons[i - 1].style.display = 'inline-block';
    }

    if (start > 1) {
    const ellipsisStart = document.createElement('span');
    ellipsisStart.textContent = '...';
    paginationContainer.insertBefore(ellipsisStart, buttons[start - 2]);
    }
    if (end < totalPages) {
    const ellipsisEnd = document.createElement('span');
    ellipsisEnd.textContent = '...';
    paginationContainer.appendChild(ellipsisEnd);
    }
}

// Initialize pagination
createPagination();