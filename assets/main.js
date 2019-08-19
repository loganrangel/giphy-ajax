    
    var topics = ["Stephen Colbert","Jimmy Kimmel","Seth Meyers","Trevor Noah","Jimmy Fallon","James Corden","Conan O'Brien","Chelsey Handler","Jay Leno","John Oliver","Busy Phillips","Samantha Bee"];

    
    
    function renderButton() {
        $("#btn-space").empty();
        for (var i = 0; i < topics.length; i++) {
            var btn = $("<button>").text(topics[i]);
            btn.attr("data-name", topics[i]);
            $("#btn-space").append(btn)
        }
    };


    renderButton();

    //-------------------------
    $("#btn-space").on("click", "button", function () {
        $("#gifs-space").empty();

        var userInput = $(this).attr("data-name");
        var queryURL =  'https://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=c3kAAQaWZoLfdPmwyoxk5TOW7fCrVKuV&limit=10';
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function() {
            var gifPreview = $("<img>").attr("src", queryURL);
            $("#gifs-space").append(gifPreview);    
                });
   
            
        });
    
