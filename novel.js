window.addEventListener('scroll', function () {
    // 取得所有章節元素
    const chapters = document.querySelectorAll('.chapter');

    // 取得目前捲軸所在的位置
    const currentPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // 搜尋目前所在的章節
    let currentChapter;
    for (let i = 0; i < chapters.length; i++) {
        if (chapters[i].offsetTop <= currentPosition + 100) {
            currentChapter = chapters[i];
        } else {
            break;
        }
    }

    // 顯示目前所在的章節標題
    const currentChapterTitle = currentChapter.querySelector('.chapter-title').textContent;
    document.querySelector('.current-chapter').textContent = currentChapterTitle;
});
