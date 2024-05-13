
let elements = document.querySelectorAll('img');
let count = 0;
for (let elem of elements) {
    //alert(elem.src);
    count++;
}
console.log(count);

/*$("body img");
$('body').find("bug");

$(document).ready(function(){
    //$("image").attr('')
    $('button').click(function(){
        $('image1').toggle('fast');
        $('image2').toggle('fast');
    });
});*/

$(document).ready(function(){
    $('.t_center p').each(function(){
        var $paragraph = $(this);
        var maxLength = 100;
        var fullText = $paragraph.text();
        
        if (fullText.length > maxLength) {
            var trimmedText = fullText.substr(0, maxLength);
            var $readMoreButton = $('<a href="#" class="read-more-button">Read More</a>');
            // Append the read more button to the paragraph
            $paragraph.empty().text(trimmedText).append($readMoreButton);
        
            $readMoreButton.click(function (e) {
                e.preventDefault();
                var currentText = $(this).text();
                if (currentText === "Read More") {
                    // Set paragraph text to fullText without removing the button
                    $paragraph.text(fullText);
                    $paragraph.append($readMoreButton);
                    $(this).text("Read Less");
                } else {
                    // Set paragraph text back to trimmedText without removing the button
                    $paragraph.text(trimmedText);
                    $paragraph.empty().text(trimmedText).append($readMoreButton);
                    $(this).text("Read More");
                }
            });
        }
    });
});

//console.log(document.querySelector('img').attributes.alt);
