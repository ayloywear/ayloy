const isHomePage = document.body.dataset.page === "home";

// SHARED CATEGORY NAVIGATION

const categoryHeader = document.getElementById("category-header");

if (categoryHeader) {
    categoryHeader.innerHTML = `
        <nav class="navigation" aria-label="Ana menü">
            <a class="nav-link" href="index.html#home">
                Anasayfa
            </a>

            <a class="nav-link" href="index.html#purpose">
                Amaç
            </a>

            <div class="brand-slot">
                <a class="small-brand" href="index.html#intro"
                    aria-label="Ayloy açılış ekranı">
                    <img src="ayloy.png" alt="Ayloy">
                </a>
            </div>

            <div class="products-menu">
                <button class="nav-link products-toggle active"
                    type="button"
                    aria-expanded="false"
                    aria-controls="products-dropdown">
                    Ürünler
                </button>

                <div class="dropdown" id="products-dropdown" hidden>
                    <details class="menu-group">
                        <summary>Üst ürünler</summary>
                        <a href="upper.html">Tüm üst ürünler</a>
                        <a href="upper.html#jackets">Ceket</a>
                        <a href="upper.html#sweatshirts">Sweatshirt</a>
                        <a href="upper.html#tshirts">Tişört</a>
                        <a href="upper.html#shirts">Gömlek</a>
                    </details>

                    <details class="menu-group">
                        <summary>Alt ürünler</summary>
                        <a href="lower.html">Tüm alt ürünler</a>
                        <a href="lower.html#pants">Pantolon</a>
                        <a href="lower.html#shorts">Şort</a>
                    </details>

                    <a class="dropdown-link" href="accessories.html">
                        Aksesuar
                    </a>

                    <a class="dropdown-link" href="products.html">
                        Tüm ürünler
                    </a>
                </div>
            </div>

            <a class="nav-link" href="index.html#contact">
                İletişim
            </a>
        </nav>
    `;
}

// SHARED PRODUCT WINDOWS

const dialogContainer = document.getElementById("dialog-container");

if (dialogContainer) {
    dialogContainer.innerHTML = `
        <dialog class="product-dialog" id="product-dialog"
            aria-labelledby="product-title">
            <button class="close-button" type="button"
                data-close-product aria-label="Ürün penceresini kapat">
                ×
            </button>

            <div class="product-dialog-layout">
                <div class="product-gallery">
                    <button class="main-image-button" type="button"
                        aria-label="Ürün fotoğrafını büyüt">
                        <img id="product-main-image" src="" alt="">
                        <span>Fotoğrafı büyüt</span>
                    </button>

                    <div class="thumbnail-list"
                        id="product-thumbnails"></div>
                </div>

                <div class="product-information">
                    <h2 id="product-title"></h2>

                    <dl class="product-specifications">
                        <div>
                            <dt>Tür</dt>
                            <dd id="product-type"></dd>
                        </div>

                        <div>
                            <dt>Materyal</dt>
                            <dd id="product-material"></dd>
                        </div>

                        <div>
                            <dt>Renk</dt>
                            <dd id="product-color"></dd>
                        </div>
                    </dl>

                    <p id="product-description"></p>
                </div>
            </div>
        </dialog>

        <dialog class="image-dialog" id="image-dialog"
            aria-label="Büyütülmüş ürün fotoğrafı">
            <button class="close-button" type="button"
                data-close-image aria-label="Büyütülmüş fotoğrafı kapat">
                ×
            </button>

            <img id="enlarged-image" src="" alt="">
        </dialog>
    `;
}

// CONTACT SECTION

const contactSection = document.getElementById("contact");

