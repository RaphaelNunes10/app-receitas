export type MedidaIngrediente =
  | 'Colher de Café'
  | 'Colher de Chá'
  | 'Colher de Sobremesa'
  | 'Colher de Sopa'
  | 'mg'
  | 'g'
  | 'Kg'
  | 'ml'
  | 'L';
export type MedidaPorcao =
  | 'Unidade(s)'
  | 'Pedaço(s)'
  | 'Fatia(s)'
  | 'g'
  | 'kg'
  | 'L'
  | 'Pessoa(s)';

interface Ingrediente {
  listIndex: number;
  quantidade: number;
  medida: MedidaIngrediente;
  ingrediente: string;
}

interface Utensilio {
  listIndex: number;
  quantidade: number;
  utensilio: string;
}

interface Preparo {
  listIndex: number;
  passo: string;
}

interface Porcao {
  quantidade: number;
  medida: MedidaPorcao;
}

export interface Receita {
  id: string;
  listIndex: number;
  titulo: string;
  imagens: string[];
  descricao: string;
  ingredientes: Ingrediente[];
  utensilios: Utensilio[];
  preparo: Preparo[];
  tempoPreparo: string;
  porcao: Porcao;
  dataCriacao: Date | undefined;
}