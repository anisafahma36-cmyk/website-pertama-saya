// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
                navbar.style.background = 'rgba(0, 0, 0, 0.95)';
                    } else {
                            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
                                }
                                });

                                // Smooth reveal animation saat scroll
                                const observer = new IntersectionObserver((entries) => {
                                    entries.forEach(entry => {
                                            if (entry.isIntersecting) {
                                                        entry.target.style.opacity = '1';
                                                                    entry.target.style.transform = 'translateY(0)';
                                                                            }
                                                                                });
                                                                                }, { threshold: 0.1 });

                                                                                document.querySelectorAll('.skill-card, .about-card, .contact-form').forEach(el => {
                                                                                    el.style.opacity = '0';
                                                                                        el.style.transform = 'translateY(30px)';
                                                                                            el.style.transition = 'all 0.6s ease';
                                                                                                observer.observe(el);
                                                                                                });

                                                                                                // Alert saat tombol kirim ditekan
                                                                                                document.querySelector('.contact-form .btn')?.addEventListener('click', (e) => {
                                                                                                    e.preventDefault();
                                                                                                        alert('Terima kasih! Pesan Anda telah diterima 🎉');
                                                                                                        });

                                                                                                        console.log('🚀 Website berhasil dimuat!');