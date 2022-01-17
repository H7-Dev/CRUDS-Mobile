    function  getDtHoraFullBr() {
        var dt= new Date(),
            dia          = dt.getDate(),
            mes          = dt.getMonth()+1,
            ano          = dt.getFullYear(),
            horas        = dt.getHours(),
            minutos      = dt.getMinutes(),
            segundos     = dt.getSeconds()
         return  dia+"/"+mes+"/"+ano+" "+horas +":"+minutos+":"+segundos
    }
    // console.log('getDtHoraFullBr => ' + getDtHoraFullBr())