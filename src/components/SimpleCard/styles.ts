import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 250px;
  margin-bottom: 1rem;
`;

export const PokeImgWrapper = styled.div<{ type: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 100%;
  height: 80%;
  object-fit: cover;
  background-color: ${({ type, theme }) => theme.colors[`${type}_1`]};
`;

export const PokeImg = styled.img`
  width: 80%;
`;

export const PokeContent = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
`;

export const PokeType = styled.div<{ type: string }>`
  background-color: ${({ type, theme }) => theme.colors[type]};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 12px;
`;
