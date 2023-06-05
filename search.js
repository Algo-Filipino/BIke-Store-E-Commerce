function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the search input value
  var searchInput = document.querySelector('.search-input');
  var searchTerm = searchInput.value.toLowerCase(); // Convert the search term to lowercase for case-insensitive search

  // Get the list of product titles
  var productTitles = document.querySelectorAll('.product-title');

  // Iterate over each product title and check for a match
  var matchesFound = false;
  for (var i = 0; i < productTitles.length; i++) {
    var productTitle = productTitles[i].textContent.toLowerCase(); // Convert the product title to lowercase

    if (productTitle.includes(searchTerm)) {
      // Found a match, highlight the matched product title
      productTitles[i].style.backgroundColor = 'lightgray';
      matchesFound = true;

      // Scroll to the matched product title
      productTitles[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Not a match, remove any previous highlighting
      productTitles[i].style.backgroundColor = '';
    }
  }

  // If no matches were found, display a message
  if (!matchesFound) {
    console.log('No matching products found.');
  }

  // Clear the search input
  searchInput.value = '';
}

// Add an event listener to the form submission
var searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', handleFormSubmit);

// Make the search box sticky when typing
var searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', function(event) {
  searchInput.classList.add('sticky');
});

// Remove sticky class when search box is empty
searchInput.addEventListener('blur', function(event) {
  if (searchInput.value === '') {
    searchInput.classList.remove('sticky');
  }
});
