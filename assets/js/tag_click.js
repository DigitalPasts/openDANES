const tagButtons = document.querySelectorAll('.tag');
const cards = document.querySelectorAll('.card-body');
cards.forEach(card => {
  card.classList.add('visible')
})

tagButtons.forEach(button => {
  button.addEventListener('click', () => {
      tagButtons.forEach(tagButton => {
      tagButton.classList.remove('clicked');
    });
    button.classList.add('clicked')
    const tag = button.textContent;

    if (tag === "All") {
      cards.forEach(card => {
        card.classList.remove('invisible')
        card.classList.add('visible')
      })
    } else {
      cards.forEach(card => {
        const tags = card.querySelector('.page-tags').textContent.trim().split(', ');
        if (tags.includes(tag)) {
          card.classList.remove('invisible')
          card.classList.add('visible')
        } else {
          card.classList.remove('visible')
          card.classList.add('invisible')
        }
      });
    }
  });
});