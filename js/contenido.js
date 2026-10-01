/* ==========================================================
   CONTENIDO DE LA PÁGINA  —  EDITA SOLO ESTE ARCHIVO
   Todo lo que se ve en la web sale de aquí: textos, fotos,
   teléfono, servicios, galería, números, redes sociales.
   - Íconos: https://fontawesome.com/search?o=r&m=free (ej: "fa-solid fa-print")
   - Fotos: puedes usar un enlace (https://...) o una foto tuya
     guardada en la carpeta img/ (ej: "img/mi-foto.jpg")
   ========================================================== */
const CONTENIDO = {

  seo: {
    titulo: "MICROSYSTEMSULLANA | Servicio Técnico Informático",
    descripcion: "MICROSYSTEMSULLANA - Servicio técnico informático, reparación de computadoras, impresoras, redes, sistemas y páginas web."
  },

  negocio: {
    nombre: "MICROSYSTEMSULLANA",
    telefonoMostrar: "920 235 447",
    telefonoLlamada: "+51920235447",          // formato para el botón de llamar
    whatsapp: "51920235447",                  // 51 = código de Perú, sin + ni espacios
    ubicacion: "Sullana, Piura - Perú",
    mapa: "Sullana, Piura, Peru",             // lo que se busca en Google Maps
    mensajeWhatsappCotizar: "Hola MICROSYSTEMSULLANA, quiero cotizar un servicio.",
    mensajeWhatsappInfo: "Hola MICROSYSTEMSULLANA, necesito información sobre un servicio."
  },

  menu: [
    { texto: "Inicio", enlace: "#inicio" },
    { texto: "Servicios", enlace: "#servicios" },
    { texto: "Sistemas y Web", enlace: "#sistemas" },
    { texto: "Contacto", enlace: "#contacto" }
  ],
  menuBoton: "Cotizar",

  hero: {
    insignia: "Servicio técnico profesional",
    titulo: "ESPECIALISTAS EN",
    tituloResaltado: "HARDWARE Y SOFTWARE.",
    texto: "Soluciones informáticas rápidas, profesionales y confiables.",
    imagenFondo: "../img/imagen_principal.avif",
    botonPrincipal: "Cotizar ahora",
    botonSecundario: "Ver servicios"
  },

  servicios: {
    miniTitulo: "Nuestros servicios",
    titulo: "Soluciones para tu tecnología",
    texto: "Todo lo que necesitas en un solo lugar.",
    items: [
      { icono: "fa-solid fa-print", titulo: "Reparación de impresoras", texto: "Diagnóstico, mantenimiento y reparación.", imagen: "img/reparacion_impresoras.png", alt: "Servicio técnico de impresoras - MICROSYSTEMSULLANA", ajuste: "completa" },
      { icono: "fa-solid fa-laptop", titulo: "Computadoras y laptops", texto: "Reparación, limpieza y optimización.", imagen: "img/reparacion_computadoras_laptops.png", alt: "Computadora de escritorio para servicio técnico" },
      { icono: "fa-solid fa-network-wired", titulo: "Redes LAN y WiFi", texto: "Conectividad estable y segura.", imagen: "img/redes_lan.png", alt: "Técnico instalando cableado de red" },
      { icono: "fa-solid fa-microchip", titulo: "Cámara de seguridad", texto: "Protege tu casa o tu negocio.", imagen: "img/camaras_seguridad.png", alt: "Componentes y repuestos tecnológicos" },
      { icono: "fa-solid fa-code", titulo: "Sistemas a medida", texto: "Software adaptado a tu negocio.", imagen: "img/sistemas_medida.avif", alt: "Programador trabajando con código" },
      { icono: "fa-solid fa-globe", titulo: "Páginas web", texto: "Webs modernas y profesionales.", imagen: "img/paginas_web.avif", alt: "Diseño de página web en computadora" }
    ],
    opcionOtro: "Otro servicio"   // se agrega al final de la lista del formulario
  },

  sistemas: {
    miniTitulo: "Desarrollo digital",
    titulo: "Sistemas y páginas web a medida",
    texto: "Creamos soluciones digitales adaptadas a cada necesidad.",
    imagen: "img/sistema_paginasweb_medida.avif",
    alt: "Diseño y desarrollo de páginas web",
    items: [
      { icono: "fa-solid fa-building", texto: "Empresas" },
      { icono: "fa-solid fa-store", texto: "Tiendas" },
      { icono: "fa-solid fa-school", texto: "Colegios" },
      { icono: "fa-solid fa-layer-group", texto: "Otros" }
    ]
  },

  porQue: {
    miniTitulo: "Nuestra diferencia",
    titulo: "¿Por qué elegirnos?",
    texto: "Servicio pensado para darte tranquilidad.",
    items: [
      { icono: "fa-solid fa-bolt", texto: "Rápido" },
      { icono: "fa-solid fa-shield-halved", texto: "Garantía" },
      { icono: "fa-solid fa-user-gear", texto: "Técnicos expertos" },
      { icono: "fa-solid fa-headset", texto: "Soporte" }
    ]
  },

  galeria: {
    miniTitulo: "Trabajos",
    titulo: "Galería de trabajos",
    texto: "Parte de nuestro mundo tecnológico.",
    // Puedes agregar o quitar fotos. Se ve mejor con 6.
    fotos: [
      { imagen: "img/redes-tarjeta.webp", alt: "Soporte técnico en redes - MICROSYSTEMSULLANA" },
      { imagen: "img/rack-servidores.jpg", alt: "Laptop tecnológica" },
      { imagen: "img/reparando_laptop.jpg", alt: "Servidores y red informática" },
      { imagen: "img/reparando_pc.jpg", alt: "Computadora de escritorio" },
      { imagen: "img/componentes_pc.avif", alt: "Componentes de computadora" },
      { imagen: "img/instalando_camaras_wifi.jpg", alt: "Trabajo tecnológico en equipo" },
      { imagen: "img/mis_marcas.png", alt: "Programación y desarrollo web" }
    ]
  },

  estadisticas: {
    imagenFondo: "../img/mis_marcas.png",
    items: [
      { icono: "fa-solid fa-screwdriver-wrench", numero: 850, texto: "Equipos reparados" },
      { icono: "fa-solid fa-users", numero: 620, texto: "Clientes atendidos" },
      { icono: "fa-solid fa-award", numero: 10, texto: "Años de experiencia" }
    ]
  },

  cta: {
    titulo: "¿Tienes un problema técnico?",
    texto: "Estamos listos para ayudarte.",
    boton: "Hablar por WhatsApp"
  },

  contacto: {
    miniTitulo: "Contacto",
    titulo: "Hablemos de tu proyecto",
    texto: "Cuéntanos qué necesitas y te contactaremos.",
    etiquetaTelefono: "Teléfono",
    etiquetaWhatsapp: "WhatsApp",
    etiquetaUbicacion: "Ubicación",
    placeholderServicio: "Selecciona un servicio"
  },

  footer: {
    texto: "Servicio Técnico Informático",
    // Pon el enlace real de cada red. Si dejas "" ese ícono NO se muestra.
    redes: [
      { icono: "fa-brands fa-facebook-f", nombre: "Facebook", enlace: "" },
      { icono: "fa-brands fa-whatsapp", nombre: "WhatsApp", enlace: "whatsapp" },   // "whatsapp" usa tu número
      { icono: "fa-brands fa-instagram", nombre: "Instagram", enlace: "" },
      { icono: "fa-brands fa-tiktok", nombre: "TikTok", enlace: "" }
    ]
  }
};
