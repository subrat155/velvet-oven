document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        });
    });
    
    // Cart functionality
    const cartIcon = document.querySelector('.cart-icon');
    const cartValue = document.querySelectorAll('.cart-value');
    let cartCount = 0;
    
    // Sample cake data
    const cakes = [
        { id: 1, name: "Chocolate Dream", description: "Rich chocolate cake with fudge filling", price: 2999, image: "cake1.png" },
        { id: 2, name: "Vanilla Bliss", description: "Classic vanilla cake with buttercream", price: 2299, image: "cake2.png" },
        { id: 3, name: "Red Velvet", description: "Southern classic with cream cheese frosting", price: 1699, image: "cake3.png" },
        { id: 4, name: "Lemon Zest", description: "Tangy lemon cake with citrus glaze", price: 3299, image: "cake4.png" },
        { id: 5, name: "Carrot Cake", description: "Spiced carrot cake with walnuts", price: 1299, image: "cake5.png" },
        { id: 6, name: "Strawberry Shortcake", description: "Layers of sponge cake and fresh strawberries", price: 4199, image: "cake6.png" },
        { id: 7, name: "Black Forest", description: "Chocolate cake with cherries and whipped cream", price: 2599, image: "cake7.png" },
        { id: 8, name: "Cheesecake", description: "New York style with berry topping", price: 3499, image: "cake8.png" },
        { id: 9, name: "Tiramisu", description: "Coffee-flavored Italian dessert", price: 599, image: "cake9.png" },
        { id: 10, name: "Rainbow Cake", description: "Colorful layers with vanilla frosting", price:2999, image: "cake10.png" }
    ];
    
    // Populate featured cakes
    const cakesGrid = document.querySelector('.cakes-grid');
    
    cakes.forEach(cake => {
        const cakeCard = document.createElement('div');
        cakeCard.className = 'cake-card';
        cakeCard.innerHTML = `
            <div class="cake-img-container">
                <img src="${cake.image}" alt="${cake.name}">
            </div>
            <div class="cake-info">
                <h3>${cake.name}</h3>
                <p>${cake.description}</p>
                <div class="cake-price">
                    <span class="price">₹ ${cake.price.toFixed(2)}</span>
                    <button class="add-to-cart" data-id="${cake.id}">Add to Cart</button>
                </div>
            </div>
        `;
        cakesGrid.appendChild(cakeCard);
    });
    
    // Add to cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const cakeId = parseInt(e.target.getAttribute('data-id'));
            const cake = cakes.find(c => c.id === cakeId);
            
            if (cake) {
                cartCount++;
                updateCartCount();
                
                // Animation for adding to cart
                const button = e.target;
                button.textContent = 'Added!';
                button.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    button.textContent = 'Add to Cart';
                    button.style.backgroundColor = '#e2a485';
                }, 1000);
            }
        }
    });
    
    function updateCartCount() {
        cartValue.forEach(el => {
            el.textContent = cartCount;
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        
        if (emailInput.value) {
            // Here you would typically send the email to your server
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.cake-card, .offer-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animated elements
    document.querySelectorAll('.cake-card, .offer-card, .testimonial-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run once on page load
    animateOnScroll();
    
    // Then run on scroll
    window.addEventListener('scroll', animateOnScroll);
     // Increase/decrease this value
});

