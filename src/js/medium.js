var endpoint = "https://api.rss2json.com/v1/api.json?" +
  "rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40associacao.abrapsico";

var mediumPosts;
var postsByPage = 3;



var feed = document.querySelector('#medium');
var pagination = document.querySelector('#medium-pagination');
let figure = document.querySelector('.fm-post-sub-title');

function getPosts() {
    axios.get(endpoint).then(function(response) {
        mediumPosts = formatPosts(response.data.items);
        if (Object.keys(mediumPosts).length > 0){
            mountPage(mediumPosts[1]);
            mountPagination(mediumPosts);
        }
        else {
            // document.querySelector('.section--blog_container--blog').style.display = 'none'
            let blog = document.querySelector('.container--main_section--blog');
            blog.style.display = 'flex'
            blog.style.flexDirection = 'column'
            notPosts(blog);
        }
    });
};

function notPosts(el) {
    // -------- criando elementos --------
    let eleMensageNotPosts = document.createElement('p');
    let txtNotPosts = document.createTextNode('Não há posts');
    let boxNotPosts = document.createElement('div');

    // -------- estilizando elementos --------
    eleMensageNotPosts.style.color = 'grey'
    eleMensageNotPosts.style.opacity = '0.6'
    eleMensageNotPosts.style.fontSize = '1.5rem' ;
    eleMensageNotPosts.style.fontFamily = 'NunitoSans Bold';

    boxNotPosts.style.width = '100%';
    boxNotPosts.style.height = '30vh';
    boxNotPosts.style.display = 'flex';
    boxNotPosts.style.justifyContent = 'center';
    boxNotPosts.style.borderRadius = '50px';

    // -------- renderizando elementos --------
    eleMensageNotPosts.appendChild(txtNotPosts)
    boxNotPosts.appendChild(eleMensageNotPosts)
    el.appendChild(boxNotPosts);
}

function formatPosts(posts) {
    var formattedPosts = {};
    var currentPage = 1;
    var counter = 1;
    console.log(posts)
    
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

        if (key === '1') {
            link.classList.add('selected')
        }

        link.addEventListener('click', function() {
            const selectedItem = document.querySelector('.selected');
            if (link !== selectedItem) {
                mountPage(mediumPosts[key]);
                if(selectedItem) { selectedItem.classList.remove('selected'); }
                link.classList.add('selected');
            }
        });
        
        pagination.appendChild(link);
    });
}

function mountPage(page) {
    feed.innerHTML = '';
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
