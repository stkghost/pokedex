import React from 'react';
import { StyledText } from '../StyledText';
import * as S from './styles';

export const SimpleCard: React.FC = () => {
  return (
    <S.Container>
      <S.PokeImgWrapper type='fire'>
        <S.PokeImg
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'
          alt='charizard'
        />
      </S.PokeImgWrapper>
      <S.PokeContent>
        <div>
          <StyledText text='n° 001' fontSize={0.8} isSerif />
          <StyledText
            text='Bulbasaur'
            fontSize={1.2}
            fontWeight={700}
            isSerif
          />
        </div>
        <div>
          <S.PokeType type='fire'>
            <StyledText text='Fire' fontSize={0.9} fontWeight={500} isSerif />
          </S.PokeType>
        </div>
      </S.PokeContent>
    </S.Container>
  );
};
