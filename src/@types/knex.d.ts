/**
 Quando queremos sobrescrever um tipo que vem de uma biblioteca, a primeira coisa a se fazer é importar a biblioteca. Nesse caso, importamos o tipo global de knex. Veja que o eslint vai mostrar um erro de não uso de Knex. Porém, vamos pedir para ele, de forma manual, ignore isso, pois não vamos usar essa variável. É uma forma de mostrar que quero reaproveitar os tipos que vem de Knex e vamos adicionar novos tipos.

 vamos declarar o módulo e vamos usar uma forma que a documentação do knex mostra de como podemos trazer inteligência para nosso desenvolvimento. Ele fala que podemos declarar dentro desse módulo as tabelas e os campos que as contém, com sua tipagem correta.

 Veja que inserimos os campos que temos dentro da tabela transactions, inclusive mostrando o que é opcional e o que não é
 */

// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}
