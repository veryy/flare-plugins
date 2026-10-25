const form = document.querySelector('form');
if (form) {
  const params = new URLSearchParams(location.search);
  const query = (params.get('q') || '').slice(0, 200).toLocaleLowerCase();
  const category = params.get('category') || '';
  const author = params.get('author') || '';
  form.elements.q.value = (params.get('q') || '').slice(0, 200);
  form.elements.category.value = category;
  const cards = Array.from(document.querySelectorAll('[data-plugin]'));
  for (const card of cards) card.hidden = !!((category && card.dataset.category !== category) || (author && card.dataset.author !== author) || !card.dataset.search.toLocaleLowerCase().includes(query));
  const count = cards.filter(card => !card.hidden).length;
  const grid = document.querySelector('.grid');
  if (grid && cards.length) {
    grid.previousElementSibling.textContent = grid.previousElementSibling.textContent.replace(/^\d+/, String(count));
    if (!count) {
      const empty = document.createElement('p');
      empty.textContent = '没有符合条件的插件，试试其他关键词或分类。';
      grid.append(empty);
    }
  }
}