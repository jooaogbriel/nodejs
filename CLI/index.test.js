// app.test.js
const { Database } = require('./database');
console.log(Database)
const fakeHeroDatabase = {
    name: 'Spider-Man',
    // ... mais heróis
  };

describe('getHeroName', () => {
  test('retorna o nome do herói correto', async () => {
    // Simule o banco de dados falso
    // Chame a função com um ID de herói conhecido
    const result =  await Database.listar(1)

    // Verifique se o resultado é o esperado
    expect(result[0].name).toBe('Spider-Man');
  });
});