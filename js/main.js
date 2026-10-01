/* ==========================================================
   CÓDIGO DE LA PÁGINA — normalmente NO necesitas tocar este archivo.
   Lee js/contenido.js y dibuja todas las secciones.
   ========================================================== */
(function () {
  const C = CONTENIDO;
  const N = C.negocio;
  const $ = (id) => document.getElementById(id);
  const wa = (msg) => `https://wa.me/${N.whatsapp}` + (msg ? `?text=${encodeURIComponent(msg)}` : "");

  /* ---------- SEO ---------- */
  document.title = C.seo.titulo;
  document.querySelector('meta[name="description"]').setAttribute("content", C.seo.descripcion);

  /* ---------- Textos simples: data-texto="negocio.nombre" ---------- */
  document.querySelectorAll("[data-texto]").forEach((el) => {
    el.textContent = el.dataset.texto.split(".").reduce((o, k) => (o ? o[k] : ""), C) || "";
  });

  /* ---------- Menú ---------- */
  $("navLinks").innerHTML =
    C.menu.map((m) => `<a href="${m.enlace}">${m.texto}</a>`).join("") +
    `<a href="#contacto" class="btn btn-primary"><i class="fa-solid fa-paper-plane"></i>${C.menuBoton}</a>`;

  /* ---------- Hero ---------- */
  const H = C.hero;
  document.documentElement.style.setProperty("--hero-img", `url("${H.imagenFondo}")`);
  $("heroContent").innerHTML = `
    <div class="hero-badge"><i class="fa-solid fa-circle-check"></i>${H.insignia}</div>
    <h1>${H.titulo} <span>${H.tituloResaltado}</span></h1>
    <p>${H.texto}</p>
    <div class="hero-buttons">
      <a href="#contacto" class="btn btn-primary"><i class="fa-solid fa-bolt"></i>${H.botonPrincipal}</a>
      <a href="#servicios" class="btn btn-outline"><i class="fa-solid fa-list"></i>${H.botonSecundario}</a>
    </div>`;

  /* ---------- Títulos de sección ---------- */
  const titulo = (s) => `<div class="mini-title">${s.miniTitulo}</div><h2>${s.titulo}</h2><p>${s.texto}</p>`;
  $("serviciosTitulo").innerHTML = titulo(C.servicios);
  $("porqueTitulo").innerHTML = titulo(C.porQue);
  $("galeriaTitulo").innerHTML = titulo(C.galeria);

  /* ---------- Servicios ---------- */
  $("serviciosGrid").innerHTML = C.servicios.items.map((s) => `
    <article class="service-card reveal">
      <div class="service-image"><img src="${s.imagen}" alt="${s.alt || s.titulo}"><div class="service-icon"><i class="${s.icono}"></i></div></div>
      <div class="service-content"><h3>${s.titulo}</h3><p>${s.texto}</p></div>
    </article>`).join("");

  /* ---------- Sistemas y web ---------- */
  const S = C.sistemas;
  $("sistemasGrid").innerHTML = `
    <div class="systems-image reveal"><img src="${S.imagen}" alt="${S.alt}"></div>
    <div class="systems-content reveal">
      <div class="mini-title">${S.miniTitulo}</div><h2>${S.titulo}</h2><p>${S.texto}</p>
      <div class="systems-icons">${S.items.map((i) => `<div class="system-item"><i class="${i.icono}"></i><span>${i.texto}</span></div>`).join("")}</div>
    </div>`;

  /* ---------- Por qué elegirnos ---------- */
  $("porqueGrid").innerHTML = C.porQue.items.map((i) => `
    <div class="why-card reveal"><div class="why-icon"><i class="${i.icono}"></i></div><h3>${i.texto}</h3></div>`).join("");

  /* ---------- Galería ---------- */
  $("galeriaGrid").innerHTML = C.galeria.fotos.map((f) => `
    <div class="gallery-item reveal"><img src="${f.imagen}" alt="${f.alt || ""}"></div>`).join("");

  /* ---------- Estadísticas ---------- */
  document.documentElement.style.setProperty("--stats-img", `url("${C.estadisticas.imagenFondo}")`);
  $("statsGrid").innerHTML = C.estadisticas.items.map((s) => `
    <div class="stat reveal"><i class="${s.icono}"></i><div class="stat-number" data-target="${s.numero}">0</div><p>${s.texto}</p></div>`).join("");

  /* ---------- CTA ---------- */
  $("ctaBox").innerHTML = `
    <div class="cta-content"><h2>${C.cta.titulo}</h2><p>${C.cta.texto}</p></div>
    <a href="${wa(N.mensajeWhatsappInfo)}" target="_blank" rel="noopener" class="btn btn-white"><i class="fa-brands fa-whatsapp"></i>${C.cta.boton}</a>`;

  /* ---------- Contacto ---------- */
  const K = C.contacto;
  $("contactoInfo").innerHTML = `
    <div class="section-title" style="text-align:left;margin:0 0 25px"><div class="mini-title">${K.miniTitulo}</div><h2>${K.titulo}</h2></div>
    <p>${K.texto}</p>
    <div class="contact-list">
      <a href="tel:${N.telefonoLlamada}" class="contact-item"><i class="fa-solid fa-phone"></i><div><small>${K.etiquetaTelefono}</small><strong>${N.telefonoMostrar}</strong></div></a>
      <a href="${wa()}" target="_blank" rel="noopener" class="contact-item"><i class="fa-brands fa-whatsapp"></i><div><small>${K.etiquetaWhatsapp}</small><strong>${N.telefonoMostrar}</strong></div></a>
      <div class="contact-item"><i class="fa-solid fa-location-dot"></i><div><small>${K.etiquetaUbicacion}</small><strong>${N.ubicacion}</strong></div></div>
    </div>
    <div class="map"><iframe src="https://www.google.com/maps?q=${encodeURIComponent(N.mapa)}&output=embed" loading="lazy" title="Mapa de ubicación de ${N.nombre}"></iframe></div>`;

  /* ---------- Formulario: lista de servicios ---------- */
  $("servicio").innerHTML =
    `<option value="">${K.placeholderServicio}</option>` +
    C.servicios.items.map((s) => `<option>${s.titulo}</option>`).join("") +
    `<option>${C.servicios.opcionOtro}</option>`;

  /* ---------- Redes sociales ---------- */
  $("redes").innerHTML = C.footer.redes
    .filter((r) => r.enlace)
    .map((r) => `<a href="${r.enlace === "whatsapp" ? wa() : r.enlace}" target="_blank" rel="noopener" aria-label="${r.nombre}"><i class="${r.icono}"></i></a>`)
    .join("");

  /* ---------- WhatsApp flotante y año ---------- */
  $("whatsappFlotante").href = wa(N.mensajeWhatsappCotizar);
  $("year").textContent = new Date().getFullYear();

  /* ==========================================================
     COMPORTAMIENTO (menú, animaciones, formulario)
     ========================================================== */
  const menuToggle = $("menuToggle"), navLinks = $("navLinks");
  const setIcon = (abierto) => {
    const i = menuToggle.querySelector("i");
    i.classList.toggle("fa-bars", !abierto);
    i.classList.toggle("fa-xmark", abierto);
  };
  menuToggle.addEventListener("click", () => setIcon(navLinks.classList.toggle("active")));
  navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { navLinks.classList.remove("active"); setIcon(false); }));

  const header = $("header");
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 30));

  /* Animación de aparición */
  const ro = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("visible"); ro.unobserve(e.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((e) => ro.observe(e));

  /* Contadores */
  const counters = document.querySelectorAll(".stat-number");
  let started = false;
  const so = new IntersectionObserver((es) => {
    if (es[0].isIntersecting && !started) {
      started = true;
      counters.forEach((c) => {
        const target = +c.dataset.target, start = performance.now();
        (function tick(now) {
          const p = Math.min((now - start) / 1800, 1), ease = 1 - Math.pow(1 - p, 3);
          c.textContent = Math.floor(target * ease).toLocaleString("es-PE") + "+";
          if (p < 1) requestAnimationFrame(tick);
        })(start);
      });
      so.disconnect();
    }
  }, { threshold: 0.35 });
  so.observe(document.querySelector(".stats"));

  /* Formulario -> WhatsApp */
  $("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const msg =
      `Hola ${N.nombre}.\n\n*Nombre:* ${$("nombre").value.trim()}\n*Teléfono:* ${$("telefono").value.trim()}\n` +
      `*Servicio:* ${$("servicio").value}\n*Mensaje:* ${$("mensaje").value.trim()}`;
    window.open(wa(msg), "_blank");
  });

  /* Si una imagen no carga, se muestra un fondo azul en su lugar */
  document.querySelectorAll("img").forEach((img) => img.addEventListener("error", function () {
    this.style.display = "none";
    this.parentElement.style.background = "linear-gradient(135deg,#0B3D91,#00A3FF)";
  }));
})();
