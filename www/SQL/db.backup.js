// nota: Code to Create Backup
$(document).ready(function () {
    console.log("doBackup")
    var db;
    var localDB = null;

    initDB()
    // console.log($('#tb_pessoa > caption > div > span'))
    //#region  Criar um bakcup
        // → #1 Open connection with the die bank
        db = window.openDatabase("crudmob", "1.0", "bd_crudmob", 6553600000)
        function initDB() {
            var shortName = 'crudmob';
            var version = '1.0';
            var displayName = 'bd_crudmob';
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
                console.log('Amostra MOB-B3')
                var serializedData = JSON.stringify(data, null, 2)
                // console.log(serializedData)
                $('#dispRegistro').text(serializedData)
                var obj = data,
                    dataJson = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj))
                    // salvarBackup = `<a href="data:${dataJson}" download="backup.json">Salvar backup</a>`
                    // console.log(dataJson)

                // !Create the file with the database backup

                var fileTransfer = new FileTransfer()
                console.log(fileTransfer)
                // var uri = encodeURI('data:text/json;charset=utf-8,Amostra inicial 4')
                var uri = dataJson
                fileUrl = 'file:///storage/emulated/0/Android/data/br.com.crudsMob/backupMob-A3.json'
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
    //#endregion


   //#region Selecinar e importar Backup
    // → Ler e selecionar arquivo
    function readSingleFile(e) {
        var file = e.target.files[0];
        if (!file) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            var contents = e.target.result;
            // console.log(contents)
            displayContents(contents);
        };
        var d = new Date(file.lastModified);

        reader.readAsText(file);

        console.log('Nome.........: '+file.name)
        console.log('Tamanho......: '+(file.size / 1024).toFixed(2) + ' KB')
        console.log('última mod...: '+d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear())
    }
    // → Mostrar o conteúdo do arquivo
    function displayContents(contents) {
        var element = document.getElementById('dispBackup');
        element.textContent = contents;
        // console.log(contents)
    }
    // → add ouvinte para chamar a função que seleciona e ler o arquivo
    document.getElementById('btn_importarBackup').addEventListener('change', readSingleFile, false);


    function insertToMultDataWebSqlFromJson() {
        var html = $('#dispBackup').text()
        var data = JSON.parse('['+html+']')
        console.log(data)

        db.transaction(function(tx) {
            var sql = "INSERT OR REPLACE INTO tb_alunos (id, c_img, c_nome, c_curso, c_dt, c_dtMod) " + "VALUES (?, ?, ?, ?, ?, ?)";
            console.log('Insirindo ou substiuindo banco de dados:');

            for(var i = 0; i < data[0].tb_alunos.length; i++) {
                var obj = data[0].tb_alunos[i];
                var params = [obj.id, obj.c_img, obj.c_nome, obj.c_curso, obj.c_dt, obj.c_dtMod];
                tx.executeSql(sql, params);
            }
            // console.log('Synchronization complete (' + i + ' items synchronized)');
            alert("Tabelas Alunos: Sincronização completa (" + i + " Itens sincronizados)")

        }, dbError);
        db.transaction(function(tx) {
            var sql = "INSERT OR REPLACE INTO tb_curso (id, c_img, c_curso, c_duracao, c_dt, c_dtMod) " + "VALUES (?, ?, ?, ?, ?, ?)";
            console.log('Insirindo ou substiuindo banco de dados:');

            for(var i = 0; i < data[0].tb_curso.length; i++) {
                var obj = data[0].tb_curso[i];
                var params = [obj.id, obj.c_img, obj.c_curso, obj.c_duracao, obj.c_dt, obj.c_dtMod];
                tx.executeSql(sql, params);
            }
            alert("Tabelas Cursos: Sincronização completa (" + i + " Itens sincronizados)")
        }, dbError);
    //    tb_pessoa.ler_tb_pessoas()
    //    tb_curso.ler_tb_cursoss()
    }

    $('#btn_restaurarBackup').click(function (e) {
        e.preventDefault();
        insertToMultDataWebSqlFromJson()
    });


   //#endregion

}) // ready