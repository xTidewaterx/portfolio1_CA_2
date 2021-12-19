const resultsContainer = document.querySelector(".allblogPosts");


const url = "https://cryptocurrency.sciencemuseum.one/wp-json/wp/v2/posts?_embed";  //https://www.sciencemuseum.one/wp-json/wc/v2 //https://www.sciencemuseum.one/wp-json/wc/v2 this is actually something, route

const proxy = "https://noroffcors.herokuapp.com/";


const corsFix = proxy + url;

resultsContainer.innerHTML ="<p class=loading> Loading...</p>";

async function fetchPosts() {
    
    try {

        const response = await fetch(corsFix);
        const json = await response.json();

     
        
        const array = json.url;

        const nameSpaces = json.namespaces;

  
     
     //I knew this all along, it was a new array, so a new set of square brackets were appropriate
        


     //I removed a console.log, suddenly, many thigns appeared directly
     
   
      //forEach copy past img src :: <img src="${json.results[i].background_image}"  alt="crypto Bitcoin BTC" />

  

      //for loops updates every time it goes all through something

//for(let j= 0; j<json[i]._embedded['wp:featuredmedia'].length; j++)

resultsContainer.innerHTML = "";



json.forEach(function(post) {



   var n;
    for (var n = 0; n <1; n++) 

    resultsContainer.innerHTML += `
    
    
<div class="cardColour">

   <a href = "blogPostSpecific.html?id=${post.id}"  class="blogPosts"> 
   


    
   

  

    <img src ="${post._embedded['wp:featuredmedia'][0].source_url}" />

    
    <h5>${post.title.rendered}</h5>


  

  <div class="text">
 

   
    


    </div></div></a>`

    console.log(post.id)
    console.log(post);
  
//removed this from the resultsContainer.innerHTML::   <p>${post.content.rendered}</p>

  
});


// 
//  <div class="loopDiv" style="background-image: url(${json[n]._embedded['wp:featuredmedia'][0].source_url});"></div>

}
catch(error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
}

}

fetchPosts();



const colours = ["red", "green", "blue", "orange"];

colours.forEach(function(item) {
    console.log(item);

});

//   // <img src="${json.results[i].background_image}"  alt="" />