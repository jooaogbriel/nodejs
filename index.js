function gerarUsuario(callback){
    setTimeout(function(){
        return callback(null,{
            id: 1,
            nome: 'joao',
        })
    }, 1000)
}

function pegarTelefone (userId, callback){
    setTimeout(()=> {
        return callback(null,  {
            cel: '190800',
            ddd: 19
        })
    },2000)
}

function obterEndereco(userId, callback){
    setTimeout(()=> {
        return callback(null,  {
            rua: 'vila moda',
        })
    },2000)
}

function resolverUsuario (erro, usuario)  {
    console.log('usuario', usuario)
}


gerarUsuario(function resolverUsuario(error, usuario){
    if(error){
        console.log('usuário deu erro', error)
        return;
    }
    pegarTelefone(usuario.id, function resolverUsuario(error1, telefone){
        if(error1){
            console.log('telefone deu erro', error)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if(error2){
                console.log('Endereco deu erro', error)
                return;
            }
            console.log(`
                Nome: ${usuario.nome},
                Endereço: ${endereco.rua},
                Telefone: ${telefone.cel},
            `)
        })
    }) 
})