if (contactSection) {
    contactSection.innerHTML = `
        <div class="footer-spotify">
            <iframe title="Ayloy Spotify çalma listesi"
                    src="https://open.spotify.com/embed/playlist/65NettLnTXNDXMPg0h0O3T"
                    width="100%" height="352" loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
        <div class="footer-contact">
            <h2 class="section-title">İletişim</h2>
            <div class="contact-list"></div>
        </div>
    `;

    const contactItems = [
        { icon: "ig.png", label: "Instagram", url: "https://www.instagram.com/_ayloy_" },
        { icon: "x.png", label: "X", url: "https://x.com/chaxinigg" },
        { icon: "m.png", label: "Gmail", url: "mailto:ayloywear@gmail.com" }
    ];

    const contactList = contactSection.querySelector(".contact-list");

    contactItems.forEach(function (item) {
        const link = document.createElement("a");
        link.className = "contact-link";
        link.href = item.url;

        if (!item.url.startsWith("mailto:")) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        }

        const icon = document.createElement("img");
        icon.src = item.icon;
        icon.alt = "";

        link.setAttribute("aria-label", item.label);
        link.append(icon);
        contactList.appendChild(link);
    });
}

// PRODUCT CARDS

document.querySelectorAll("[data-products]").forEach(function (grid) {
    const category = grid.dataset.products;

    const visibleProducts = category === "all"
        ? products.slice(-8).reverse()
        : category === "catalog"
            ? products.slice().reverse()
            : products.filter(product => product.category === category).reverse();

    visibleProducts.forEach(function (product) {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "product-card";
        card.setAttribute("aria-label", product.name + " ayrıntılarını aç");

        const image = document.createElement("img");
        image.src = encodeURIComponent(product.images[0]);
        image.alt = product.name;
        image.loading = "lazy";

        const title = document.createElement("h3");
        title.textContent = product.name;

        card.append(image, title);

        card.addEventListener("click", function () {
            openProduct(product);
        });

        grid.appendChild(card);
    });
});

// PRODUCT MENU

const productsMenu = document.querySelector(".products-menu");
const productsToggle = document.querySelector(".products-toggle");
const dropdown = document.querySelector(".dropdown");

function closeMenu() {
    setProductMenu(false);
}

const catalogToggle = document.getElementById("catalog-menu-toggle");
const menuBackdrop = document.createElement("div");
menuBackdrop.className = "products-backdrop";
menuBackdrop.hidden = true;
menuBackdrop.setAttribute("aria-hidden", "true");
document.body.append(menuBackdrop);

function setProductMenu(open) {
    dropdown.hidden = !open;
    menuBackdrop.hidden = !open;
    productsToggle.setAttribute("aria-expanded", String(open));
    catalogToggle?.setAttribute("aria-expanded", String(open));
}

productsToggle.addEventListener("click", () => setProductMenu(dropdown.hidden));
catalogToggle?.addEventListener("click", () => {
    setProductMenu(dropdown.hidden);
    productsToggle.focus({ preventScroll: true });
});

document.addEventListener("click", function (event) {
    if (!productsMenu.contains(event.target) && !catalogToggle?.contains(event.target)) {
        closeMenu();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !dropdown.hidden) {
        closeMenu();
        productsToggle.focus();
    }
});

productsMenu.addEventListener("focusout", function (event) {
    if (!productsMenu.contains(event.relatedTarget)) {
        closeMenu();
    }
});

dropdown.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
});

// PRODUCT DETAILS AND IMAGE ENLARGEMENT

const productDialog = document.getElementById("product-dialog");
const imageDialog = document.getElementById("image-dialog");
const mainImage = document.getElementById("product-main-image");
const enlargedImage = document.getElementById("enlarged-image");
const thumbnails = document.getElementById("product-thumbnails");

function updateScrollLock() {
    document.body.classList.toggle(
        "modal-open",
        productDialog.open || imageDialog.open
    );
}

