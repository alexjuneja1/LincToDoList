var todosController = require("../controllers/todos_controller.js"),
    express = require("express"),
    apiRoutes = express.Router()

apiRoutes.route("/")
  .get(todosController.index)
  .post(todosController.create)
apiRoutes.route("/:id")
  .get(todosController.show)
  .put(todosController.update)
  .delete(todosController.destroy)

module.exports = apiRoutes
