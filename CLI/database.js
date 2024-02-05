const { promisify } = require('util');
const { readFile } = require('fs');
const readFileAsync = promisify(readFile);

class Database {
    constructor(){
        this.NOME_ARQUIVO = 'herois.json';
    }
    async obterDadosArquivo () {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8');
        console.log(arquivo);
        return JSON.parse(arquivo.toString());
    }
    escreverArquivo() {

    }
    async listar(id) {
        const dados = await this.obterDadosArquivo();
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true));
        return dadosFiltrados;
    }   
}

module.exports = Database;
