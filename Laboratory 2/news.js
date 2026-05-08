const newsArray = [
    {
        title: "dcopsdfowkef",
        date: "12-03-2026",
        status: "normal",
        text: "wdwefwef3g3f"
    },
    {
        title: "asdasdsdasd",
        date: "13-05-2025",
        status: "very-important",
        text: "fwfwdkfkwef"
    },
    {
        title: "dwefegegsdf",
        date: "14-03-2026",
        status: "important",
        text: "fwefwfwgergeg"
    }
];

const container = document.getElementById('news-container');

let allNewsHTML = "";

for(let i = 0; i < newsArray.length; i++ ) {
    let news = newsArray[i];
    
    let singleNewsHTML = `
        <div class="news-item ${news.status}">
            <div class="news-header">
                <h3 class="news-title">${news.title}</h3>
                <span class="news-date">${news.date}</span>
            </div>
            <p class="news-text">${news.text}</p>
        </div>
    `;

    allNewsHTML = allNewsHTML + singleNewsHTML;
}

container.innerHTML = allNewsHTML;

const headers = document.querySelectorAll('.news-header');

for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener('click', function() {
        let parentBlock = this.parentElement;
        parentBlock.classList.toggle('open');
    });
}