```javascript
//Correct use of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{counter: 1}})
```