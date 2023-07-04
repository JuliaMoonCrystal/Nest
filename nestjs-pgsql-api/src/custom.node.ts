import { User } from "./users/entity/user.entity";

export function isUserEligible(user: User): boolean {

  const idadeMinima = 18;
  const dataAtual = new Date();
  const dataNascimento = new Date(user.dataNascimento);

  const diffAnos = dataAtual.getFullYear() - dataNascimento.getFullYear();
  if (diffAnos < idadeMinima) {
    return false;
  }

  return true;
}