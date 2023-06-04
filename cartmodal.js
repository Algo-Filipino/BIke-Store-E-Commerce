var cartModal = document.getElementById('cartModal');
var closeButton = document.querySelector('.modal-close');
var cartContent = document.getElementById('cartContent');
var conShopButton = document.getElementById('conshop');
var cartModalOverlay = document.getElementById('cartModalOverlay');

// Show the modal
function showModal() {
  cartModal.style.display = 'block';
  cartModalOverlay.style.display = 'block';
  cartContent.innerHTML = '<iframe src="cart.html" style="width: 100%; height: 400px; border: none;"></iframe>';
}

// Hide the modal
function hideModal() {
  cartModal.style.display = 'none';
  cartModalOverlay.style.display = 'none';
}

// Close the modal when the close button is clicked
closeButton.addEventListener('click', hideModal);

// Close the modal when the "Continue Shopping" button is clicked
conShopButton.addEventListener('click', hideModal);

// Show the modal when the "Cart" link is clicked
var cartLink = document.querySelector('.nav-link[data-bs-target="#cartModal"]');
cartLink.addEventListener('click', showModal);