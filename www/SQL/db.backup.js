// nota: Code to Create Backup
$(document).ready(function () {
    console.log("doBackup")
    var db;
    var localDB = null;

    initDB()
    console.log($('#tb_pessoa > caption > div > span'))
    // → #1 Open connection with the die bank
    db = window.openDatabase("crudmob", "1.0", "crudmob", 6553600000)
    function initDB() {
        var shortName = 'crudmob';
        var version = '1.0';
        var displayName = 'crudmob';
        var maxSize = 6553600000; // Em bytes
        localDB = window.openDatabase(shortName, version, displayName, maxSize);
    }
    // → #2 Treat errors
    //Generic error handler
    function dbError(e) {
        console.log("SQL ERROR");
        console.dir(e);
    }
    function backup(table) {
        var def = new $.Deferred();
        db.readTransaction(function (tx) {
            tx.executeSql("select * from " + table, [], function (tx, results) {
                var data = convertResults(results)
                def.resolve(data)
            });
        }, dbError);

        return def;
    }
    // → #4 Create Backup
    els.doc.on("click", pag3.btnCriarBackup, function (e) {
        e.preventDefault();
        console.log("Begin backup process");
        // console.log($(this));
        $.when(
            backup("tb_curso"),
            backup("tb_alunos"),
        ).then(function (tb_alunos, tb_curso) {
            var data = {
                tb_alunos: tb_alunos,
                tb_curso: tb_curso
            }
            console.log('Amostra MOB-A5B')
            var serializedData = JSON.stringify(data, null, 2)
            // console.log(serializedData)
            $('#dispRegistro').text(serializedData)
            var obj = data,
                dataJson = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj))
                // salvarBackup = `<a href="data:${dataJson}" download="backup.json">Salvar backup</a>`
                console.log(dataJson)

            // !Create the file with the database backup

            var fileTransfer = new FileTransfer()
            console.log(fileTransfer)
            var uri = encodeURI('data:text/json;charset=utf-8,Amostra inicial 4')

            fileUrl = 'file:///storage/emulated/0/Android/data/br.com.crudsMob/backupMob-A1.json'
            fileTransfer.download(
                uri,
                fileUrl,
                function(entry) {
                    // let $imgResult           = document.getElementById('imgResult'),
                        // $echo_caminhoArqu   = $('#echo_caminhoArqu'),
                        // $status_downalod   = $('#status_downalod')

                    console.log("download completo: " + entry.toURL())
                    console.log('↓ imgResult ↓')
                    // console.log(imgResult + entry.toURL())

                    // $status_downalod.html("download completo: " + entry.toURL())
                    // $echo_caminhoArqu.html(imgResult + entry.toURL())
                    // $imgResult.src = entry.toURL()

                },
                function(error) {
                    console.log("download error source " + error.source);
                    console.log("download error target " + error.target);
                    console.log("download error code" + error.code);
                },
                false,
                {
                    headers: {
                        "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                    }
                }
            )
        })
    })
    //→ #5 Generic utility
    function convertResults(resultset) {
        var results = []
        for (var i = 0, len = resultset.rows.length; i < len; i++) {
            var row = resultset.rows.item(i)
            var result = {}
            for (var key in row) {
                result[key] = row[key];
            }
            results.push(result);
        }
        return results;
    }

    // function readSingleFile(e) {
    //     var file = e.target.files[0];
    //     if (!file) {
    //         return;
    //     }
    //     var reader = new FileReader();
    //     reader.onload = function (e) {
    //         var contents = e.target.result;
    //         displayContents(contents);
    //     };
    //     var d = new Date(file.lastModified);

    //     reader.readAsText(file);
    //     console.log(file)
    //     console.log(file.name)
    //     console.log()
    //     console.log(file.lastModifiedDate)

    //     els.idFileName.html('Nome: .................. '+file.name)
    //     els.idFileSize.html('Tamanho: ........... '+(file.size / 1024).toFixed(2) + ' KB')
    //     els.idFiledtMd.html('última mod: ....... '+d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear())
    // }

    // function displayContents(contents) {
    //     var element = document.getElementById('btn_importarBackup');
    //     element.textContent = contents;
    //     // console.log(contents)
    // }
    // document.getElementById('btn_importarBackup').addEventListener('change', readSingleFile, false);


}) // ready