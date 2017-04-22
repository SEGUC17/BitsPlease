BasicDBObject searchQuery = new BasicDBObject("product", product);
BasicDBObject theProductObj = new BasicDBObject();

List<Object> productDBList = new BasicDBList();

for (Product product : productArray) {
    DBObject productDBObject = new BasicDBObject();
    productDBObject.put("productName", product.productName);
    productDBObject.put("description", product.description);
    productDBObject.put("price", product.price;
    productDBObject.put("picture", product.picture;
    productDBList.add(productDBObject);
} 



theProductCollection.update(searchQuery, theProductObj);