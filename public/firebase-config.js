// ============================================================
// Firebase Web — PG del Campo
// Proyecto: productos-globales-campo (mismo que el panel/tienda/tarjeta)
// ============================================================

const firebaseConfig = {
  apiKey:      "AIzaSyBfPmfE6axd_W0Z80b0L-Jbjy6q7l9_NTk",
  authDomain:  "productos-globales-campo.firebaseapp.com",
  databaseURL: "https://productos-globales-campo-default-rtdb.firebaseio.com",
  projectId:   "productos-globales-campo"
};

// La web lee el nodo 'config/empresa' (horarios, contacto, misión) que el
// panel administrativo publica al guardar. Si no hay conexión, se usan los
// valores por defecto de config.js.
