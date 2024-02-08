type ClientRequiredKeys = 'name' | 'cpf' | 'birthYear'

interface Client {
    name: String;
    cpf: string;
    birthYer: number;
    email: string
}
export { Client, ClientRequiredKeys }
