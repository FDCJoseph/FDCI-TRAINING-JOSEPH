
/*let elements = document.querySelectorAll('img');
let count = 0;
for (let elem of elements) {
    //alert(elem.src);
    count++;
}
console.log(count);*/

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
        console.log("yow");
        
        if (fullText.length > maxLength) {
            var x = 3;
            var y = x+1;
            console.log("not not okay");
            var trimmedText = fullText.substr(0, maxLength);
            var $readMoreButton = $('<a href="#" class="read-more-button">Read More</a>');
            // Append the read more button to the paragraph
            $paragraph.text(trimmedText).append($readMoreButton);
            
            $readMoreButton.click(function (e) {
                e.preventDefault();
                var currentText = $(this).text();
                console.log("oookay");
                if (currentText === "Read More") {
                    // Set paragraph text to fullText without removing the button
                    $paragraph.text(fullText).append($readMoreButton);
                    $(this).text("Read Less");
                    console.log("okay");
                } 
                else if(currentText === "Read Less"){
                    // Set paragraph text back to trimmedText without removing the button
                    $paragraph.text(trimmedText).append($readMoreButton);
                    $(this).text("Read More");
                    console.log("not okay");
                }
            });
        }
    });
});

$(document).ready(function() {
    var $carouselInner = $('.carousel-inner');
    var $carouselItems = $('.carousel-item');
    var totalItems = $carouselItems.length;
    var currentIndex = 0;
    var autoplayInterval;

    function showSlide(index) {
        if (index >= totalItems) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalItems - 1;
        } else {
            currentIndex = index;
        }
        var offset = -currentIndex * 100 + '%';
        $carouselInner.css('transform', 'translateX(' + offset + ')');
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds (3000 milliseconds)
    }

    // Function to stop autoplay
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Start autoplay on page load
    startAutoplay();

    // Stop autoplay when mouse enters the carousel
    $('.carousel').mouseenter(function() {
        stopAutoplay();
    });

    $('.carousel').mouseleave(function() {
        startAutoplay();
    });

    $('.carousel-control-next').click(function(e) {
        e.preventDefault();
        showSlide(currentIndex + 1);
    });

    $('.carousel-control-prev').click(function(e) {
        e.preventDefault();
        showSlide(currentIndex - 1);
    });

    // Keyboard navigation
    $(document).keydown(function(e) {
        console.log('Key pressed:', e.which);
        switch(e.which) {
            case 37: // left arrow key
                showSlide(currentIndex - 1);
                break;

            case 39: // right arrow key
                showSlide(currentIndex + 1);
                break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault();
    });
});
