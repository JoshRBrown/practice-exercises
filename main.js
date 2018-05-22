function printLinks() {
var $links = $('a');
$links.each(function (index, item){
    // console.log(item);
    $(item).on('click', function(event) {
        event.preventDefault();
        var $source = $(item).attr('href');
        console.log($source);
    })
})
}

// printLinks()


function kitty() {
    var $cat = $('<img>');
    $cat.attr('src', 'http://placekitten.com/200/300');
    $('body').append(cat);
}

// kitty();

function container() {
    var $newDiv = $('<div>');
    var $newPic = $('<img>');
    $newPic.attr('src', 'http://placekitten.com/200/300');
    $newDiv.append($newPic);
    $('body').append($newDiv);
}

// container();

function oogle() {
    var $linked = $('a');
    $linked.each(function(index, item){
        var $source = $(item).attr('href');
        $(item).on('click', function(event) {
            event.preventDefault();
            var $newDiv = $('<div>');
            var $newPic = $('<img>');
            $newPic.attr('src', $source);
            $('body').append($newDiv);
            $($newDiv).append($newPic);
        })
    })
}
oogle();