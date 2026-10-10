// ============================================================
// PG del Campo — Lógica principal de la Web
// Usa APP_CONFIG de config.js para todos los textos/enlaces.
// Íconos SVG inline directos en el HTML (adaptables).
// ============================================================

// ============================================================
// ICONOS SVG (adaptables, estilo 3D vía CSS). Globales para el
// inyector de index.html. Usan currentColor para heredar el tema.
// ============================================================
var ICONS = {
  home:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 11.2 12 4l9 7.2" stroke="#1b5e20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 10v9h14v-9" stroke="#1b5e20" stroke-width="2" stroke-linejoin="round"/><path d="M10 19v-5h4v5" stroke="#1b5e20" stroke-width="2" stroke-linejoin="round"/></svg>',
  leaf:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 19C5 11 11 5 19 5c0 8-6 14-14 14z" fill="#4caf50"/><path d="M5 19C5 11 11 5 19 5c0 8-6 14-14 14z" stroke="#1b5e20" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 16c3-5 6-7 8-8" stroke="#1b5e20" stroke-width="1.6" stroke-linecap="round"/></svg>',
  building:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="3" width="14" height="18" rx="1.5" fill="#a5d6a7" stroke="#1b5e20" stroke-width="1.8"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" stroke="#1b5e20" stroke-width="1.6" stroke-linecap="round"/><path d="M10 21v-3h4v3" stroke="#1b5e20" stroke-width="1.6"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.5 14.6 9l6 .9-4.3 4.2 1 6L12 17.3 6.7 20l1-6L3.4 9.9l6-.9z" fill="#ffca28" stroke="#1b5e20" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 20h16" stroke="#1b5e20" stroke-width="2" stroke-linecap="round"/><rect x="6" y="11" width="3" height="6" rx="1" fill="#4caf50" stroke="#1b5e20" stroke-width="1.4"/><rect x="10.5" y="7" width="3" height="10" rx="1" fill="#81c784" stroke="#1b5e20" stroke-width="1.4"/><rect x="15" y="13" width="3" height="4" rx="1" fill="#a5d6a7" stroke="#1b5e20" stroke-width="1.4"/></svg>',
  card:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="6" width="18" height="12" rx="2" fill="#a5d6a7" stroke="#1b5e20" stroke-width="1.8"/><path d="M3 10h18" stroke="#1b5e20" stroke-width="1.8"/><path d="M6 15h4" stroke="#1b5e20" stroke-width="1.6" stroke-linecap="round"/></svg>',
  location:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" fill="#4caf50" stroke="#1b5e20" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.4" fill="#fff" stroke="#1b5e20" stroke-width="1.4"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3h3l2 5-2 1.5a11 11 0 0 0 5 5L15 15l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z" fill="#4caf50" stroke="#1b5e20" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" fill="#a5d6a7" stroke="#1b5e20" stroke-width="1.8"/><path d="M12 7.5V12l3 2" stroke="#1b5e20" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  target:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" fill="none" stroke="#1b5e20" stroke-width="1.8"/><circle cx="12" cy="12" r="4.5" fill="none" stroke="#4caf50" stroke-width="1.8"/><circle cx="12" cy="12" r="1.6" fill="#1b5e20"/></svg>',
  sprout:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21v-7" stroke="#1b5e20" stroke-width="2" stroke-linecap="round"/><path d="M12 14c-4 0-6-3-6-6 4 0 6 3 6 6z" fill="#4caf50" stroke="#1b5e20" stroke-width="1.4"/><path d="M12 13c0-3 2-6 6-6 0 3-2 6-6 6z" fill="#81c784" stroke="#1b5e20" stroke-width="1.4"/></svg>',
  truck:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="12" height="9" rx="1" fill="#a5d6a7" stroke="#1b5e20" stroke-width="1.6"/><path d="M14 10h4l3 3v3h-7z" fill="#81c784" stroke="#1b5e20" stroke-width="1.6" stroke-linejoin="round"/><circle cx="7" cy="18" r="1.8" fill="#1b5e20"/><circle cx="17" cy="18" r="1.8" fill="#1b5e20"/></svg>',
  stamp:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1 0 4 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2 2 2 0 0 0 0-4 2 2 0 0 1 0-4z" fill="#a5d6a7" stroke="#1b5e20" stroke-width="1.6" stroke-linejoin="round"/><path d="M11 9l1.6 2.6M13 9l-1.6 2.6M10.4 14h3.2" stroke="#1b5e20" stroke-width="1.4" stroke-linecap="round"/></svg>',
  cart:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4h2l2 11h10l2-7H6" stroke="#1b5e20" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="#a5d6a7"/><circle cx="9" cy="19" r="1.7" fill="#1b5e20"/><circle cx="16" cy="19" r="1.7" fill="#1b5e20"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="3.6" fill="#a5d6a7" stroke="#1b5e20" stroke-width="1.6"/><path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" fill="#4caf50" stroke="#1b5e20" stroke-width="1.6" stroke-linejoin="round"/></svg>'
};
if (typeof window !== 'undefined') window.ICONS = ICONS;

