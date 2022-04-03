module.exports = function (router) {
    const customerController = require("../controllers/customerController");
    router.get("/customers", customerController.getAll);
    router.post("/customers", customerController.insert);
    router.get("/customers/:id", customerController.getById);
    router.delete("/customers/:id", customerController.delete);
    router.put("/customers/:id", customerController.update);
  };
  