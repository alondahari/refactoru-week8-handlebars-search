var data = require('../models/data.js')

var indexController = {
	search: function(req, res) {
		res.render('search', data);
	},
	searchWord: function(req, res){
		res.send(data.programming[req.body.formData].desc || data['search engines'][req.body.formData].desc)
	}
};

module.exports = indexController;