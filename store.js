const storeService = (function(){

    const urlArr = ["http://localhost:5555/1122/1team.json","http://localhost:5555/1122/2team.json","http://localhost:5555/1122/3team.json"]

    let storeArr = []

    function loadJson(index, callback){

        $.getJSON(urlArr[index], function(data){
            storeArr = data
            callback(data)
        })

    }

    function getStore(sno){
        return storeArr.filter(s => s.sno === sno)[0]
    }

    return {loadJson, getStore}

})()
