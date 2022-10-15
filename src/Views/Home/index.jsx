import React, { useState } from 'react';
import * as S from './styles';
import { StyledText } from '../../components/StyledText';
import { theme } from 'src/theme/theme';
import { SimpleCard } from 'src/components/SimpleCard';
import { BiSearch } from 'react-icons/bi';
import { GetPokemon } from 'src/services/getPokemon';
import { IPokemonProps } from 'src/types/pokemon';

export const HomePage = () => {
  const [nameOrId, setNameOrId] = useState('');

  const [searchedPokemon, setSearchedPokemon] =
    useState < IPokemonProps > undefined;

  const searchPokemon = (e) => {
    e.preventDefault();
    const currentPokemon = GetPokemon(nameOrId);
    setSearchedPokemon(currentPokemon);
  };

  return (
    <S.Container>
      <StyledText
        color={theme.colors.main}
        text='Pokedex'
        fontSize={3.5}
        fontWeight={700}
      />
      <StyledText
        text='Search for a pokemon by name or using its International Pokedex number'
        fontSize={1}
        color={theme.colors.main}
        isSerif
      />
      <S.InputContainer onSubmit={searchPokemon}>
        <S.Input
          type='text'
          placeholder='Name or International Pokedex number'
          onChange={(e) => setNameOrId(e?.target?.value)}
        />
        <S.ButtonSearch type='submit'>
          <BiSearch size={18} color='#fff' />
        </S.ButtonSearch>
      </S.InputContainer>
      <S.Content>
        <SimpleCard pokemon={searchedPokemon} />
      </S.Content>
    </S.Container>
  );
};
