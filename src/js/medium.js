var endpoint = "https://api.rss2json.com/v1/api.json?" +
  "rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40osclegal";
var mediumPosts;
var postsByPage = 3;

var feed = document.querySelector('#medium');
var pagination = document.querySelector('#medium-pagination');

function getPosts() {
    axios.get(endpoint).then(function(response) {
        mediumPosts = formatPosts(response.data.items);
        mountPage(mediumPosts[1]);
        mountPagination(mediumPosts);
    });
};

function formatPosts(posts) {
    var formattedPosts = {};
    var currentPage = 1;
    var counter = 1;

    posts.forEach(function(post) {
        if (formattedPosts[currentPage]) {
            formattedPosts[currentPage].push(post);
        } else {
            formattedPosts[currentPage] = [post];
        }

        if (counter === postsByPage) {
            currentPage += 1;
            counter = 0;
        }

        counter += 1;
    });

    return formattedPosts;
};

function mountPagination(feed) {
    Object.keys(feed).forEach(function(key) {
        var link = document.createElement('h4');
        link.classList.add('paginationMedium__number');

        link.innerHTML = key;

        link.addEventListener('click', function(ev) {
            mountPage(mediumPosts[key]);
        });

        pagination.appendChild(link);
    });
}

function mountPage(page) {
    feed.innerHTML = '';
    console.log(page)
    page.forEach(function(post) {
        var container = document.createElement('div');
        var innerContainer = document.createElement('a');
        var title = document.createElement('h4');
        var linkpage = document.createElement('a');
        var subtitle = document.createElement('div');

        linkpage.innerHTML = "Leia Mais +";

        container.classList.add('fm-post-wrapper');
        innerContainer.classList.add('fm-post');
        title.classList.add('fm-post-title');
        linkpage.classList.add('link-page');
        subtitle.classList.add('fm-post-sub-title');

        title.innerHTML = post.title;
        innerContainer.setAttribute('href', post.link);
        innerContainer.setAttribute('target', '_blank');
        linkpage.setAttribute('href', post.link);
        linkpage.setAttribute('target', '_blank');
        subtitle.innerHTML = post.description;

        innerContainer.appendChild(title);
        innerContainer.appendChild(subtitle);
        innerContainer.appendChild(linkpage);

        container.appendChild(innerContainer);

        feed.appendChild(container);
    });
};

getPosts();