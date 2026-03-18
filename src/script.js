const produtos = [
  { id: 1, nome: 'Ração para Cães', preco: 50.0 },
  { id: 2, nome: 'Ração para Gatos', preco: 45.0 },
  { id: 3, nome: 'Brinquedo de Borracha', preco: 25.0 },
  { id: 4, nome: 'Casinha Pequena', preco: 200.0 }
];

const carrinho = [];

function renderizarProdutos() {
  const container = document.getElementById('produtos');
  produtos.forEach(produto => {
    const div = document.createElement('div');
    div.className = 'produto';
    div.innerHTML = `
      <h3>${produto.nome}</h3>
      <p>R$ ${produto.preco.toFixed(2)}</p>
      <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar</button>
    `;
    container.appendChild(div);
  });
}

function adicionarAoCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  carrinho.push(produto);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const itensLista = document.getElementById('itens-carrinho');
  itensLista.innerHTML = '';

  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    itensLista.appendChild(li);
  });

  const total = carrinho.reduce((soma, item) => soma + item.preco, 0);
  document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;

  const checkoutBtn = document.getElementById('checkout');
  checkoutBtn.disabled = carrinho.length === 0;
}

renderizarProdutos();
