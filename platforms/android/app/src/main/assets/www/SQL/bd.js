// document.addEventListener("DOMContentLoaded", function (event) {
    const bd = {
        localDB: null,
        init: () => {
            setTimeout(function () {
                // console.log('init bd')
                // bd.addListeners()
                bd.onInit()
                // console.log('datatime: '+getDtHoraFullBr())

            }, 1000);
        },
        onInit: function onInit() {
            try {
                if (!window.openDatabase) {
                    bd.updateStatus("Error: DB not supported");
                } else {
                    bd.initDB();
                    bd.createTables();
                    // bd.excluirTabela('tb_curso');
                }
            } catch (e) {
                if (e == 2) {
                    bd.updateStatus("Error: Invalid database version.");
                } else {
                    bd.updateStatus("Error: Unknown error " + e + ".");
                }
                return;
            }
        },
        initDB: function initDB() {
            var shortName = 'crudmob';
            var version = '1.0';
            var displayName = 'bd_crudmob';
            var maxSize = 6553600000 ; // in bytes
            return localDB = window.openDatabase(shortName, version, displayName, maxSize);
        },
        createTables: function createTables() {
            var query = 'CREATE TABLE IF NOT EXISTS tb_curso(' +
                'id NOT NULL PRIMARY KEY,' +
                'c_img 	longtext, ' +
                'c_curso TEXT(30),' +
                'c_duracao TEXT(30),' +
                'c_dt TEXT(50),' +
                'c_dtMod TEXT(150));'
            try {
                localDB.transaction(function (transaction) {
                    transaction.executeSql(query, [], bd.nullDataHandler, bd.errorHandler);
                    bd.updateStatus("tb_curso | status: ok");
                });
            } catch (e) {
                bd.updateStatus("Erro: Não é possível criar tb_curso 'itens' " + e + ".");
                return;
            }
        },
        excluirTabela: function excluirTabela(_table) {
            var query = 'DROP TABLE IF EXISTS ' + _table + ' ;';
            try {
                localDB.transaction(function (transaction) {
                    transaction.executeSql(query, [], bd.nullDataHandler, bd.errorHandler);
                    bd.updateStatus("Tabela '" + _table + "' status: Excluida.");
                });
            } catch (e) {
                bd.updateStatus("CÓD-Erro: Data base 'tb_pessoa' não excluida " + e + ".");
                return;
            }
        },
        errorHandler: function (transaction, error) {
            bd.updateStatus("Error: " + error.message);
            return true;
        },
        nullDataHandler: function (transaction, results) {},
        updateStatus: function updateStatus(status) {
            // document.getElementById('status').innerHTML = status;
            // console.log(status)
        }
    }
    bd.init()
// })