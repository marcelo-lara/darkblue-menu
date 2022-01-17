module.exports = (app) => {

  // items
  const App = require("../controllers/app.controller.js");
  app.post("/api/items", App.create);
  app.get("/api/items", App.findAll);
  app.get("/api/items/:id", App.findOne);
  app.put("/api/items/:id", App.update);
  app.delete("/api/items/:id", App.delete);


};