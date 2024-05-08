const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180, year: 1925, isbn: "9780743273565" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, year: 1960, isbn: "9780061120084" },
    { title: "1984", author: "George Orwell", pages: 328, year: 1949, isbn: "9780451524935" }
  ];
  
  function getInventory(books){
      let a = books[0].pages + books[1].pages + books[2].pages;
      let b = books[0].author + ", " + books[1].author + ", " + books[2].author;
      const oldestBook1 = books.reduce((oldest, current) => {
    return oldest.year < current.year ? oldest : current;
  });
  const newestBook1 = books.reduce((newest, current) => {
    return newest.year > current.year ? newest : current;
  });
      const all = [
    { totalBooks: books.length},
    { totalPages:  a},
    { author: b},
    {oldestBook: oldestBook1},
    {newestBook: newestBook1}
  ];
      
      
      return all;
  
  }
  
  console.log(getInventory(books));