var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "synerzip",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  {
      console.log("Connected!");
  }
});

//create db

/*con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  //table create
  var sql = "CREATE TABLE product (name VARCHAR(25), color VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");

  });
  var sql = "INSERT INTO product (name, color) VALUES ?";
  
  var values = [
    ['AC', 'white'],
    ['freeze', 'blue'],
    
  ];
  con.query(sql,[values] ,function (err, result) {
    if (err) throw err;
    console.log("2   record inserted");
  });

  
  con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  con.query
  ("SELECT * FROM product", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  }); 
    /*
  con.connect(function(err) {
    if (err) throw err;
    con.query1("SELECT * FROM customers ORDER BY name", function (err, result1) {
      if (err) throw err;
      console.log(result1);
    });
    var sql = "DELETE FROM product WHERE address = 'NAshik'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
    
});

var sql = "UPDATE customers SET address = 'Kolhapur' WHERE address = 'Pune'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
con.query
  ("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);*
  });
});
var sql = "SELECT * FROM customers LIMIT 3 OFFSET 1";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });*/
    
  var sql = "SELECT c.name AS cust, p.name AS pname FROM customers c left JOIN product p ON p.name= c.name";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
