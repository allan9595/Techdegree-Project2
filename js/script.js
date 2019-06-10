/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/


const listItems = document.getElementsByClassName("student-item cf");

const pageItems = 10; 

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

appendPageLinks(listItems);


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.