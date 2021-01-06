export class Book {
  constructor(title, author, description, pages, currentPage, read) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = currentPage;
    this.read = read;
  }
  
  readBook(page){
    if(page<1 || page>this.pages){
      return 0
    }else if(page>=1 && page<this.pages){
      this.currentPage = page
      return 1
    } else if(page === this.pages){
      this.currentPage = page
      this.read = true
      return 1
    } 
  }
}

const bookOne = new Book("OneBook", "A", "No", 451, 251, false);
const bookTwo = new Book("AnOtherBook", "B", "description", 500, 498, false);
const bookThree = new Book("OneMoreBook", "C", "needed", 1000, 890, false);
 
export const books = [bookOne, bookTwo, bookThree];



