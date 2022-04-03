const db = require("../common/config");

const Customer = (customer) => {
  //this.id = Customer.id;
  //this.tenCustomer = Customer.tenCustomer;
  //this.theLoai = Customer.theLoai;
  //this.nhaSX = Customer.nhaSX;
  //this.noiDung = Customer.noiDung;
  //this.gia = Customer.gia;
};

Customer.getById = (id, callback) => {
  const sqlString = "SELECT * FROM customer WHERE customerId = ? ";
  db.query(sqlString, id, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(result);
  });
};

Customer.getAll = (callback) => {
  const sqlString = "SELECT * FROM customer ";
  db.query(sqlString, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(result);
  });
};

Customer.insert = (Customer, callBack) => {
  const sqlString = "INSERT INTO customer SET ?";
  db.query(sqlString, Customer, (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack({ id: res.insertId, ...Customer });
  });
};

Customer.update = (Customer, id, callBack) => {
  const sqlString = "UPDATE customer SET ? WHERE customerId = ?";
  db.query(sqlString, [Customer, id], (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack("cập nhật khách hàng id = " + id + " thành công");
  });
};

Customer.delete = (id, callBack) => {
  db.query(`DELETE FROM customer WHERE customerId = ?`, id, (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack("xóa khách hàng id = " + id + " thành công");
  });
};

module.exports = Customer;
