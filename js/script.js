// DOM�����k�L
document.addEventListener('DOMContentLoaded', function() {
    
    // === ��������� ===
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // �Ӳ����n�U�n
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // === �����Bn�Ӳ���� ===
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });

    // === է�ɤ������� ===
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // ���a� ���
    const elementsToObserve = document.querySelectorAll('.section-title, .about-content, .track-item, .style-item, .service-category, .creative-philosophy, .experience-item, .activity-gallery, .gallery-grid, .contact-content');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });

    // === ��ï����n����� ===
    const trackItems = document.querySelectorAll('.track-item');
    trackItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(15px)';
            this.style.backgroundColor = 'rgba(255, 215, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0px)';
            this.style.backgroundColor = 'rgba(255, 215, 0, 0.05)';
        });
    });

    // === CTAܿ�n��ï�� ===
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // ���빜
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // �÷�󻯷��~g�����
            const sessionsSection = document.querySelector('#sessions');
            if (sessionsSection) {
                const offsetTop = sessionsSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // === JOD�[թ�� ===
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            
            // �-nh:
            submitButton.textContent = '�-...';
            submitButton.disabled = true;
            
            // 2Ҍk��h:��n��o�ï���gLF	
            setTimeout(() => {
                submitButton.textContent = 'ጆ';
                submitButton.style.background = 'linear-gradient(45deg, #28a745, #20c997)';
                
                // U�k2ҌkCk;Y
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.style.background = 'linear-gradient(45deg, #FFD700, #B8860B)';
                    this.reset();
                }, 2000);
            }, 2000);
        });
    }

    // === ���ï�����	 ===
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // === ���Ȣ���n������� ===
    const conceptItems = document.querySelectorAll('.concept-item');
    conceptItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotateY(5deg)';
            this.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateY(0deg)';
            this.style.boxShadow = 'none';
        });
        
        // !h:��
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0px)';
        }, index * 200);
    });

    // === ����թ����n�� ===
    const platformLinks = document.querySelectorAll('.platform-link');
    platformLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // ��ï��
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.1s ease';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.transition = 'all 0.3s ease';
            }, 100);
            
            // ��n��xn��oSSgLF
            console.log(`${this.textContent} clicked`);
        });
    });

    // === Bn��Ȣ�� ===
    // ���Ȣ���n�K
    conceptItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
    });

    // ��ï����n!h:
    trackItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0px)';
            item.style.transition = 'all 0.6s ease';
        }, index * 100);
    });

    // === キーボード操作（ライトボックス対応） ===
    document.addEventListener('keydown', function(e) {
        if (lightbox && lightbox.classList.contains('active')) {
            // ライトボックスがアクティブな場合
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    showPrevImage();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
            }
        } else if (e.key === 'Escape') {
            // ESCキーでトップへ
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });

    // === ��������� ===
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / documentHeight) * 100;
        
        // ������LB�4�g����	
        const progressBar = document.querySelector('.scroll-progress');
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }
    });

    // === Creative Services アニメーション ===
    const serviceItems = document.querySelectorAll('.service-item');
    const serviceCategories = document.querySelectorAll('.service-category');
    
    // サービスアイテムの順次表示
    serviceItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-15px)';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0px)';
            item.style.transition = 'all 0.6s ease';
        }, index * 80);
    });
    
    // サービスカテゴリのホバー効果強化
    serviceCategories.forEach(category => {
        const preview = category.querySelector('.preview-placeholder');
        
        category.addEventListener('mouseenter', function() {
            if (preview) {
                preview.style.transform = 'scale(1.02)';
                preview.style.transition = 'transform 0.3s ease';
            }
        });
        
        category.addEventListener('mouseleave', function() {
            if (preview) {
                preview.style.transform = 'scale(1)';
            }
        });
    });
    
    // プレビュープレースホルダーのクリック効果
    const previewPlaceholders = document.querySelectorAll('.preview-placeholder');
    previewPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            // クリック効果
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.1s ease';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.transition = 'transform 0.3s ease';
            }, 100);
            
            // 将来的にモーダルやギャラリーを開くための準備
            console.log('Preview clicked:', this.querySelector('.photo-label').textContent);
        });
    });

    // === Photo Gallery アニメーション ===
    const galleryPhotos = document.querySelectorAll('.gallery-photo, .activity-photo, .art-sample, .video-sample');
    
    // ギャラリー写真の順次表示
    galleryPhotos.forEach((photo, index) => {
        photo.style.opacity = '0';
        photo.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            photo.style.opacity = '1';
            photo.style.transform = 'translateY(0px)';
            photo.style.transition = 'all 0.6s ease';
        }, index * 100);
    });
    
    // === ライトボックス機能 ===
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    const lightboxOverlay = document.querySelector('.lightbox-overlay');
    
    let currentGallery = [];
    let currentIndex = 0;
    
    // ギャラリーアイテムのクリックイベント
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const galleryType = this.getAttribute('data-gallery');
            const itemIndex = parseInt(this.getAttribute('data-index'));
            
            // 同じギャラリーの画像を取得
            currentGallery = Array.from(document.querySelectorAll(`[data-gallery="${galleryType}"]`));
            currentIndex = itemIndex;
            
            openLightbox();
        });
    });
    
    // ライトボックスを開く
    function openLightbox() {
        const currentItem = currentGallery[currentIndex];
        
        lightboxImage.src = currentItem.src;
        lightboxImage.alt = currentItem.alt;
        lightboxCaption.textContent = currentItem.alt;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // 前後ボタンの表示/非表示
        lightboxPrev.style.display = currentIndex > 0 ? 'flex' : 'none';
        lightboxNext.style.display = currentIndex < currentGallery.length - 1 ? 'flex' : 'none';
    }
    
    // ライトボックスを閉じる
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // 前の画像へ
    function showPrevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            updateLightboxImage();
        }
    }
    
    // 次の画像へ
    function showNextImage() {
        if (currentIndex < currentGallery.length - 1) {
            currentIndex++;
            updateLightboxImage();
        }
    }
    
    // ライトボックス画像更新
    function updateLightboxImage() {
        const currentItem = currentGallery[currentIndex];
        
        // フェードアウト
        lightboxImage.style.opacity = '0';
        
        setTimeout(() => {
            lightboxImage.src = currentItem.src;
            lightboxImage.alt = currentItem.alt;
            lightboxCaption.textContent = currentItem.alt;
            
            // フェードイン
            lightboxImage.style.opacity = '1';
            
            // 前後ボタンの表示/非表示
            lightboxPrev.style.display = currentIndex > 0 ? 'flex' : 'none';
            lightboxNext.style.display = currentIndex < currentGallery.length - 1 ? 'flex' : 'none';
        }, 150);
    }
    
    // イベントリスナー
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevImage);
    if (lightboxNext) lightboxNext.addEventListener('click', showNextImage);
    
    // 画像読み込み時のトランジション
    if (lightboxImage) {
        lightboxImage.addEventListener('load', function() {
            this.style.transition = 'opacity 0.3s ease';
        });
    }

    // === 写真プレースホルダーのホバー効果強化 ===
    const allPhotoPlaceholders = document.querySelectorAll('[class*="photo-placeholder"]');
    
    allPhotoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('mouseenter', function() {
            const label = this.querySelector('.photo-label');
            const info = this.querySelector('.photo-info');
            
            if (label) {
                label.style.transform = 'translateY(-2px)';
                label.style.transition = 'transform 0.2s ease';
            }
            if (info) {
                info.style.opacity = '1';
                info.style.transition = 'opacity 0.2s ease';
            }
        });
        
        placeholder.addEventListener('mouseleave', function() {
            const label = this.querySelector('.photo-label');
            const info = this.querySelector('.photo-info');
            
            if (label) {
                label.style.transform = 'translateY(0px)';
            }
            if (info) {
                info.style.opacity = '0.8';
            }
        });
    });
});

// === ���빜nCSSՄ��	 ===
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .fade-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }
`;
document.head.appendChild(rippleStyle);