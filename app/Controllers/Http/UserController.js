"use strict";

class UserController {
  index({ request, response, view }) {
    //
    return view.render("users");
  }
}

module.exports = UserController;
