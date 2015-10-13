module.exports = {
    notFound: function(res){
        return res.status(404).send('Resource not found!');
    },
    badRequest: function(res, err){
        return res.status(400).send("Bad request");
    }
}
