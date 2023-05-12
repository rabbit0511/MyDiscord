import os

folder_path = "img"  # 資料夾路徑
prefix = "card"  # 檔案名稱前綴

files = os.listdir(folder_path)
files.sort()  # 按照讀取順序排序檔案

for i, file_name in enumerate(files):
    file_extension = os.path.splitext(file_name)[1]  # 取得檔案副檔名
    new_file_name = f"{prefix}{i+1}{file_extension}"  # 新的檔案名稱
    os.rename(os.path.join(folder_path, file_name),
              os.path.join(folder_path, new_file_name))

print("檔案重新命名完成！")
