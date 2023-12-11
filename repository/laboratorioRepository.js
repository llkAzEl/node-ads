const db = require('./db');

async function alunos(nome, cpf, logradouro) {

    try {
        const con = await db.conectarMysql();
        let sql = `INSERT INTO alunos ( nome , cpf, logradouro) VALUES ('${nome}', ${cpf}, ${logradouro})`
        await con.execute(sql);
        con.destroy();
        console.log("inseriu");
        return true;        
    } catch (error) {
        console.log(error);
        con.destroy();
        console.log("error");
        return false;
    }
}


async function updateLab(id, nome, cpf, logradouro) {

    try {
        const con = await db.conectarMysql();
        let sql = `UPDATE test.alunos set nome='${nome}', turno=${cpf}, turno=${logradouro} where id=${id}`
        await con.execute(sql);
        con.destroy();
        console.log("atualizou");
        
        return true;        
    } catch (error) {
        console.log(error)
        con.destroy();
        console.log("error");
        return false;
    }
}

async function consultarLab(){

    try {
        const con = await db.conectarMysql();
        const consulta = 'SELECT * FROM alunos';
        const resultado = await con.query(consulta);
        const listaLabs = resultado[0];
        console.log(listaLabs)
        return listaLabs;
        
    } catch (error) {
        console.log(error);
        return false;
    }

}



async function getLab(id){

    try {
        const con = await db.conectarMysql();
        const consulta = `SELECT * FROM alunos l where id = ${id}`;
        const resultado = await con.query(consulta);
        const lab = resultado[0][0];
        console.log(lab)
        return lab;
        
    } catch (error) {
        console.log(error);
        return false;
    }

}

async function apagarLab(id){

    try {
        const con = await db.conectarMysql();
        const consulta = `delete from alunos where id = ${id}`
        await con.execute(consulta);
        return true;
        
    } catch (error) {
        console.log(error);
        return false;
    }

}


module.exports = { alunos, consultarLab, apagarLab, getLab, updateLab };