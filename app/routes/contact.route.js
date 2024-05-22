const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

// http://localhost:3000/ thì sẽ có 3 phương thức findAll, create, deleteAll
router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll);

router.route("/favorite")
    .get(contacts.findAllFavorite);

router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);

module.exports = router;