function obterUsuario(callback){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function(){
            return resolve({
                id: 1,
                nome: 'joao',
            })
        }, 2000)
    })
    
}

function obterTelefone (userId){
    return new Promise (function resolvePromise(resolve, reject){
        setTimeout(()=> {
            return resolve({
                cel: '190800',
                ddd: 19
            })
        },2000)
    })
}

function obterEndereco(userId){
    return new Promise (function resolvePromise(resolve, reject){
        setTimeout(()=> {
            return resolve({
                rua: 'vila moda',
            })
        },2000)
    })
}
main()
async function main(){
    try {
        const usuario = await obterUsuario()
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEndereco(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
        console.log(`
            Endereço: ${endereco.rua},
            telefone: ${telefone.cel},
        `)

    } catch (error) {
        console.error('ERROR')
    }
}

const util = require('util')
const async = util.promisify(obterEndereco)

const usuarioPromise = obterUsuario()
usuarioPromise
    .then(function (resultado){
        console.log(resultado)
        return obterTelefone(resultado.cel)
        .then(function resolverTelefone(result){
            return {
                usuario:{
                    id: 1,
                    nome: 'joao',
                },
                telefone: result
            }
        })
    })
    .then(function (resultado){
        const endereco = async(resultado.usuario.id)
        return endereco.then( function resolverEndereco(result){
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function (resultado) {
        console.log('aqui esta o resultado:', resultado)
    })
    .catch(function (error){
        console.error('DEU RUIM', error)
    })
    // O primeiro then recebe o resultado da primeira Promise (obterUsuario). Ele imprime o resultado no console e retorna a Promise resultante da chamada obterTelefone(resultado.cel).

    // O segundo then recebe o resultado da segunda Promise (obterTelefone(resultado.cel)), que é o valor retornado pelo primeiro then. Ele imprime o resultado no console.
    
    // Se houver algum erro em qualquer uma das Promises, o catch captura o erro e imprime uma mensagem de erro.
    
    // Esse encadeamento é uma maneira poderosa e legível de lidar com operações assíncronas em JavaScript usando Promises.



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