document.addEventListener('DOMContentLoaded', () => {
  const C = APP_CONFIG;

  // ---- Helpers ----
  const el = (id) => document.getElementById(id);
  const txt = (id, val) => { if (el(id)) el(id).textContent = val; };
  const html = (id, val) => { if (el(id)) el(id).innerHTML = val; };
  const href = (id, url) => { const a = el(id); if (a && url) a.href = url; };

  // ---- 1. Identidad ----
  txt('hero-title', C.empresa.nombre);
  txt('hero-slogan', C.empresa.eslogan);
  txt('hero-lema', C.empresa.lema);
  txt('footer-location', C.empresa.ubicacion);
  txt('footer-copy', C.empresa.copyright);
  txt('footer-phone', C.empresa.telefono);
  txt('footer-email', C.empresa.email);
  txt('footer-dir', C.empresa.direccion);
  txt('footer-ruc', 'RUC: ' + C.empresa.ruc);
  txt('footer-phone2', C.empresa.telefono);
  txt('footer-email2', C.empresa.email);

  // ---- 2. Enlaces ----
  href('link-kyte', C.enlaces.kyteTienda);
  href('link-kyte2', C.enlaces.kyteTienda);
  href('link-kyte-cereales', C.enlaces.kyteCereales);
  href('link-qr', C.enlaces.pagoQR);
  href('link-agente', C.enlaces.agente);
  href('link-tarjeta', C.enlaces.tarjetaFidelidad);
  href('link-tarjeta-club', C.enlaces.tarjetaFidelidad);
  href('link-whatsapp2', C.enlaces.whatsapp);

  // ---- 3. Productos destacados (SVG icons inlined in HTML) ----
  const grid = el('productos-grid');
  if (grid && C.productos.length) {
    grid.innerHTML = C.productos.map(p => `
      <div class="producto-card">
        <div class="producto-ico">${p.svgIcon || ''}</div>
        <h3>${p.nombre}</h3>
        <p>${p.desc}</p>
      </div>
    `).join('');
  }

  // ---- 4. Horarios ----
  const tablaH = el('horarios-body');
  if (tablaH && C.horarios.length) {
    tablaH.innerHTML = C.horarios.map(h => {
      const cls = h.horario === 'Cerrado' ? ' class="cerrado"' : '';
      return `<tr><td>${h.dia}</td><td${cls}>${h.horario}</td></tr>`;
    }).join('');
  }

  // ---- 5. Infografía nutricional + tabla ----
  const nutriBody = el('nutri-body');
  if (nutriBody && C.tablaNutricional.filas.length) {
    nutriBody.innerHTML = C.tablaNutricional.filas.map(f =>
      `<tr><td>${f[0]}</td><td>${f[1]}</td></tr>`
    ).join('');
  }
  txt('nutri-nota', C.tablaNutricional.nota);

  // ---- 6. Club de Fidelidad ----
  const clubDiv = el('club-pasos');
  if (clubDiv && C.club.pasos.length) {
    clubDiv.innerHTML = C.club.pasos.map(p => {
      const link = p.enlace ? ` <a href="${C.enlaces[p.enlace] || '#'}" target="_blank" rel="noopener">Haz clic aquí</a>` : '';
      return `
        <div class="club-paso">
          <div class="paso-circle">${p.num}</div>
          <div class="paso-text">${p.texto}${link}</div>
        </div>`;
    }).join('');
  }
  txt('club-eslogan', C.club.eslogan);
  txt('club-cierre', C.club.cierre);
  txt('club-descripcion', C.club.descripcion);
  txt('empresa-mision', C.empresa.mision);
  txt('empresa-unico', C.empresa.unico);
  txt('empresa-envio', C.empresa.envio);
  txt('nutri-subtitulo', C.tablaNutricional.subtitulo);

  // Club beneficios
  const clubBen = el('club-beneficios');
  if (clubBen && C.club.beneficios) {
    clubBen.innerHTML = C.club.beneficios.map(b =>
      `<li>${b}</li>`
    ).join('');
  }

  // ---- 7. Datos bancarios ----
  txt('pago-banco', C.pagos.banco);
  txt('pago-cuenta', C.pagos.cuenta);
  txt('pago-titular', C.pagos.titular);
  txt('pago-cheque', C.pagos.notaCheque);
  txt('pago-entrega', C.pagos.contraEntrega);

  // ---- 8. Menú móvil ----
  const toggle = el('nav-toggle');
  const links  = el('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  // ---- 9. Chatbot ----
  if (C.chatbot.enabled) {
    initChatbot(C.chatbot);
  } else {
    el('chat-fab')?.classList.add('hidden');
  }

});


// ============================================================
// CHATBOT BotsPG
// ============================================================
function initChatbot(cfg) {
  const el = (id) => document.getElementById(id);
  const txt = (id, val) => { const e = document.getElementById(id); if(e) e.textContent = val; };
  const html = (id, val) => { const e = document.getElementById(id); if(e) e.innerHTML = val; };

  txt('chat-title', cfg.titulo);
  txt('chat-badge', cfg.subtitulo);
  html('chat-welcome', cfg.bienvenida);
  el('chat-input')?.setAttribute('placeholder', cfg.placeholder);

  el('chat-fab')?.addEventListener('click', () => {
    el('chat-panel')?.classList.toggle('open');
  });
  el('chat-close')?.addEventListener('click', () => {
    el('chat-panel')?.classList.remove('open');
  });

  const btnSend = el('chat-send');
  const input   = el('chat-input');
  const body    = el('chat-body');

  async function enviar() {
    const msg = input.value.trim();
    if (!msg) return;

    body.innerHTML += `<div class="chat-msg user">${escHtml(msg)}</div>`;
    input.value = '';
    body.scrollTop = body.scrollHeight;

    btnSend.disabled = true;
    const loading = document.createElement('div');
    loading.className = 'chat-msg bot';
    loading.innerHTML = '<i>Analizando solicitud...</i>';
    body.appendChild(loading);
    body.scrollTop = body.scrollHeight;

    try {
      const resp = await fetch(cfg.webAppUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ mensaje: msg })
      });
      const data = await resp.json();
      loading.innerHTML = data?.respuesta || 'Disculpa, no pude procesar la respuesta.';
    } catch (e) {
      loading.innerHTML = '<b>Aviso de conexión:</b> No se logró enlazar con el servidor. Verifica la publicación.';
    }

    btnSend.disabled = false;
    body.scrollTop = body.scrollHeight;
  }

  btnSend?.addEventListener('click', enviar);
  input?.addEventListener('keypress', e => { if (e.key === 'Enter') enviar(); });

  function escHtml(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
}