function openProduct(product) {
    document.getElementById("product-title").textContent = product.name;
    document.getElementById("product-type").textContent = product.type;
    document.getElementById("product-material").textContent =
        product.material;
    document.getElementById("product-color").textContent = product.color;
    document.getElementById("product-description").textContent =
        product.description;

    mainImage.src = encodeURIComponent(product.images[0]);
    mainImage.alt = product.name + " — fotoğraf 1";

    thumbnails.replaceChildren();

    product.images.forEach(function (imagePath, index) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "thumbnail-button";
        button.classList.toggle("active", index === 0);
        button.setAttribute("aria-label", "Fotoğraf " + (index + 1));
        button.setAttribute("aria-pressed", String(index === 0));

        const image = document.createElement("img");
        image.src = encodeURIComponent(imagePath);
        image.alt = product.name + " — fotoğraf " + (index + 1);

        button.appendChild(image);

        button.addEventListener("click", function () {
            mainImage.src = encodeURIComponent(imagePath);
            mainImage.alt = image.alt;

            thumbnails.querySelectorAll("button").forEach(function (item) {
                const selected = item === button;
                item.classList.toggle("active", selected);
                item.setAttribute("aria-pressed", String(selected));
            });
        });

        thumbnails.appendChild(button);
    });

    productDialog.showModal();
    updateScrollLock();
}

document.querySelector("[data-close-product]").addEventListener(
    "click",
    function () {
        productDialog.close();
    }
);

document.querySelector(".main-image-button").addEventListener(
    "click",
    function () {
        enlargedImage.src = mainImage.src;
        enlargedImage.alt = mainImage.alt;
        imageDialog.showModal();
        updateScrollLock();
    }
);

document.querySelector("[data-close-image]").addEventListener(
    "click",
    function () {
        imageDialog.close();
    }
);

// Close a window when a click starts and ends outside its boundaries.

[productDialog, imageDialog].forEach(function (dialog) {
    let startedOutside = false;

    function isOutside(event) {
        const rectangle = dialog.getBoundingClientRect();

        return (
            event.clientX < rectangle.left ||
            event.clientX > rectangle.right ||
            event.clientY < rectangle.top ||
            event.clientY > rectangle.bottom
        );
    }

    dialog.addEventListener("pointerdown", function (event) {
        startedOutside = event.target === dialog && isOutside(event);
    });

    dialog.addEventListener("click", function (event) {
        if (startedOutside && event.target === dialog && isOutside(event)) {
            dialog.close();
        }

        startedOutside = false;
    });

    // The Escape key also closes native dialog windows.
    dialog.addEventListener("close", updateScrollLock);
});

// HOME PAGE: SCROLLING LOGO AND ACTIVE NAVIGATION

if (isHomePage) {
    const intro = document.getElementById("intro");
    const brand = document.querySelector(".brand");
    const brandSlot = document.querySelector(".brand-slot");
    const header = document.querySelector(".site-header");

    const sections = [
        document.getElementById("home"),
        document.getElementById("purpose"),
        document.getElementById("products"),
        document.getElementById("contact")
    ];

    const navigationLinks = document.querySelectorAll("[data-section]");
    let frameRequested = false;

    function updateHomeLayout() {
        const introHeight = intro.offsetHeight;
        const scrollPosition = window.scrollY;

        // Leave a band below the header once the logo is fully docked.
        const settledGap = Math.min(235, Math.max(160, introHeight * 0.18));
        const transitionDistance = Math.max(1, introHeight - header.offsetHeight - settledGap);

        // Progress follows scrolling in both directions.
        const progress = Math.min(
            Math.max(scrollPosition / transitionDistance, 0),
            1
        );

        const slotRectangle = brandSlot.getBoundingClientRect();
        const startX = window.innerWidth / 2;
        const startY = introHeight / 2.5;
        const endX = slotRectangle.left + slotRectangle.width / 2;
        const endY = slotRectangle.top + slotRectangle.height / 2;

        const startWidth = Math.min(window.innerWidth * 0.62, 620);
        const endWidth = Math.min(
            window.innerWidth <= 700 ? 82 : 150,
            slotRectangle.width
        );

        brand.style.left =
            startX + (endX - startX) * progress + "px";

        brand.style.top =
            startY + (endY - startY) * progress + "px";

        brand.style.width =
            startWidth + (endWidth - startWidth) * progress + "px";

        // Menu links appear as the logo approaches the navigation bar.
        const menuOpacity = Math.min(
            Math.max((progress - 0.55) / 0.45, 0),
            1
        );

        header.style.opacity = menuOpacity;
        document.body.classList.toggle("nav-visible", progress > 0.55);

        const readingPosition =
            scrollPosition + header.offsetHeight + window.innerHeight * 0.3;

        let activeSection = "home";

        sections.forEach(function (section) {
            if (readingPosition >= section.offsetTop) {
                activeSection = section.id;
            }
        });

        // At the end of the page, keep the contact link highlighted.
        if (
            progress === 1 &&
            scrollPosition + window.innerHeight >=
                document.documentElement.scrollHeight - 8
        ) {
            activeSection = "contact";
        }

        navigationLinks.forEach(function (link) {
            const active = link.dataset.section === activeSection;
            link.classList.toggle("active", active);

            if (active) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });

        frameRequested = false;
    }

    function requestLayoutUpdate() {
        if (!frameRequested) {
            frameRequested = true;
            window.requestAnimationFrame(updateHomeLayout);
        }
    }

    window.addEventListener("scroll", requestLayoutUpdate, {
        passive: true
    });

    window.addEventListener("resize", requestLayoutUpdate);
    window.addEventListener("load", requestLayoutUpdate);

    updateHomeLayout();
}

