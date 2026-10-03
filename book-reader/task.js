const book = document.querySelector('#book');
const fontSizes = document.querySelectorAll('.font-size');

fontSizes.forEach((fontSize) => {
  fontSize.addEventListener('click', (event) => {
    event.preventDefault();

    fontSizes.forEach((item) => {
      item.classList.remove('font-size_active');
    });

    fontSize.classList.add('font-size_active');

    book.classList.remove('book_fs-small', 'book_fs-big');

    const size = fontSize.dataset.size;

    if (size) {
      book.classList.add(`book_fs-${size}`);
    }
  });
});
