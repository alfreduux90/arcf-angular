export interface User {
  login: string;
  nombreUsuario: string;
  apellidoPat: string;
  apellidoMat: string;
  emailUsuario: string;
  token: Token;
}

interface Token {
  refresh: string;
  access: string;
}