function setupModelCarousel() {
    const carousel = document.querySelector(".model-carousel");
    if (!carousel) return;

    const models = [
        ["01_Mavi_Gomlek(2).png", "Mavi gömlek"],
        ["02_Ekose_Panelli_Kapusonlu(2).png", "Ekose panelli kapüşonlu"],
        ["03_Petrol_Mavisi_Kirlangiclar(1).png", "Petrol mavisi kırlangıçlar"],
        ["05_Ekose_Robali_Gomlek(2).png", "Ekose robalı gömlek"],
        ["06_Yesil_Beyaz_Tisort(2).png", "Yeşil beyaz tişört"],
        ["07_Gri_Ayloy(1).png", "Gri Ayloy"],
        ["08_Yuruyen_Iki_Figur(1).png", "Yürüyen iki figür"],
        ["09_We_Pre_Rich(1).png", "We Pre-Rich"],
        ["10_Kus_Golgesi(1).png", "Kuş gölgesi"],
        ["11_Keep_Them_Shook(1).png", "Keep Them Shook"],
        ["12_Basketbol_Kupasi(1).png", "Basketbol kupası"],
        ["13_Portre_Baskisi(1).png", "Portre baskısı"],
        ["14_Beyaz_Tisort_Uc_Kus(1).png", "Beyaz tişört, üç kuş"],
        ["15_Halı_Sırt(1).png", "Halı sırt"],
        ["16_jid_tshirt_workerjean.png", "JID tişört ve worker kot"],
    ];

    const track = carousel.querySelector(".model-track");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const slides = models.map(([file, label]) => {
        const image = new Image();
        image.className = "model-slide";
        image.alt = label;
        image.draggable = false;
        image.decoding = "async";
        track.append(image);
        return { image, file };
    });

    const count = slides.length;
    const offsets = [0, 0.18, 0.32, 0.425, 0.49];
    const scales = [1, 0.80, 0.63, 0.46, 0.32];
    const wrap = (value, length) => ((value % length) + length) % length;
    let position = 0;
    let target = 0;
    let width = track.clientWidth;
    let autoEnabled = true;
    let visible = false;
    let timer;
    let frame;
    let drag;

    function interpolate(values, distance) {
        const index = Math.floor(distance);
        return values[index] + (values[index + 1] - values[index]) * (distance - index);
    }

    const compactCarousel = window.matchMedia("(max-width: 700px)");
    const mobileOffsets = [0, 0.43, 0.73];
    const mobileScales = [1, 0.43, 0.25];

    function render() {
        const mobile = compactCarousel.matches;
        const visibleDepth = mobile ? 2 : 4;
        const active = wrap(Math.round(position), count);

        slides.forEach(({ image, file }, index) => {
            const offset = wrap(index - position + count / 2, count) - count / 2;
            const depth = Math.abs(offset);
            image.hidden = depth >= visibleDepth;
            image.setAttribute("aria-hidden", String(index !== active));

            if (depth < 5 && !image.hasAttribute("src")) {
                image.src = encodeURIComponent(file);
            }

            if (image.hidden) return;
            const x = Math.sign(offset) * interpolate(mobile ? mobileOffsets : offsets, depth) * width;
            const y = -depth * (width < 700 ? 8 : 10);
            const scale = interpolate(mobile ? mobileScales : scales, depth);
            image.style.opacity = Math.min(1, visibleDepth - depth);
            image.style.zIndex = 1000 - Math.round(depth * 100);
            image.style.transform =
                `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`;
        });
    }

    function animateTo(destination) {
        cancelAnimationFrame(frame);
        target = destination;
        const start = position;
        const began = performance.now();

        function tick(now) {
            const progress = motion.matches ? 1 : Math.min((now - began) / 480, 1);
            position = start + (destination - start) * (1 - (1 - progress) ** 3);
            render();
            if (progress < 1) frame = requestAnimationFrame(tick);
        }

        frame = requestAnimationFrame(tick);
    }

    function scheduleAuto() {
        clearTimeout(timer);
        if (!autoEnabled || motion.matches || !visible || document.hidden || drag) return;

        timer = setTimeout(() => {
            animateTo(target + 1);
            scheduleAuto();
        }, 3000);
    }

    function stopAuto() {
        autoEnabled = false;
        clearTimeout(timer);
    }

    function step(direction) {
        stopAuto();
        animateTo(target + direction);
    }

    carousel.querySelector(".previous").addEventListener("click", () => step(-1));
    carousel.querySelector(".next").addEventListener("click", () => step(1));

    carousel.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        step(event.key === "ArrowLeft" ? -1 : 1);
    });

    track.addEventListener("pointerdown", (event) => {
        if (drag || !event.isPrimary || event.button !== 0) return;
        drag = { id: event.pointerId, x: event.clientX, y: event.clientY };
        track.setPointerCapture(event.pointerId);
        scheduleAuto();
    });

    track.addEventListener("pointermove", (event) => {
        if (!drag || drag.id !== event.pointerId) return;
        const dx = event.clientX - drag.x;
        const dy = event.clientY - drag.y;

        if (!drag.horizontal) {
            if (Math.abs(dx) < 8 || Math.abs(dx) <= Math.abs(dy)) return;
            drag.horizontal = true;
            drag.start = position;
            drag.center = Math.round(position);
            stopAuto();
            cancelAnimationFrame(frame);
            track.classList.add("is-dragging");
        }

        position = drag.start - dx / Math.max(50, width * 0.18);
        render();
    });

    function endDrag(event) {
        if (!drag || drag.id !== event.pointerId) return;

        if (drag.horizontal) {
            let destination = Math.round(position);
            const dx = event.clientX - drag.x;
            if (event.type === "pointerup" && Math.abs(dx) >= 24 && destination === drag.center) {
                destination += dx < 0 ? 1 : -1;
            }
            animateTo(destination);
        }

        drag = null;
        track.classList.remove("is-dragging");
        scheduleAuto();
    }

    ["pointerup", "pointercancel", "lostpointercapture"].forEach((type) => {
        track.addEventListener(type, endDrag);
    });

    new ResizeObserver(() => {
        width = track.clientWidth;
        render();
    }).observe(track);

    new IntersectionObserver(([entry]) => {
        visible = entry.intersectionRatio >= 0.35;
        scheduleAuto();
    }, { threshold: 0.35 }).observe(track);

    document.addEventListener("visibilitychange", scheduleAuto);
    motion.addEventListener("change", scheduleAuto);
    render();
}

setupModelCarousel();
