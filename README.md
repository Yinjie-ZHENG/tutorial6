# tutorial6
## In Server:
```python
cd tutorial6/server
npm install
screen mongod
screen npm start

#
mongo issuetracker --eval "db.issues.remove({})"
mongo issuetracker scripts/init.mongo.js
```


## In Client/Powershell
```python
#Go to the client folder
cd C:\Users\RANGER\Desktop\IT5007\client
npm install
react-native run-android
```

If you want to check whether my mobile program can solve the case when server data has changed, you can:
# Test if the database change
## In Server: remove all data
``` python
#This command is to remove all the data in database
mongo issuetracker --eval "db.issues.remove({})"
##This command is to load the data in database
mongo issuetracker scripts/init.mongo.js
```

