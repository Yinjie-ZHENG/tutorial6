# tutorial6
## In Server:
```python
cd tutorial6/server
npm install
screen mongod
screen npm start

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
