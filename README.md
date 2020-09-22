This project is a page where I can collect 
all of the products and projects created by
friends and family.  

New cards or items can be added to the list by 
adding a new object to the item_data.json file 
with the following format:

```javascript
[
  {
    "id": int,
    "title": string,
    "owner": string,
    "description": string,
    "imgFilename": string,     //files reside in src/assets/img/
    "urlDescription": string,  //text of the link button
    "url": string,             //url to project website or store to purchase item(s)
    "tags": [string]
  }
]
```

