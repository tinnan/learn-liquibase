db = connect("mongodb://localhost/admin");

db.createUser({
    user: "productadmin",
    pwd: "adminpwd",
    roles: [
        {
            role: "dbAdmin",
            db: "product"
        },
        {
            role: "readWrite",
            db: "product"
        }
    ]
});

db.createUser({
    user: "productuser",
    pwd: "userpwd",
    roles: [
        {
            role: "readWrite",
            db: "product"
        }
    ]
});