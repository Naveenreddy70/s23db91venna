var kite = require('../models/kite');
// List of all kites
exports.kite_list = async function(req, res) {
    try{
    thekites = await kite.find();
    res.send(thekites);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific kite.
exports.kite_detail = function(req, res) {
res.send('NOT IMPLEMENTED: kite detail: ' + req.params.id);
};
// Handle kite create on POST.
exports.kite_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: kite create POST');
};
// Handle kite delete form on DELETE.
exports.kite_delete = function(req, res) {
res.send('NOT IMPLEMENTED: kite delete DELETE ' + req.params.id);
};
// Handle kite update form on PUT.
exports.kite_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: kite update PUT' + req.params.id);
};