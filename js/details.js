

const detailContainer = document.querySelector(".game-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);






const id = params.get("id");

console.log(id);
console.log(id);




const url = "https://cryptocurrency.sciencemuseum.one/wp-json/wp/v2/posts/" + id + "?_embed";


console.log(url);

async function fetchGame() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        createHtml(json);
      
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
    
}

fetchGame();

//details is a shrotcut into the JSON which we use explicitly in our innerHTML directives as we discover below, details parameter in the parenthesis

function createHtml(json) {
    const title = document.title = "My Blog | " + json.title.rendered;
    detailContainer.innerHTML = ` 
    <h1>${json.title.rendered}</h1>
    <p>${json.content.rendered}</p>  
  
 
                                                      `;
                 
}


//for (i=0; i<json.length; i++)


//THIS WAS ITT, it was the url, I found the link to be broken around the URL, it kept coming back to the url, there was a random id, only connected to the url
//URL is the coinnection, some thing connected, the querystring needed to be separated URL
//URL connection broken

//weh av intertwined general JSON, we needed the url to break it off, we separated our function discrepency,m the url was in another polkace intervtwined elvium el int bb h

//there is separation between the t ex lines in our different vecinities