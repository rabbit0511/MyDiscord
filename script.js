document.addEventListener("DOMContentLoaded", function () {
    fetch("novel.json")
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error("无法加载小说内容。");
        })
        .then(function (data) {
            var chapters = data;
            var chapter1Content = chapters[0][0];
            var chapter2Content = chapters[0][1];
            var chapter1Title = chapters[1][0];
            var chapter2Title = chapters[1][1];

            // 在页面上显示内容
            document.getElementById("chapter1Title").textContent = chapter1Title;
            document.getElementById("chapter1Content").textContent = chapter1Content[0] + " " + chapter1Content[1];
            document.getElementById("chapter2Title").textContent = chapter2Title;
            document.getElementById("chapter2Content").textContent = chapter2Content[0] + " " + chapter2Content[1];
        })
        .catch(function (error) {
            console.log(error);
            alert(error.message);
        });
});
