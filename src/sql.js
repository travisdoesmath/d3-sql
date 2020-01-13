var SQL = require('sql.js');

function parse(data, query) {
        var uInt8Array = new Uint8Array(data);
        var db = new SQL.Database(uInt8Array);
        var contents = db.exec(query);
        var columns = contents[0].columns;
        var newContents = contents[0].values.map(function(value) {
            var newValue = {};
            columns.forEach(function(column, i) {
                newValue[column] = value[i];
            });
            return newValue;
        })
        newContents.columns = columns;
        return newContents;
}

export default function(url, query) {
    var sql_config = {
        locateFile: filename => `../${filename}`
    };

    return Promise.all([fetch(url).then(response => response.arrayBuffer()), SQL.initSqlJs(sql_config)]).then(function([data, SQL]) {
        return parse(data, query);
    });
}