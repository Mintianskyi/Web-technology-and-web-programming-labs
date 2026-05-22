
const newsArray = [
    { 
        title: "ikoijijoidicsodijoiwef", 
        date: "2026-05-20", time: "10:00", status: "important", 
        text: "kdwfijcowiefwifiwdf" 
    },
    { 
        title: "edkkwefjnwefjnwie", 
        date: "2026-05-15", time: "12:00", status: "important", 
        text: "wekdwkefnwoenfowenfiwenf" 
    },
    { 
        title: "wekfdnwjefnwojenfwijef", 
        date: "2026-05-18", time: "09:15", status: "normal", 
        text: "wefmwkfwoenfnfi2nfonf" 
    }
];

newsArray.sort(function(a, b) {
    let momentA = moment(a.date + " " + a.time);
    let momentB = moment(b.date + " " + b.time);
    
    return momentB - momentA; 
});

let visibleNewsCount = 2; 

function renderSidebar() {
    let sidebar = document.getElementById('news-sidebar-list');
    sidebar.innerHTML = ""; 

    for (let i = 0; i < visibleNewsCount; i++) {
        if (i >= newsArray.length) break; 

        let news = newsArray[i];
        let boldStyle = (news.status === "important") ? "important-news" : "";

        let prettyDate = moment(news.date).format("DD.MM.YYYY");

        sidebar.innerHTML += `
            <div class="sidebar-item ${boldStyle}" onclick="showNewsInCenter(${i})">
                <h4>${news.title}</h4>
                <span class="news-time">${prettyDate} | ${news.time}</span>
            </div>
        `;
    }

    let loadMoreBtn = document.getElementById('load-more-btn');
    if (visibleNewsCount >= newsArray.length) {
        loadMoreBtn.style.display = "none";
    } else {
        loadMoreBtn.style.display = "block";
    }
}

function showNewsInCenter(index) {
    let news = newsArray[index];
    let centerBlock = document.getElementById('news-center');

    let prettyDate = moment(news.date).format("DD.MM.YYYY");

    centerBlock.innerHTML = `
        <h2>${news.title}</h2>
        <p class="center-date">Опубліковано: ${prettyDate} о ${news.time}</p>
        <div class="center-text">${news.text}</div>
    `;
}

document.getElementById('load-more-btn').onclick = function() {
    visibleNewsCount += 2; 
    renderSidebar(); 
};

renderSidebar();
showNewsInCenter(0);