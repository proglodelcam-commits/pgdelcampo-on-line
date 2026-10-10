// ============================================================
// CONFIGURACIÓN EDITABLE — PG del Campo Web
// Modifica los valores aquí y toda la web se actualiza.
// ============================================================

const APP_CONFIG = {

  // ---------- IDENTIDAD DE LA EMPRESA ----------
  empresa: {
    nombre:       "PG del Campo",
    nombreLegal:  "Productos Globales del Campo",
    ruc:           "0452907730000U",
    eslogan:       "Del Campo a su Mesa",
    lema:          "Todo lo bueno viene de Dios, con su ayuda todo es posible",
    telefono:      "+505 57973097",
    whatsapp:      "50557973097",
    email:         "proglodelcam@gmail.com",
    ubicacion:     "Jinotepe, Carazo — Nicaragua",
    direccion:    "Km 38 Carretera Jinotepe a San Marcos",
    copyright:    "© 2026 PG del Campo. Todos los derechos reservados.",
    anoInicio:    2024,
    mision:       "Llevar productos naturales y de calidad del campo nicaragüense directamente a su mesa, con sabor auténtico y tradición.",
    vision:       "Ser la marca referente en productos naturales del campo nicaragüense, reconocida por calidad, tradición y servicio al cliente.",
    unico:        "Café de altura de Carazo, pinolillo artesanal, pinol tradicional y abono orgánico (humus de lombriz). Todo 100% natural, sin preservantes.",
    envio:        "Zona de Carazo y alrededores. Consulta disponibilidad con un agente."
  },

  // ---------- ENLACES EXTERNOS ----------
  enlaces: {
    kyteTienda:    "https://proglodelcampo.catalog.kyte.site/",
    kyteCereales:  "https://proglodelcampo.catalog.kyte.site/cereales",
    pagoQR:        "https://digital.lafise.com/?BANK=BLNI&ACCOUNT_NUMBER=140051265&AMOUNT=940.70&REFERENCE=0001006&CONCEPT=Compra%20Productos%20PG%20del%20Campo",
    agente:       "https://business-card.io/c/2c023cba-0548-485c-9285-80d553459cdd/",
    whatsapp:      "https://wa.me/50557973097?text=Hola%20PG%20del%20Campo",
    tarjetaFidelidad: "https://proglodelcam-commits.github.io/tarjeta-fidelidad/",
    facebook:     "",
    instagram:    ""
  },

  // ---------- CHATBOT (BotsPG) ----------
  chatbot: {
    enabled:     true,
    titulo:      "BotsPG",
    subtitulo:   "Asistente Virtual",
    bienvenida:  "¡Hola! Soy BotsPG, asistente de Productos Globales del Campo. ¿En qué te puedo asesorar hoy? Ofrecemos café de altura, pinolillo, abono orgánico y envíos en la zona de Carazo.",
    placeholder: "Pregúntame por precios, productos o presupuestos...",
    webAppUrl:   "https://script.google.com/macros/s/AKfycbzm-VrcGn22nThJQgab0xL_RLgwld_jcxvOXotDmMl8jQnWVjI8HmO7Du-QlV_iIQGM/exec"
  },

  // ---------- HORARIOS ----------
  horarios: [
    { dia: "Lunes",      horario: "Cerrado" },
    { dia: "Martes",     horario: "5:30 p.m. – 11:00 p.m." },
    { dia: "Miércoles",  horario: "5:30 p.m. – 1:00 a.m." },
    { dia: "Jueves",    horario: "5:30 p.m. – 11:00 p.m." },
    { dia: "Viernes",   horario: "6:00 p.m. – 2:00 a.m." },
    { dia: "Sábado",    horario: "6:00 p.m. – 4:00 a.m." },
    { dia: "Domingos",  horario: "Cerrado" }
  ],

  // ---------- PAGOS ----------
  pagos: {
    banco:       "Bancentro LAFISE",
    cuenta:      "140051265",
    titular:     "Fernando F. Martínez Flores",
    notaCheque:  "Girado a nombre de Fernando F. Martínez Flores (Representante Legal)",
    contraEntrega: "Cancela tu pedido al momento de recibirlo. Pago directo al Agente designado."
  },

  // ---------- PRODUCTOS DESTACADOS (con SVG alusivos) ----------
  productos: [
    {
      nombre: "Café de Altura",
      desc: "Tostado y molido 100% Carazo",
      svgIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 20h24v18a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6V20z" fill="#2d5a27" opacity=".15"/>
        <path d="M8 20h24v18a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6V20z" stroke="#2d5a27" stroke-width="2" fill="none"/>
        <path d="M32 24h4a4 4 0 0 1 0 8h-4" stroke="#2d5a27" stroke-width="2"/>
        <path d="M14 16c0-4 4-4 4 0s-4 4-4 0" stroke="#81c784" stroke-width="1.5" fill="none"/>
        <path d="M20 14c0-4 4-4 4 0s-4 4-4 0" stroke="#81c784" stroke-width="1.5" fill="none"/>
        <path d="M26 16c0-4 4-4 4 0s-4 4-4 0" stroke="#81c784" stroke-width="1.5" fill="none"/>
      </svg>`
    },
    {
      nombre: "Pinolillo",
      desc: "Bebida ancestral nicaragüense",
      svgIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="8" width="16" height="32" rx="8" fill="#2d5a27" opacity=".15"/>
        <rect x="16" y="8" width="16" height="32" rx="8" stroke="#2d5a27" stroke-width="2" fill="none"/>
        <path d="M20 8V4M24 8V2M28 8V4" stroke="#81c784" stroke-width="2" stroke-linecap="round"/>
        <path d="M18 18h12M18 24h12M18 30h12" stroke="#4caf50" stroke-width="1" opacity=".5"/>
      </svg>`
    },
    {
      nombre: "Pinol",
      desc: "Tradición y sabor campesino",
      svgIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 20h36c0 10-8 16-18 16S6 30 6 20z" fill="#2d5a27" opacity=".15"/>
        <path d="M6 20h36c0 10-8 16-18 16S6 30 6 20z" stroke="#2d5a27" stroke-width="2" fill="none"/>
        <path d="M18 14c0-3 3-3 3 0s-3 3-3 0" stroke="#81c784" stroke-width="1.5" fill="none"/>
        <path d="M24 12c0-3 3-3 3 0s-3 3-3 0" stroke="#81c784" stroke-width="1.5" fill="none"/>
        <line x1="4" y1="20" x2="44" y2="20" stroke="#2d5a27" stroke-width="2"/>
      </svg>`
    },
    {
      nombre: "Humus de Lombriz",
      desc: "Abono orgánico premium",
      svgIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 44V24" stroke="#2d5a27" stroke-width="2" stroke-linecap="round"/>
        <path d="M24 24c-8 0-12-8-12-14 0 6 4 14 12 14z" fill="#81c784" opacity=".6"/>
        <path d="M24 24c8 0 12-8 12-14 0 6-4 14-12 14z" fill="#4caf50" opacity=".8"/>
        <circle cx="24" cy="44" r="4" fill="#2d5a27" opacity=".3"/>
      </svg>`
    }
  ],

  // ---------- TABLA NUTRICIONAL DEL CAFÉ ----------
  tablaNutricional: {
    titulo:    "Información Nutricional — Café Tostado y Molido",
    subtitulo: "Valores por cada 100 g",
    imagen:    "img/nutricion-infografia.jpg",
    filas: [
      ["Calorías",        "201 kcal"],
      ["Proteínas",       "12.6 g"],
      ["Grasas totales",  "14.2 g"],
      ["Carbohidratos",   "28.3 g"],
      ["Fibra",            "18.5 g"],
      ["Azúcares",         "0 g"],
      ["Sodio",            "67 mg"],
      ["Potasio",         "4 025 mg"],
      ["Cafeína",         "2 650 mg"]
    ],
    nota: "Estos valores pueden variar según la variedad del café y el método de preparación. En general, el café es una bebida baja en calorías y rica en antioxidantes."
  },

  // ---------- CLUB DE FIDELIDAD ----------
  club: {
    titulo:    "Club de Fidelidad",
    eslogan:   "Tu lealtad nos inspira, la naturaleza nos une",
    descripcion: "Gracias por preferir nuestros productos naturales. Únete a nuestro CLUB y disfruta de descuentos y beneficios exclusivos por tu lealtad. Con nuestra Tarjeta de Fidelidad Digital acumula estampas por cada compra y canjea premios.",
    beneficios: [
      "Acumula estampas por cada compra",
      "Descuentos exclusivos por lealtad",
      "Historial de compras registrado",
      "Pedidos directos por WhatsApp",
      "Pagos seguros con LAFISE"
    ],
    pasos: [
      { num: 1, texto: "Accede a tu Tarjeta Digital — Ingresa tu teléfono y registra tus compras.", enlace: "tarjetaFidelidad" },
      { num: 2, texto: "Realiza tus Compras — Compra tus productos favoritos y acumula estampas.", enlace: "" },
      { num: 3, texto: "Cada compra suma estampas — Kyte registra tu historial automáticamente.", enlace: "" },
      { num: 4, texto: "Consulta tu Tarjeta — Revisa tus estampas y beneficios en la app.", enlace: "tarjetaFidelidad" },
      { num: 5, texto: "Obtén tu Beneficio — Al completar 10 estampas o estrellas recibes un 2% adicional en tu siguiente compra.", enlace: "" }
    ],
    cierre: "Disfruta de Nuestros Productos Naturales y acumula beneficios con cada compra."
  },

  // ---------- COLORES Y ESTILO ----------
  estilo: {
    primario:   "#2d5a27",
    primarioClaro: "#4caf50",
    secundario: "#81c784",
    oscuro:     "#1b5e20",
    fondoClaro: "#f4f6f4",
    texto:      "#333333",
    acentos:    "#ff9800"
  }

};