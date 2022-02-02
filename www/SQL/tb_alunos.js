const tbAls = {
    localDB: null,
    doc: $(document),
    cardPessoas     : $('.pagInit > main > .container_cardPessoas'),
    posEl           : $('.pagInit > main > .container_cardPessoas > span'),
    dataId          : $('.menuOptsDt > #dataId '),
    btnDeltarCr     : '.menuOptsDt > #btnDeltar ',
    btnSalvar       : '.pagAddAluno > footer > .btnSalvar',
    btnAtulizar     : '.pagViewEdit > footer > #btnAtulizar',
    in_dtimeFullBr  : getDtHoraFullBr(),
    init: () => {
        setTimeout(function () {
            // console.log('init tb_alunos')
            tbAls.addListeners()
            tbAls.onInit()

            tbAls.mostrar_tbAlunos()
            // console.log('Testea hj')
            // console.log(pag2.in_imgSrc)
            // console.log(pag2.in_nome)
            // console.log(pag2.in_curso)
            // console.log(pag2.in_dtBr)
        }, 500);
    },
    addListeners: () => {
        tbAls.doc.on('click', tbAls.btnSalvar,function(e){
            e.preventDefault();
            tbAls.salvar()
        });
        tbAls.doc.on('click', tbAls.btnAtulizar,function(e){
            e.preventDefault();
            let id = app_p1.in_gID.val()
            tbAls.atualizar(id)
        });
        tbAls.doc.on('click', tbAls.btnDeltarCr,function(e){
            e.preventDefault();
            let id = tbAls.dataId.val()
            console.log('id...: '+id)
            tbAls.deletarPessoa(id)
        });
    },
    onInit: function onInit() {
        try {
            if (!window.openDatabase) {
                bd.updateStatus("Error: DB not supported");
            } else {
                bd.initDB();
                tbAls.mostrar_tbAlunos()
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
        var shortName = 'mercado';
        var version = '1.0';
        var displayName = 'bd_mercado';
        var maxSize = 65536; // in bytes
        return localDB = window.openDatabase(shortName, version, displayName, maxSize);
    },
    salvar: function salvar() {
        if (pag2.in_nome.val() == "") {
            bd.updateStatus("Error: Campo(s) Nome são requeridos!");
            alert("Error: Campo(s) Nome são requeridos!")
        } else {
            if (confirm("Confirme para salvar")) {
                var query = "insert into tb_alunos (" +
                "id," +
                "c_img," +
                "c_nome," +
                "c_curso," +
                "c_dt, c_dtMod) VALUES (" +
                "?, " +
                "?, " +
                "?, " +
                "?, " +
                "?, ?);";
            try {

                localDB.transaction(function (transaction) {
                    console.log(getDtHoraFullBr())
                    transaction.executeSql(query, [gID.gerarID(),
                        pag2.in_imgSrc.val(),
                        pag2.in_nome.val(),
                        pag2.in_curso.val(),
                        pag2.in_dtBr.val(),
                        getDtHoraFullBr()], function (transaction, results) {
                        if (!results.rowsAffected) {
                            bd.updateStatus("Error: Registro não inserido");
                            alert("Error: Registro não inserido")
                        } else {
                            bd.updateStatus("Inserido com sucesso! ID: " + results.insertId);
                            alert("Inserido com sucesso! ID: " + results.insertId)
                            tbAls.mostrar_tbAlunos()
                            // tbAls.tratarPagForms(false, true)
                        }
                    }, bd.errorHandler);
                });
            } catch (e) {
                bd.updateStatus("Erro: Não é possível executar uma inserção " + e + ".");
                alert("Erro: Não é possível executar uma inserção " + e + ".")
            }
            } else{
            }
        }
    },
    atualizar: function atualizar(_id) {
        console.log(_id)
        console.log($(app_p1.in_dtBrB).val())
        if ($(app_p1.in_curso).val() == "" || $(app_p1.in_duracao).val() == "") {
            bd.updateStatus("Erro: 'Montante' e 'Nome' são campos obrigatórios!");
        } else {
            if (confirm("Confirme para atualizar")) {
                console.log("Autorizado | OK!")
                var query = "update tb_alunos set "+
                "c_img=?, "+
                "c_curso=?, "+
                "c_duracao=?, "+
                "c_dt=?, "+
                "c_dtMod=? "+
                "where id=?;";
                try {
                    bd.initDB().transaction(function (transaction) {
                        transaction.executeSql(query, [
                            $(app_p1.in_imgSrc).val(),
                            $(app_p1.in_curso).val(),
                            $(app_p1.in_duracao).val(),
                            $(app_p1.in_dtBrB).val(),
                            getDtHoraFullBr(),
                            _id],
                            function (transaction, results) {
                            if (!results.rowsAffected) {
                                console.log($(app_p1.in_curso).val());
                                bd.updateStatus("Error: No rows affected");
                                alert("Error: Registro não inserido")
                            } else {
                                alert("Atualizado com sucesso! ID: " + results.rowsAffected)
                                bd.updateStatus("Atualizado | linhas afetadas: " + results.rowsAffected);
                                // tbAls.tratarPagForms(false, false)
                                // tbAls.limparForms()
                            }
                        }, bd.errorHandler)
                    });
                } catch (e) {
                    bd.updateStatus("Error: Unable to perform an UPDATE " + e + ".");
                }
            } else {
                console.log("Negado | CANCELAR!")
            }

        }
    },
    deletarPessoa: function deletarPessoa(_id) {
        query = "SELECT * FROM tb_alunos where id=?;";
        try {
            bd.initDB().transaction(function (transaction) {
                transaction.executeSql(query, [_id], function (transaction, results) {
                var rows = results.rows[0]


                    console.log(rows.in_curso)
                    // if (confirm("Tem certeza que deseja excluír? " + '\n' + 'Id        | ' + rows.id + "\n" + 'Nome | ' + rows.c_curso)) {
                    if (confirm("Tem certeza que deseja excluír? ")) {
                        excluirRegistro()
                    } else {
                        console.log("Negado | CANCELAR!")
                    }
                }, function (transaction, error) {
                    bd.updateStatus("Error: " + error.code + "<br>Message: " + error.message);
                });
            });
        } catch (e) {
            bd.updateStatus("Error: Não é possível selecionar dados do db " + e + ".");
        }

        function excluirRegistro() {
            var query = "delete from tb_alunos where id=?;";
            try {
                bd.initDB().transaction(function (transaction) {
                    transaction.executeSql(query, [_id], function (transaction, results) {

                        if (!results.rowsAffected) {
                            bd.updateStatus("Error: Sem linhas afetadas.");
                            console.log("Error: Sem linhas afetadas.");
                        } else {
                            bd.updateStatus("Linhas excluídas:" + results.rowsAffected);
                            tbAls.mostrar_tbAlunos()
                        }
                    }, bd.errorHandler)
                });
            } catch (e) {
                bd.updateStatus("Error: Não é possível executar um exclusão " + e + ".");
            }
        }
    },
    mostrar_tbAlunos: function mostrar_tbAlunos() {
        // console.log(tbAls.cardPessoas)
        // console.log(tbAls.posEl)
        // var query = "SELECT * FROM tb_alunos ORDER BY c_duracao DESC;";
        var query = "SELECT * FROM tb_alunos ORDER BY c_nome LIMIT 8;";
        // var query = "SELECT * FROM tb_alunos ORDER BY c_duracao;";
        // var query = "SELECT * FROM tb_alunos;";
        try {
            localDB.transaction(function (transaction) {
                transaction.executeSql(query, [], function (transaction, results) {
                    var rows = results.rows;
                    // console.log(rows)
                    var listarAlunos = '';
                    var setTitulo    = '';

                    for (var i = 0; i < rows.length; i++) {
                        // console.log(rows[i].c_dtMod)
                        // let originalString = new String(rows[i].c_dtMod) // ❗❗ é necessário convert o valor que do banco de dados em uma string
                        //     seperarEntraEpacos = originalString.split(" "); // ❗❗ separa (split) os valores que estivem entre espaçoes em branco, neste caso, a data da hora
                        //     seperarDataHora = new String(seperarEntraEpacos[0]) //

                        // let semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
                        //     mes = ["Janeiro","Fervereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
                        //     data = seperarDataHora;
                        //     arr = data.split("/").reverse();
                        //     splitData = data.split('/')[0]
                        //     splitAno = data.split('/')[2]
                        //     teste = new Date(arr[0], arr[1] - 1, arr[2]);
                        //     dia = teste.getDay();
                        //     nomeMes = teste.getMonth();
                        // var dataSetada = semana[dia] + ', '+splitData+ ' de ' +mes[nomeMes] + ' de ' + splitAno


                        // listarAlunos += `
                        // <div class="cardCursos" data-id="${rows[i].id}">
                        //     <div class="img" style="background-image: url(${rows[i].c_img});"></div>
                        //     <span>${rows[i].c_curso}</span>
                        // </div>
                        // `
                        listarAlunos += `
                        <div class="cardPessoas">
                            <div class="col1 row1-4 foto" style="background-image: url(${rows[i].c_img});"></div>
                            <span class="col2 row1"><b>Nome:</b>${rows[i].c_nome}</span>
                            <span class="col2 row2"><b>Curso: </b>${rows[i].c_curso}</span>
                            <span class="col2 row3"><b>Início: </b>Segunda-feira, 12 de Dezembro de 2021</span>
                            <span class="col"></span>
                        </div>
                        `
                        setTitulo = `<span>Pessoas</span>`
                        // console.log('...... ... ... .......')
                        // console.log('Cursos....: '+rows[i].c_curso)
                        // console.log('Img....: '+rows[i].c_img)
                        // console.log('Duração...: '+rows[i].c_duracao)
                        // console.log('Data......: '+rows[i].c_dt)
                        // console.log('Data Mod..: '+rows[i].c_dtMod)
                        // console.log(dataSetada)

                    }
                    tbAls.cardPessoas.empty()
                    // tbAls.cardPessoas.html(listarAlunos)
                    // tbAls.posEl.append(listarAlunos)
                    tbAls.cardPessoas.html(setTitulo)
                    tbAls.cardPessoas.append(listarAlunos)
                    // tbAls.posEl.append(listarAlunos)

                    // console.log('Registros econtrados: ' +rows.length)
                    // tbAls.dispTotalRg_pessoa.html('Registros econtrados: '+rows.length)
                }, function (transaction, error) {
                    bd.updateStatus("Error: " + error.code + "<br>Message: " + error.message);
                });
            });
        } catch (e) {
            bd.updateStatus("Error: Unable to select data from the db " + e + ".");
        }
    },
    select_tb_mercados: function select_tb_mercados(_id) {
        // var id = htmlLIElement.getAttribute("id");
        // var id = '2310202119825776';

        query = "SELECT * FROM tb_alunos where id=?;";
        try {
            bd.initDB().transaction(function (transaction) {
                transaction.executeSql(query, [_id], function (transaction, results) {
                var rows = results.rows[0]

                dt = rows.c_dt;
                // console.log(rows.c_dt)
                arr = dt.split("/").reverse();
                splitDia = dt.split('/')[0]
                splitMes = dt.split('/')[1]
                splitAno = dt.split('/')[2]
                dtFmUS = splitAno+'-'+splitMes+'-'+splitDia

                // console.log($(app_p1.in_imgSrc))
                $(app_p1.imgSrc).css('background-image', 'url('+rows.c_img+')');
                $(app_p1.in_imgSrc).val(rows.c_img)
                $(app_p1.in_curso).val(rows.c_curso)
                $(app_p1.in_duracao).val(rows.c_duracao)
                $(app_p1.in_dt).val(dtFmUS)


                }, function (transaction, error) {
                    bd.updateStatus("Error: " + error.code + "<br>Message: " + error.message);
                });
            });
        } catch (e) {
            bd.updateStatus("Error: Não é possível selecionar dados do db " + e + ".");
        }
    },
    limparForms: function () {
        tb_alunos.in_pesNome.val('')
        tbAls.in_pesIdade.val('')
        tbAls.in_duracao.val('')
        tbAls.btn_action.html('Salvar Registro')
        tbAls.btn_action.css('backgroundColor', 'green')
    },
    tratarPagForms: function tratarPagForms(_boolean, _boolInsert) {
            if (_boolean && _boolInsert == false)  {
                console.log('tratarPagForms:.......' + _boolean)
                tbAls.btn_action.html('Atualizar Registro')
                tbAls.btn_action.css('backgroundColor', 'goldenrod')
            } else
            if (_boolean == false && _boolInsert == false){
                tbAls.btn_action.html('Salvar Registro')
                tbAls.btn_action.css('backgroundColor', 'green')
            }
    },
    filtA_tb_mercados: function mostrar_tbAlunos() {
        // var query = "SELECT * FROM tbAls ORDER BY c_compraVenda;";
        var query = "SELECT * FROM tbAls;";
        try {
            localDB.transaction(function (transaction) {
                transaction.executeSql(query, [], function (transaction, results) {
                    var rows = results.rows;
                    var lisarPessoa = '';

                    for (var i = 0; i < rows.length; i++) {
                        console.log(rows[i].c_dt)
                        let originalString = new String(rows[i].c_dt) // ❗❗ é necessário convert o valor que do banco de dados em uma string
                            seperarEntraEpacos = originalString.split(" "); // ❗❗ separa (split) os valores que estivem entre espaçoes em branco, neste caso, a data da hora
                            seperarDataHora = new String(seperarEntraEpacos[0]) //

                        let semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
                            mes = ["Janeiro","Fervereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
                            data = seperarDataHora;
                            arr = data.split("/").reverse();
                            splitData = data.split('/')[0]
                            splitAno = data.split('/')[2]
                            teste = new Date(arr[0], arr[1] - 1, arr[2]);
                            dia = teste.getDay();
                            nomeMes = teste.getMonth();
                        var dataSetada = semana[dia] + ', '+splitData+ ' de ' +mes[nomeMes] + ' de ' + splitAno
                        console.log(dataSetada)

                        // lisarPessoa += `
                        // <tr>
                        //     <td class="tbActionDel"><a href="#${rows[i].id}" class="btnExcluirPessoa" id-data="${rows[i].id}"> <svg height="14" viewBox="0 0 512 512"><path d="M159,461.1c-9.1-2-16.8-6.2-22.1-14.1c-3.8-5.6-5.9-11.8-6.4-18.5c-0.2-2.1-0.2-4.2-0.2-6.4c0-79.8,0-159.5,0-239.3c0-1.4,0-2.8,0-4.5c84.7,0,169,0,253.7,0c0.1,1.3,0.2,2.6,0.2,3.9c0,80.3,0,160.6,0,240.8c0,12.1-3.4,22.6-12.8,30.8c-4.6,4-10.2,5.8-16.1,7.3C289.9,461.1,224.5,461.1,159,461.1z M308.4,310.9c0,30.5,0,60.9,0,91.4c0,7.1,2.9,11.1,8,11c5.1-0.1,8-4,8-11.1c0-60.8,0-121.6,0-182.4c0-7.4-2.9-11.4-8.1-11.4c-5.3,0.1-7.9,3.9-7.9,11.5C308.4,250.2,308.4,280.5,308.4,310.9z M206.3,310.7c0-30.5,0-60.9,0-91.4c0-7.2-2.8-11-8-11c-5.2,0-8,3.9-8,11.1c0,60.9,0,121.9,0,182.8c0,1.7,0.1,3.5,0.5,5.1c0.8,3.4,4.2,5.9,7.6,5.9c3.6,0,7-2.8,7.6-6.4c0.3-1.8,0.3-3.7,0.3-5.5C206.3,371.1,206.3,340.9,206.3,310.7z M249.3,310.9c0,30.2,0,60.4,0,90.6c0,1.7,0,3.5,0.3,5.1c0.6,3.7,3.7,6.4,7.3,6.6c3.5,0.2,7-2.4,7.8-6c0.4-1.8,0.5-3.7,0.5-5.5c0-60.7,0-121.3,0-182c0-0.9,0-1.9,0-2.8c-0.4-5.2-3.7-8.6-8.1-8.6c-4.5,0-7.6,3.4-7.9,8.7c-0.1,1.2,0,2.4,0,3.6C249.3,250.7,249.3,280.8,249.3,310.9z"/><path d="M257.5,122.1c44.1,0,88.2,0,132.3,0c8.7,0,15.9,2.7,20.2,10.6c6.2,11.5-0.3,25.8-13,28.7c-2.3,0.5-4.7,0.7-7.1,0.7c-88.5,0-176.9,0-265.4,0c-11.2,0-18.9-5.2-21.6-14.5c-3.5-12,4.7-24.1,17.1-25.3c2.1-0.2,4.2-0.2,6.3-0.3C170.1,122.1,213.8,122.1,257.5,122.1z"/><path d="M339.1,113.8c-5.2,0-10.2,0-15.7,0c0-7,0-13.9,0-20.7c0-6.1-1.3-11.8-5.8-16.4c-4.5-4.6-10.1-6.6-16.5-6.6c-29.3,0-58.5-0.1-87.8,0c-13.4,0.1-21.7,8.6-21.9,22c-0.1,6.2-0.1,12.4,0,18.7c0.1,2.7-0.9,3.5-3.5,3.4c-4.1-0.2-8.1,0-13.1,0c0.5-10.7-0.3-21,1.6-30.9c3.3-17.6,17.7-28.8,36.2-29c29.8-0.3,59.6-0.4,89.4,0c18.2,0.2,31.2,10.8,36,28c0.6,2.1,0.9,4.4,1,6.6C339.1,97,339.1,105.2,339.1,113.8z"/></svg></a></td>
                        //     <td class="tbActionEdt"><a href="#${rows[i].id}" class="btnEditarPessoa"  id-data="${rows[i].id}"> <svg height="14" viewBox="0 0 512 512"><path d="M10.5,488.6c2.8-10.6,5.8-21.1,8.5-31.8c7.2-28.5,14.1-57.1,21.4-85.6c0.7-2.9,2.5-6,4.6-8.1c88.7-88.9,177.4-177.6,266.2-266.4c0.9-0.9,1.9-1.7,2.4-2.2c35,35,70,70,105.3,105.3c-0.5,0.5-1.6,1.8-2.7,3c-88.3,88.3-176.6,176.6-265,264.8c-2.6,2.6-6.2,4.7-9.7,5.6C103.2,483,64.9,492.5,26.6,502c-0.9,0.2-1.8,0.7-2.6,1c-1.9,0-3.8,0-5.8,0c-2.6-2.6-5.1-5.1-7.7-7.7C10.5,493.1,10.5,490.9,10.5,488.6z"/><path d="M450.5,168.6C415.2,133.4,380.3,98.4,345,63.2c9.5-9.5,19.1-19.2,28.9-28.9c4.4-4.4,8.8-9,13.8-12.6c19.6-14.5,48.6-13.5,66.6,3c12.3,11.2,24.1,23,35.3,35.3c16.6,18.3,17.3,46.2,2.5,66c-1.9,2.6-4,5-6.3,7.2C474,145.1,462.1,157,450.5,168.6z"/></svg></a></td>
                        //     <td title="${dataSetada}">${dataSetada}</td>
                        // </tr>
                        lisarPessoa += `
                        <div class="cardData">
                            <button class="col1 row1-3" type="button">
                                <svg  height="21"  viewBox="0 0 7 28"><title>03.06-menu--menu--</title><path d="M16.3,1.84c.26.07.51.13.76.22a3.49,3.49,0,1,1-1.75-.17.31.31,0,0,0,.12,0Zm-3.93,14a3.5,3.5,0,1,0,3.49-3.5A3.5,3.5,0,0,0,12.37,15.84Zm3.53,7a3.5,3.5,0,1,0,3.47,3.53A3.51,3.51,0,0,0,15.9,22.84Z" transform="translate(-12.37 -1.84)"/></svg>
                            </button>
                            <div class="col2 row1-3 r1">${dataSetada}</div>
                            <div class="col3 row1 rG " style="color:cadetblue;"><b>Vix:</b> $30</div>
                            <div class="col3 row2 rG cVermelho2" style="color: lightcoral;"><b>Loss:</b> $5</div>
                            <div class="col4 row1-3 rG1" style="color: cornflowerblue;" ><b>Saldo:</b> $25</div>
                        </div>
                        `
                        // console.log(rows[i].c_compraVenda)
                    }
                    $('#tbodyPessoa').empty();
                    $('#cardMainP2').html(lisarPessoa);
                    // console.log('Registros econtrados: ' +rows.length)
                    tbAls.dispTotalRg_pessoa.html('Registros econtrados: '+rows.length)
                }, function (transaction, error) {
                    bd.updateStatus("Error: " + error.code + "<br>Message: " + error.message);
                });
            });
        } catch (e) {
            bd.updateStatus("Error: Unable to select data from the db " + e + ".");
        }
    }
}
tbAls.init()