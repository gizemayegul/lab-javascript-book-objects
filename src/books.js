// Iteration 1 | Books Array

// Book 1
// title: The Old Man and the Sea
// pages: 128
// author: Ernest Hemingway
// details: {
//    language: English
//    description: One of Hemingway's most famous works, it tells the story of Santiago...
// }

// Book 2
// title: The Airbnb Story
// pages: 256
// author: Leight Gallagher
// details: {
//    language: English
//    description: This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...
// }

// Book 3
// title: Educated - A Memoir
// pages: 352
// author: Tara Westover
// details: {
//    language: English
//    description: Educated is an account of the struggle for self-invention...
// }

// Book 4
// title: The Art of Learning
// pages: 288
// author: Josh Waitzkin
// details: {
//    language: English
//    description: The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.
// }

// Your code here:

const booksArray = [
  {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description:
        "One of Hemingway's most famous works, it tells the story of Santiago...",
    },
  },
  {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description:
        "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
    },
  },
  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description:
        "Educated is an account of the struggle for self-invention...",
    },
  },
  {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description:
        "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
    },
  },
];

// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

// Iteration 3 | Delete Language
// Your code here:

booksArray.forEach((element) => {
  delete element.details.language;
});

// Iteration 4 | Estimated Reading Time
// Your code here:
//!math.floor is not working for the test
booksArray.forEach((element) => {
  element.readingTime = Math.ceil((element.pages * 500) / 90);
  // element["readingTime"] = Math.ceil((element.pages * 500) / 90);
});

// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionary = {
  "J. K. Rowling": [
    ["Harry Potter and the Philosopher's Stone", 223],
    ["Harry Potter and the Chamber of Secrets", 251],
    ["Harry Potter and the Prisoner of Azkaban", 317],
    ["Harry Potter and the Goblet of Fire", 636],
  ],
  "Neal Stephenson": [
    ["Cryptonomicon", 928],
    ["Anathem", 1008],
    ["Fall; or, Dodge in Hell", 896],
  ],
  "Malcolm Gladwell": [
    ["Outliers", 320],
    ["Blink", 287],
  ],
};
function booksByAuthor(dictionary) {
  // Your code here:
  let result = [];

  for (author in dictionary) {
    const authorBooks = dictionary[author];
    // console.log(authorBooks);

    authorBooks.forEach((item) => {
      const title = item[0];
      const pages = item[1];
      // console.log(item[0]);

      const newBook = {
        title: title,
        pages: pages,
        author: author,
      };

      result.push(newBook);
    });
  }

  return result;
}
//!Another solution
function booksByAuthor(dictionary) {
  // Your code here:
  let newObj = [];
  // console.log(dictionary);
  for (let key in dictionary) {
    // console.log(dictionary[key]);
    // console.log(dictionary[key][0][0], "title");
    // console.log(dictionary[key][0][1], "page");
    // console.log(dictionary[key][1][0], "title");
    // console.log(dictionary[key][1][1], "page");
    for (let i = 0; i < dictionary[key].length; i++) {
      newObj.push({
        title: dictionary[key][i][0],
        pages: dictionary[key][i][1],
        author: key,
      });
    }
  }
  return newObj;
}

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
  // Your code here:
  let sum = 0;
  booksArray.forEach((e) => (sum += e.pages));
  // console.log(sum);
  return sum / booksArray.length;
}

//!Another solution with for loop

// function averagePageCount(books) {
//   let totalPages = 0;

//   console.log("books", books);

//   for (let i = 0; i < books.length; i++) {
//     totalPages += books[i].pages;
//   }

//   const averagePages = totalPages / books.length;
//   return averagePages;
// }
