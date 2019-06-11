/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   


const listItems = document.getElementsByClassName("student-item cf"); //get all the list items

const pageItems = 10; //set 10 items per page by default

const showPage = (list, page) => {
   const startIndex = (page * pageItems) - pageItems; //find out startIndex
   const endIndex = page * pageItems; //find out where to end in a page
   for(let i=0;i<list.length;i++){
      if(i>=startIndex && i< endIndex){
         list[i].style.display = "block" //if in range, display it with style.display property
      } else {
         list[i].style.display = "none" // if not range, not display it 
      }
   }  
}

//showPage(listItems, 1);

const appendPageLinks = (list) => {
   const pagination_check = document.querySelector('div.pagination'); //select pagination first 
   if(pagination_check){
      pagination_check.remove(); //if the pagination exist, remove it to avoid duplicate when call this function again 
   }
   const pagesNumber = Math.ceil(list.length / pageItems); //get the pages number needed round up to the upper number
   const pagination = document.createElement("div"); //create a div tag
   pagination.className = "pagination"; //assign the class to pagination

   const page = document.querySelector(".page"); //get the page class
   page.appendChild(pagination); //append newly created pagination to page

   const ul = document.createElement("ul"); //create ul tag
   pagination.appendChild(ul); //append ul to the div

   
   //create li, a, and ul and append them under div
   for(let i=0;i<pagesNumber;i++){
      let li = document.createElement("li"); //create a li tag
      let a = document.createElement("a"); //create an a tag
      ul.appendChild(li); //append created li tag to the parent ul tag
      li.appendChild(a); //append created a tag to the parent li tag
      a.setAttribute("href", "#"); //set tag a attribute as href = "#", means the link where take to the page top
      a.appendChild(document.createTextNode(i+1)); //create text for the pagination, the text start at 1 instead of 0
   }
   
   if(pagination && document.querySelectorAll("a")[0]){
   document.querySelectorAll('a')[0].className = "active";

   a1 = document.querySelectorAll('a');
   showPage(list, 1); //default page is page 1 and display first 10 people
   //loop through the page and change it based on cases
   
   for(let x=0;x<a1.length;x++){
      a1[x].addEventListener('click', (e) => {
         showPage(list, x+1);
         for(let y=0;y<a1.length;y++){
            document.querySelectorAll("a")[y].className = ""; //the inner loop remove all the active class on every a tag
         }
         e.target.className = "active";
      })
      
   }
}
   
   
}


//search bar func


const searchBar = (searchInputValue, list) => {
   const noResultCheck = document.querySelector('h1'); //get all h1 tag , this is show no search result back
      if(noResultCheck){
         noResultCheck.remove(); //remove the h1 tag so text not insert again and again
      }
   let array = []; //this array hold all search items
   for(let i=0;i<list.length;i++){
      list[i].style.display = "none"; //hide items not included in the search result
      if(
         (searchInputValue.value.length !== 0)
            &&
         list[i].textContent.toLowerCase().includes(searchInputValue.value.toLowerCase()) //containing word, search func
      ){
         array.push(list[i]); //add the search items to array
      }
      
   }
  

   //if none result returned

   if((searchInputValue.value.length === 0) || array.length === 0){ 
      const noResultCheck = document.querySelector('h1'); //get all h1 tag
      if(noResultCheck){
         noResultCheck.remove(); //remove it to avoid duplicate
      }
      const noResult = document.createElement('h1'); //create a h1 tag for the warning text
      const noResultText = document.createTextNode('No Result Returned! Happy Searching!'); //set text
      noResult.style.color = 'red'; //red is the text color
      noResult.appendChild(noResultText); //append the text to h1
      const search = document.querySelector("div.student-search"); //get the student-search class
      search.appendChild(noResult); //append the warning text below the search box
      appendPageLinks(list); //if no search item returned, just pagination it as normal
      
   } else {
      appendPageLinks(array); //throw the array in there
   }
   
}


 //extra feature, adding search bar
 const pageHeader = document.getElementsByClassName("page-header cf")[0]; //get the page-header
 const serachBar = document.createElement('div'); //create a div tag
 serachBar.className = 'student-search'; //assign className
 pageHeader.appendChild(serachBar); //appedn searchBar to pageHeader

 const searchButton = document.createElement('button'); //add a button
 const searchInput = document.createElement('input'); //add a input field

 searchInput.setAttribute('placeholder', 'Search for students...'); //set placeholder
 searchButton.appendChild(document.createTextNode('Search')); //create search text

 serachBar.appendChild(searchInput); //append input under search div
 serachBar.appendChild(searchButton); //append button under search div



 const searchInputValue = document.querySelector('input');
 const submit = document.querySelector('button');
 

 submit.addEventListener('click', (e) => {
   e.preventDefault();
   searchBar(searchInputValue, listItems); //if button clicked, passing the value and all items in the search Bar
   
 })
 
 searchInputValue.addEventListener('keyup', () => {
   searchBar(searchInputValue, listItems); //if input field is changed, passing the value and all items in the search Bar
   
 })


 appendPageLinks(listItems); //when the page load, the list presents by default with 10 items per page

