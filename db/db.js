const conectar = async() =>{

    if(global.conexao && global.conexao.state != 'disconected')
        return global.conexao

    const mysql= require('mysql2/primisse')
    const con = mysql.createConnection("mysql://root:@localhost:3306/bolsa")
    console.log('conectado')

    global.conexao=con
    return con
}

conectar()

module.exports = {}