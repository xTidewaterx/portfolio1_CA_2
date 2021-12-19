const resultsContainer = document.querySelector(".blogPosts");
const resultsContainer1 = document.querySelector(".blogPosts1");
const resultsContainer2 = document.querySelector(".loading");
const resultsContainer3 = document.querySelector(".blogPosts3");
const resultsContainer4 = document.querySelector(".blogPosts4");


const url = "https://cryptocurrency.sciencemuseum.one/wp-json/wp/v2/posts?_embed";


const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

resultsContainer2.innerHTML ="<p class=loading> Loading...</p>";


async function fetchGames() {

    try {
        const response = await fetch(corsFix);
        const json = await response.json();

        console.log(json);

        resultsContainer2.innerHTML = "";

  
//I made three divs for the carousel, I separated them in JavaScript to make it more readable
     
 //div1

for (i = 0; i <4; i++)
 {
     resultsContainer1.innerHTML +=  ` <a href = "blogPostSpecific.html?id=${json[i].id}"  <div class ="blogPosts1"> 
                                     
     <div class = "cardColour">
                                
                                     <h2>${json[i].title.rendered}</h2>
                                     <img src ="${json[i]._embedded['wp:featuredmedia'][0].source_url}" />
                                    
                             
                               </div>   </a>`
 
     console.log(json[i].id)
    console.log( json[i].content.rendered)
   
 //removed this from the resultsContainer.innerHTML::   <p>${post.content.rendered}</p>
 //     <img src ="${json._embedded['wp:featuredmedia'][0].source_url}" />
   
 };
 //div1 STOP

 //div2

 for (n = 5; n <9; n++)
 {
     resultsContainer3.innerHTML +=  ` <a href = "blogPostSpecific.html?id=${json[n].id}"  <div class ="blogPosts3"> 
                                     
     <div class = "cardColour">
                                   
                                     <h2 class="blogPosts5">${json[n].title.rendered}</h2>
                                     <img src ="${json[n]._embedded['wp:featuredmedia'][0].source_url}" />
                                    
                             
                               </div>   </a>`
 
     console.log(json[n].id)
    console.log( json[n].content.rendered)
   
 //removed this from the resultsContainer.innerHTML::   <p>${post.content.rendered}</p>
 //     <img src ="${json._embedded['wp:featuredmedia'][0].source_url}" />
   
 };

 //div2 STOP

//div3



 for (j = 6; j <10; j++)
 {
     resultsContainer4.innerHTML +=  ` <a href = "blogPostSpecific.html?id=${json[j].id}"  <div class ="blogPosts4"> 
                                     
     <div class = "cardColour">
                                     <h2>${json[j].title.rendered}</h2>
                                     <img src ="${json[j]._embedded['wp:featuredmedia'][0].source_url}" />
                                
                                    
                             
                               </div>   </a>`
 

   
 //removed this from the resultsContainer.innerHTML::   <p>${post.content.rendered}</p>
 //     <img src ="${json._embedded['wp:featuredmedia'][0].source_url}" />
   
 };

 //div3 STOP

    }
    catch(error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }
    
};

fetchGames();


//  for (a = 4; a <8; a++) 
//for (b = 8; b <1; b++) 




//now : if you remove margin 0 auto and column-count they are all the same, they all sit in one column/vertical line above each other 
//we have now made three divs designed by the cardColour, now we give them all display flex or direction row, then we make them lay on top of each other with negativ margin
//same horizontal line, row direction, template row, then horizontal negativ margin











function rightCarouselButton() {
    if (document.getElementById("blogPosts1").style.display == "inline-block") {
   
    document.getElementById("blogPosts1").style.display = "none"
    document.getElementById("blogPosts3").style.display = "inline-block"
      
}   else if ( document.getElementById("blogPosts3").style.display == "inline-block")   { 
    
  

      
    document.getElementById("blogPosts3").style.display = "none"
    document.getElementById("blogPosts4").style.display = "inline-block"



}

  else if ( document.getElementById("blogPosts4").style.display = "display-block")   { 
    
  

      
 
    document.getElementById("blogPosts4").style.display = "none"
    document.getElementById("blogPosts1").style.display = "inline-block"



}





}








function leftCarouselButton() {
    if (document.getElementById("blogPosts1").style.display == "inline-block") {
   
    document.getElementById("blogPosts1").style.display = "none"
    document.getElementById("blogPosts4").style.display = "inline-block"
      
}   else if ( document.getElementById("blogPosts4").style.display == "inline-block")   { 
    
  

      
    document.getElementById("blogPosts4").style.display = "none"
    document.getElementById("blogPosts3").style.display = "inline-block"



}

  else if ( document.getElementById("blogPosts3").style.display = "display-block")   { 
    
  

      
 
    document.getElementById("blogPosts3").style.display = "none"
    document.getElementById("blogPosts1").style.display = "inline-block"



}





}











// went with another name to adress it, the inherent inspect quality of the product,

//we are now both hiding and overriding all of the names and belonging qualitiesss
//aøll oof iit adress communicate the same langugageeeee

    //modal just box to view only what you clicked

    //it is there, it is now here for the world, id inline-block, the grey inspect display none is present, it is forced down


    //all is here now, the equals there is another

    // the if else has many conditions, now we have made it continue through itself, there is always an alternative in our if elseeee

    //change .a in css Media