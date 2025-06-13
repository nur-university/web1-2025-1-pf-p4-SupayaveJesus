const vendedorPanel = document.querySelector('.vendedor-mode');
const compradorPanel = document.querySelector('.comprador-mode');
const vendedorBtn = document.getElementById('modo-vendedor');
const compradorBtn = document.getElementById('modo-comprador');

function showPanel(mode) {
  if (mode === 'vendedor') {
    vendedorPanel.classList.add('active');
    compradorPanel.classList.remove('active');
  } else {
    compradorPanel.classList.add('active');
    vendedorPanel.classList.remove('active');
  }
}

showPanel('comprador');

vendedorBtn.addEventListener('click', () => showPanel('vendedor'));
compradorBtn.addEventListener('click', () => showPanel('comprador'));
