# [107-2] Web Programming Final

### 題目:
>(Group 32) 今天吃什麼 app(期中專題延伸)

### 一句話描述這個服務在做什麼
> 可以依照價位、主食、距離等條件塞選或隨機出符合條件的餐廳，並可以自行新增餐廳到資料庫

### 簡介:
> 1.可以透過主食、價位、距離等因素塞選想吃的餐廳，並提供隨機功能讓選擇性障礙者可以隨機出一間
> 2.可以新增新的餐廳到資料庫裡，並與他人共享使用
> 3.可以查看資料庫所有餐廳，並可以隨時在google map上面查看餐廳位置

### 使用操作方式
>在根目錄打開兩個terminal
>
>第一步驟:
>　第一個terminal:(後端)
>　npm install
>　npm run devstart
>
>第二步驟:
>　第二個terminal:(前端)
>　cd client
>　npm install
>　npm start
>
>完成上述動作後開啟browser，連到localhost://3000即可開始使用
>

### 其他說明
>1.在尋找餐廳時，必須要先按提交鍵才能觀看結果
>2.先開啟後端再開前端，不然socket會沒連到
>如果先開啟前端在開後端，則在後端開啟後前端要按一次重新整理
>3.http://localhost:3000/choose/choose_result/map
>在上述URL底下案重新整理，後端會crash(我找了很久還是找不出BUG)
>4.因為google map api完整版要付費，我用的是開發版的，會少一些功能，而且會有黑色浮水印
>5.Demo的時候我忘記在根目錄還有client資料夾npm install了

### 使用與參考之框架/模組/原始碼
>1.Express(後端)
>2.React app(前端)
>3.Mongoose(資料庫)

### 使用之第三方套件、框架、程式碼
>Google Map Api


### 專題製作心得
>因為這次期末我剛好有參加返鄉服務活動，從期末考考完就一直忙到現在還在上營哈哈，實在是無法全天宅在宿舍打CODE。期中的時候就想到說如果可以把GOOGLE MAP加進來會對使用者很有幫助，不用再花時間去查地圖，如果餐廳已在google map有評價或評分也可以順便看。因此我花了很大的時間在處理資料庫跟google map的api，然後其實google map的api做的還蠻前顯易懂的，只是我在官網只有找到html的api，弄了很久都沒辦法把他寫進react-app，後來才發現他有支援react-app= =。總之算是都只用了上課教的簡單的東西寫了一個蠻有用的網頁，這堂課雖然蠻硬的但真的學到很多!

### Demo影片連結
>https://youtu.be/sQNCIVTHa-c
>影片內忘了在根目錄和client資料夾npm install了
>然後正常來講google map會有灰色的浮水印，但我demo的時候不知道為什麼沒有

### Repo連結
>https://github.com/ChunYu-Wei/finalterm_WhatToEat_GoogleMapApi.git

### 每位組員之貢獻
>魏駿宇:All

### 對此課程之建議
>上課的demo，有時候講太快我會來不及做(不知道是不是我這樣)，建議可以再另外打一份步驟說明，讓沒跟上老師速度的也可以繼續做下去，不然有幾次我剌掉一個步驟就卡住無法繼續做下去了。

