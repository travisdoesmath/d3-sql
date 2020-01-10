function parse(data, query) {
        var uInt8Array = new Uint8Array(data);
        var db = new SQL.Database(uInt8Array);
        contents = db.exec(query);
        var columns = contents[0].columns;
        var value = contents[0].values[0];
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

d3.sql = function(url, query) {
    let config = {
        locateFile: filename => `/${filename}`
    };

    return Promise.all([fetch(url).then(response => response.arrayBuffer()), initSqlJs(config)]).then(function([data, SQL]) {
        return parse(data, query);
    });
}
