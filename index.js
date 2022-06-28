import 'dotenv/config';
import app from './src/app.js';
import conexao from './src/dataBase/conexaoInfra.js'
import TabelaInfra from './src/dataBase/TabelaInfra.js'


conexao.connect((erro)=>{
    if(erro){
        console.log(erro)
    }else{
        console.log('conectado com o banco de dados')
        TabelaInfra.init(conexao)
        //console.log(process.env)
        const port = process.env.PORT        
        
        app.listen(3000, ()=>console.log(`servidor esta rodando na porta http://localhost:${3000}`));

    }
})


