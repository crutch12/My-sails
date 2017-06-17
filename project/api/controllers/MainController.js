/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function(req, res) {
      var user = {
        login : 'asdasd',
      };
      res.render('main/index', { user: user});
    },

    login: function(req, res) {
      var user = {
        login : 'asdasd',
      };
      res.redirect('back');
      // res.render('main/index', { user: us});
    },
};
