from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time
options = Options()
options.chrome_executable_path = 'C:\chromedriver_win32\chromedriver.exe'
options.add_argument("headless")
options.add_argument("--log-level=3")
driver = webdriver.Chrome(options=options)


def Novel_Auto(i: int, RangeI: int):
    i += 4
    TextList = []
    TitleList = []
    for nowi in range(20):
        url = f"https://www.bg3.co/novel/pagea/tiandaotushuguan-hengsaotianya_{i+nowi}.html"
        driver.get(url)
        title = driver.find_element(By.CLASS_NAME, "title")
        titletext = title.find_element(By.TAG_NAME, 'h1')
        content = driver.find_element(By.CLASS_NAME, "content")
        TextPList = content.find_elements(By.TAG_NAME, 'p')
        TitleList.append(titletext.text)
        TextList.append([])
        for TextP in TextPList:
            if TextP:
                TextList[nowi].append(TextP.text)
    with open(f'{i-4}~{i-4+RangeI}novel.html', 'w', encoding='utf-8') as f:
        f.write('<!DOCTYPE html>\n')
        f.write('<html lang="zh-TW">\n\n')
        f.write('<head>\n')
        f.write('  <meta charset="UTF-8">\n')
        f.write(f'  <title>小說閱讀</title>\n')
        f.write('  <link rel="stylesheet" href="novel.css">\n')
        f.write('</head>\n\n')
        f.write('<body>\n')
        f.write('  <div class="current-chapter">Chapter 1</div>\n')
        f.write('  <nav class="sidebar">\n')
        f.write('    <ul class="menu">\n')
        for letj, letTitleText in enumerate(TitleList):
            f.write(
                f'      <li><a href="#chapter{letj}">{letTitleText}</a></li>\n')
        f.write('    </ul>\n')
        f.write('  </nav>\n')
        f.write('  <div class="container">\n')
        f.write('    <div class="navigation">\n')
        f.write(f'      <a href="{i-24}~{i-24+RangeI}novel.html">上一頁</a>\n')
        f.write(f'      <a href="{i+16}~{i+16+RangeI}novel.html">下一頁</a>\n')
        f.write('    </div>\n')
        f.write('    <h1>小說閱讀器</h1>\n')
        for leti, TextListFirst in enumerate(TextList):
            f.write(f'    <div class="chapter" id="chapter{leti}">\n')
            f.write(
                f'      <h2 class="chapter-title">{TitleList[leti]}</h2>\n')
            f.write('      <div class="chapter-content">\n')
            for Text in TextListFirst:
                f.write(f'        <p>{Text}</p>\n')
            f.write(' </div>\n')
            f.write(' </div>\n')
        f.write('    <div class="navigation">\n')
        f.write(f'      <a href="{i-24}~{i-24+RangeI}novel.html">上一頁</a>\n')
        f.write(f'      <a href="{i+16}~{i+16+RangeI}novel.html">下一頁</a>\n')
        f.write('    </div>\n')
        f.write(' </div>\n')
        f.write('  <script src="novel.js"></script>\n')
        f.write('</body>\n')
        f.write('</html>\n')
    print(f'{i-4}~{i-4+RangeI}novel.html 輸出')


next = 880
for NextI in range(57):
    NovelI = 19
    Novel_Auto(next, NovelI)
    next += 20
