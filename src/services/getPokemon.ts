import axios from 'axios';
import { IPokemonProps } from 'src/types/pokemon';

const app = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: {
    'Content-type': 'application/json',
  },
});

export const GetPokemon = async (name: string) => {
  return await app
    .get<IPokemonProps>(`pokemon/${name}`)
    .then((response) => response.data);
};
