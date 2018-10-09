先安裝好node、json-server 使用npm install 安裝必要的lib  
在data裡面放置需要的檔案  
ex.  
data/test.json  
實際run起來會是  
localhost:8899/api/test  
  
data/Sport/GetAllSport  
api的路徑會是  
localhost:8899/api/Sport/GetAllSport 

-------------------------------------   

關閉json server需要用ctrl+c  
如果port被佔用  
使用cmd -> netstat -ano | findstr :8899  找出佔用8899 port的pid  
再用以下指令刪除  
taskkill /PID {{PID}} /F  

----------------------------------  

將run.bat複製到桌面 就能快速開啟json server