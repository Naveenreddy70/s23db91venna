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

    // VIEWS
// Handle a show all view
exports.kite_view_all_Page = async function(req, res) {
    try{
    thekites = await kite.find();
    res.render('kite', { title: 'kite Search Results', results: thekites });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle a show one view with id specified by query
exports.kite_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await kite.findById( req.query.id)
    res.render('kitedetail',
    { title: 'Kite Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle kite delete on DELETE.
exports.kite_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await kite.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    

       // Handle kite create on POST.
exports.kite_create_post = async function(req, res) {
    console.log(req.body)
    let document = new kite();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"kite_type":"goat", "cost":12, "size":"large"}
    document.kite_color = req.body.kite_color;
    document.kite_name = req.body.kite_name;
    document.kite_price = req.body.kite_price;
    try{
    let result = await document.save();
    res.send(result);
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
/*// Handle kite create on POST.
exports.kite_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: kite create POST');
};*/
/*
// Handle kite delete form on DELETE.
exports.kite_delete = function(req, res) {
res.send('NOT IMPLEMENTED: kite delete DELETE ' + req.params.id);
};
*/
// Handle kite update form on PUT.
exports.kite_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: kite update PUT' + req.params.id);
};
//Handle Costume update form on PUT.
exports.kite_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await kite.findById( req.params.id)
// Do updates of properties
if(req.body.kite_color)
toUpdate.kite_color = req.body.kite_color;
if(req.body.kite_name) toUpdate.kite_name = req.body.kite_name;
if(req.body.kite_price) toUpdate.kite_price = req.body.kite_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// for a specific Costume.
exports.kite_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await kite.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

