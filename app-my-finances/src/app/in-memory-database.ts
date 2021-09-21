import { InMemoryDbService } from "angular-in-memory-web-api"; 

export class InMemoryDatabase implements InMemoryDbService {

  createDb() {
    const categories = [
      {
        id: 1,
        name: 'Moradia',
        description: 'Contas da Casa.'
      },
      {
        id: 2,
        name: 'Lazer',
        description: 'Lanchonete e Pizzaria.'
      },
      {
        id: 3,
        name: 'Salário',
        description: 'Recebimento de Salário.'
      },
      {
        id: 4,
        name: 'Saúde',
        description: 'Plano de Saúde e Remédios.'
      },
      {
        id: 5,
        name: 'Freelas',
        description: 'Trabalhos como freelancer.'
      }
    ];

    return { categories }
  }
}