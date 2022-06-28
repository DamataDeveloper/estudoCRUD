class TabelaInfra{
    init(conexao){
        this.conexao=conexao;
        this.criaLivros();
    }
    criaLivros(){
        const sql = 'CREATE TABLE IF NOT EXISTS Livros(id int NOT NULL AUTO_INCREMENT,livro varchar(50) NOT NULL,autor varchar(50),status varchar(20) NOT NULL,observacoes text,PRIMARY KEY(id))'  
        
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('tabela livros criada com sucesso')
            }
        })
    }


}

export default new TabelaInfra