 //Object with methods and properties.
 function book(){
    return{
  title:prompt("Enter the title:"),
  author:prompt("Enter the author name:"),
  yearPublished:+prompt("Enter the year of publishing:"),
  readStatus:prompt("Enter your status of reading"),
  getSummary:function(){
    return "Title: "+this.title+"\nAuthor: "+this.author;
},
 toggleReadStatus:function(){
    return "Read Status: "+this.readStatus;
}
}}
function book1(){
   return {
  title:"KGF",
  author:"Prasanth Neil",
  yearPublished:2018,
  readStatus:"read",
   }
}
function book2(){
   return {
  title:"KGF2",
  author:"Prasanth Neil",
  yearPublished:2022,
  readStatus:"read",
   }
}
function book3(){
   return {
  title:"SALAAR",
  author:"Prasanth Neil",
  yearPublished:2022,
  readStatus: "notread",
   }
}
function book4(){
   return {
  title:"MASTER",
  author:"Lokesh Kanagaraj",
  yearPublished:2021,
  readStatus:"read",
   }
}
function book5(){
   return {
  title:"LEO",
  author:"Lokesh Kanagaraj",
  yearPublished:2023,
  readStatus:"notread",
   }
}
Library=new Array();
Library.push(book1());
Library.push(book2());
Library.push(book3());
Library.push(book4());
Library.push(book5());
//function to add an book.
function addBook(){
let book1 = book();  
Library.push(book1);
}
let n=+prompt("Enter the no of books to add");
for(let i=-0;i<n;i++){
    addBook();
}
// Removes the last book from the library using pop()
function removeLastBook(){
  Library.pop();
}
//Adds a book to the beginning of the library using unshift().
function addBookToFront(){
    let booktofirst=book();
    Library.unshift(booktofirst);
}
// Removes the first book from the library using shift().
function removeFirstBook(){
    Library.shift();
}
console.log(Library);
// Uses map() to return an array of all book titles in the library.
function getAllTitles(){
    let titles = Library.map(na=>na.title);
    return titles;
}
//  Uses filter() to return books written by a specific author.
function getBooksByAuthor(author1){
   let authors = Library.filter(na=>{
      if(author1==na.author){
          return na.author;
      }
   });
   console.log(authors);
}
//  Uses splice() to remove a book with a specific title from the library.
function removebookbytitle(BN){
   let lib = Library.findIndex(obj => obj.title===BN);
   if(lib!==-1){
    Library.splice(lib,1);
   }
}
//Uses filter() to return books based on their read status (read or unread).
function getBooksByReadStatus(rs){
  let rs1 = Library.filter(obj =>obj.readStatus === rs);
  return rs1;
}
// Uses slice() to get a portion of the library.
function getSubLibrary(start,end){
  let libslice = Library.slice(start,end);
  return libslice;
}
// Uses filter() and reduce() to count how many books were published before a given year.
let counting=0;
let result=[];
function getTotalBooksPublishedBefore(year){
    let counter = Library.filter(obj => {
   
     if(obj.yearPublished >= year){
        result.push(1);
     }
     console.log(result);
     return result;
    } );
    counting=result.reduce((sum,result)=>sum+result,0);  
    console.log("the number of books on and before that year: "+counting);
}
let sc = +prompt("Enter 1 to remove last book\nEnter 2 get books by read status\nEnter 3 to get sub library\nEnter 4 to add book to front\nEnter 5 to get titles of all books\nEnter 6 to get books by author name\nEnter 7 to remove books by title\nEnter 8 to get books by the year");
switch(sc){
case 1:
    removeLastBook();
    console.log(Library);
    break;
case 2:
    let rstatus = prompt("Enter your choice of read status:");
    console.log(getBooksByReadStatus(rstatus));
    break;
case 3:
    let start=prompt("Enter the start position:");
    let end = prompt("Enter the end position:");
    console.log(getSubLibrary(start,end));  
    break;
case 4:
    console.log(addBookToFront());
    break;
case 5:
     console.log(getAllTitles());
    break;
case 6:
     let writers= prompt("Enter a Author name:");
     console.log(getBooksByAuthor(writers));
    break;
case 7:
     let Bookname = prompt("Enter the Title to be removed:");
     removebookbytitle(Bookname);
     console.log(Library);
    break;
case 8:
    let year = +prompt("Enter the year:");
    getTotalBooksPublishedBefore(year);
    break;
default:
    console.log("Enter a valid case.");
}