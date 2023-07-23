
window.addEventListener('scroll', function () {
    const chapters = document.querySelectorAll('.chapter');
    const currentPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let currentChapter;

    for (let i = 0; i < chapters.length; i++) {
        if (chapters[i].offsetTop <= currentPosition + 100) {
            currentChapter = chapters[i];
        } else {
            break;
        }
    }

    const currentChapterTitle = currentChapter.querySelector('.chapter-title').textContent;
    document.querySelector('.current-chapter').textContent = currentChapterTitle;
});