                                                                                                                                                                                                                        //intro text rolling.
var lines = $('.intro-text').text().split("\n");

var timer,
    displayLine = function(){
        var nextLine = lines.shift();
        if(nextLine){
            var newLine = $('<li class="line">' + nextLine + '</li>');
            $('#result').append(newLine);
            newLine.animate({ 'margin-left':0 }, 1100);
            timer = setTimeout(displayLine,700);
        }
    }
timer = setTimeout(displayLine,400);
