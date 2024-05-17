$(document).ready(function() {
    const apiUrl = 'https://api.github.com/orgs/microsoft/repos';
    const itemsPerPage = 10;
    let currentPage = 1;
    let repositories = [];
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

    function fetchRepositories() {
        $.ajax({
            url: apiUrl,
            method: 'GET',
            success: function(data) {
                repositories = data;
                displayRepositories(data);
                console.log(data);
            },
            error: function() {
                $('#error-message').text('Failed to retrieve data from GitHub. Please try again later.').show();
            }
        });
    }

    function displayRepositories() {
        const repoList = $('#repo-list');
        const repoPopular = $('#repo-popular');
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const reposToDisplay = repositories.slice(start, end);
        repoList.empty();
        repoPopular.empty();

        reposToDisplay.forEach(repo => {
            const repoElementleft = `
            <div class="w3-card-4 w3-margin w3-white">
                <div class="repo" style="background-color: black; color: white;">
                <img src="${repo.owner.avatar_url}" alt="Logo" style="width:5%">
                <div class="w3-container">
                    <h2 style="color: blue;"><b>${repo.name}</b></h2>
                    <h5>Date: <span class="w3-opacity">May 17, 2024</span></h5>
                    <p style="color: aqua;">${repo.description || 'No description available'}</p>
                    <div class="w3-row">
                        <div class="w3-col m8 s12">
                            <p><button class="w3-button w3-padding-large w3-white w3-border" onclick="window.open('${repo.html_url}', '_blank')">View on GitHub</button></p>
                        </div>
                        <div class="w3-col m4 w3-hide-small">
                            <p><span class="w3-padding-large w3-right"><img src="images/seenicon.png" style="width:15%"><b>Seen </b> <span class="w3-tag">${repo.watchers_count}</span></span></p>
                        </div>
                    </div>
                </div>
            </div>
            `;
            console.log("left");
            repoList.append(repoElementleft);
            /*<div class="w3-col m4 w3-hide-small">
                <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-badge">2</span></span></p>
              </div>*/
        });
        reposToDisplay.sort((a, b) => b.watchers - a.watchers);

        reposToDisplay.forEach(repo => {
            const repoElementright = `
            <div class="repo">
                <ul class="w3-ul w3-hoverable w3-white">
                    <li class="w3-padding-16">
                        <img src="${repo.owner.avatar_url}" alt="Logo" class="w3-left w3-margin-right" style="width:50px">
                        <span class="w3-small">${repo.name}</span><br>
                        <span>${repo.watchers} people seen this repository!</span>
                    </li>  
                 </ul>
            </div>
            `;
            console.log("right");
            repoPopular.append(repoElementright);
        });

        if (repositories.length <= end) {
            $('#see-more').hide();
            console.log("I");
        } else {
            $('#see-more').show();
            console.log("we");
        }
        
        if (currentPage === 1) {
            $('#see-less').hide();
            console.log("okay");
        } else {
            $('#see-less').show();
            console.log("notokay");
        }
        
    }
    $('#see-more').click(function() {
        currentPage++;
        displayRepositories();
        
    });
    $('#see-less').click(function() {
        currentPage--;
        displayRepositories();
        
    });
    fetchRepositories();
    
});


/*
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
});*/
