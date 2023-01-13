$(document).ready(function(){

    let movieID=location.search.split("=")[1];
    let movieUrl = `https://api.themoviedb.org/3/movie/${movieID}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`;

    $.get(movieUrl).done((data)=>{
            var details=$('<div></div>').addClass("container");
            details.html(`
                <img src="${"https://image.tmdb.org/t/p/w500/" + data.poster_path}" alt="" />
                     <h4 >${data.title}</h4>
                     <p>${data.overview}</p>
                `
                )
            
            details.appendTo("#movieData");
        
       
    });

});


