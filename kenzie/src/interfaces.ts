type ClientRequiredKeys = 'name' | 'cpf' | 'birthYear'

interface Client {
    name: String;
    cpf: string;
    birthYer: number;
}
export { Client, ClientRequiredKeys }
