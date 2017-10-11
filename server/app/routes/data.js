var fs = require('fs');

function filereader(fsRef, path) {
    return new Promise(function(resolve, reject) {
        fsRef.readFile(path,'utf8',function(e,d){
            if(e) reject('E R')
            else resolve(JSON.parse(d));
        })
    })
}



function getServiceList(req, res) {

    var servicePromise = filereader(fs, './app/models/services.json')
        .then((response)=>{
            console.log("GET", './app/models/services.json')
            // console.log(response);
            // res.json( response );
            return response;
        })

    if(req.query.currentCategoryId && req.query.currentServiceId){
        servicePromise.then((response)=>{
            res.json( response.services[req.query.currentCategoryId] );
        });
    } else {
        servicePromise.then((response)=>{
            res.json( response );
        });
    }

}

function getMaintenanceMenu(req, res){
    filereader(fs, './app/models/maintenance-menu.json')
        .then((response)=>{
            // console.log(response);
            res.json( response );
        })
}

function getUser(req, res){
    filereader(fs, './app/models/user.json')
        .then((response)=>{
            // console.log(response);
            res.json( response );
        })
}

module.exports = { getServiceList, getMaintenanceMenu, getUser };