// Onscroll Function in nav bar

const navBar = document.querySelector('header');

window.onscroll = () => {
  navBar.classList.toggle('active', window.scrollY > 100);
}


// Swiper JavaScript

const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});



// Updated JavaScript code for cart total display

document.addEventListener("DOMContentLoaded", () => {
  let cartCount = 0;
    const cartCountElem = document.getElementById("cartCount");
    const cartItems = [];
    let totalAmount = 0; // Initialize total amount
    const cartModal = document.getElementById("cartModal");
    const cartItemList = document.getElementById("cartItemList");
    const closeModal = document.getElementById("closeModal");

    // Function to add an item to the cart
    function addToCart(itemName, itemPrice) {
      // Remove "Rs " prefix and parse the price as a float
      const price = parseFloat(itemPrice.replace("Rs ", "")) || 0;
      
      cartItems.push({ name: itemName, price: price });
      cartCount++;
      cartCountElem.textContent = cartCount;
      updateCartModal();
  }
    // Function to update the cart modal with items and total price
    function updateCartModal() {
      cartItemList.innerHTML = ""; // Clear previous items
      let totalPrice = 0; // Initialize total price
  
      cartItems.forEach(item => {
          const listItem = document.createElement("li");
          listItem.textContent = `${item.name} - Rs ${item.price.toFixed(2)}`;
          cartItemList.appendChild(listItem);
          
          // Sum up the item prices
          totalPrice += item.price;
      });
  
      // Display the total amount
      const totalItem = document.createElement("li");
      totalItem.textContent = `Total: Rs ${totalPrice.toFixed(2)}`;
      cartItemList.appendChild(totalItem);
  }
  

    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".bx-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const productBox = event.target.closest(".product-box");
            const itemName = productBox.querySelector(".product-name").textContent;
            const itemPrice = productBox.querySelector(".price").textContent.replace("Rs ", "");
            addToCart(itemName, itemPrice);
        });
    });

    // Show modal when cart icon is clicked
    document.getElementById("cart").addEventListener("click", () => {
        cartModal.style.display = "block";
    });

    // Close modal when 'X' is clicked
    closeModal.addEventListener("click", () => {
        cartModal.style.display = "none";
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener("click", (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = "none";
        }
    });
});




  

  


// ==Scroll Reveal===

ScrollReveal({
  reset:true,
  distance: '100px',
  duration: 2500
})

ScrollReveal().reveal('.home-text-content, .heading-text, .about-text, .product-description, .context-text .about-text h2, .about-text p', {origin : 'top'});
ScrollReveal().reveal('.about-img, .home-text-content h1, .team h1, .price, .small, .order-img,  .contact-img', { origin : 'left' });
ScrollReveal().reveal('.cart-icon, .product-box h2, .order-text, .home-img, .contact-input, .heading-text p, .contact-text', { origin : 'right' });
ScrollReveal().reveal('.button,  .menu-next, .footer-content, .product-box, .gallary-box, ,.team.team_box', { origin : 'bottom' });