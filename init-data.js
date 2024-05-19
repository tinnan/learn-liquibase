db = connect("mongodb://localhost/product");

db.createUser({
    user: "productuser",
    pwd: "productpwd",
    roles: [
        {
            role: "readWrite",
            db: "product"
        }
    ]
});