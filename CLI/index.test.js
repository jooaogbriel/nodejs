// app.test.js
const  database  = require('./database');

const fakeHeroDatabase = {
    name: 'Spider-Man',
    id: 1
    // ... mais heróis
  };

describe('getHeroName', () => {
  test('retorna o nome do herói correto', async () => {
    // Simule o banco de dados falso
    // Chame a função com um ID de herói conhecido
    const expt = fakeHeroDatabase
    const result =  await database.listar(expt.id)
    console.log(result)

    // Verifique se o resultado é o esperado
    expect(result[0].name).toBe('Spider-Man');
  });
  test('deve cadastrar um heroi usando arquivos', async () => {
    const expect = fakeHeroDatabase
    const result = await database.cadastrar(fakeHeroDatabase)
    const [actual] = await database.listar(fakeHeroDatabase.id)
    expect(result[0].id).toBe(actual);
  })
});