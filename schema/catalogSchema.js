var db = require('../db/connect');
var Schema = db.Schema;

var CatalogSchema = new Schema({
    tel: {
        type: String
    },
    type: {
        type: Number
    },
    data:{
        type: Object
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = db.model('Catalog', CatalogSchema);