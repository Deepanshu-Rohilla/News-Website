console.log("Randm");

// Iitialise the variables
let apikey = '8a04890234a0468da6ed0a9654d9a9f5';
// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');
// Create an ajax GET request
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&apikey=${apikey}`, true);

xhr.onload = function(){
    if(this.status===200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        console.log(articles);
        articles.forEach(function(element, index) {
            let news = `<div class="card">
                <div class="card-header" id="heading${index}">
                    <h2 class="mb-0">
                        <button class="btn btn-link collapsed btn-block text-left" type="button" data-toggle="collapse"
                            data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            <b>Breaking News ${index+1} : </b> ${element['title']}
                        </button>
                    </h2>
                </div>

                <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}"
                    data-parent="#newsAccordion">
                    <div class="card-body">${element['content']}. <a href = "${element['url']}" target = "_blank">Read more here</a></div>
                </div>
            </div>`
            newsHtml+=news;
        
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else{
        console.log('Some error occured');
    }
}
xhr.send();


