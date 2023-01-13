
$(document).ready(function(){
    let imgPath="https://image.tmdb.org/t/p/w500/";
    let all= "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
    $.get(all,function(data){
    data.results.forEach(movie => {
        const bttnbox=$('<div></div>').addClass("movie");
        bttnbox.html(`
                <a href="./DetailsPage.html?id=${movie.id}">
                <img src="${imgPath + movie.poster_path}" alt="Move" />
                <h4 >${movie.title}</h4>
                </a>`
            )

      bttnbox.appendTo("#main");
      
    });
    });
  
  
  
  });
   