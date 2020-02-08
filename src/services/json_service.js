const fs = require('fs')

module.exports.JsonService = class JsonService {
    getAll() {
        return [this.get(1)]
    }
    
    get(id) {
        let content = fs.readFileSync(__dirname + '/../../questions/' + id + '.json')
        let obct = JSON.parse(content)
        obct.id = id 

        return obct
    }

    add(question) {

    }

    delete(question) {

    }

    update(question) {
    
    }

}
