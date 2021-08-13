function objectFilter(object, keys){
    return function(req, res, next){
        Object.keys(req[object]).forEach((key) => { 
           if(keys.indexOf(key) === -1){
             //delete key;  
             delete req[object][key];
           }
        });
        next();
};
}

module.exports = objectFilter;


