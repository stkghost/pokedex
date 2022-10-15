import styled from 'styled-components';

export const Container = styled.div`
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-top: 2rem;
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border: ${({ theme }) => `2px solid ${theme.colors.main}`};
  border-radius: 24px;
`;

export const InputContainer = styled.form`
  display: flex;
  align-items: center;
  margin: 12px 0;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors.main};
  padding: 8px 0 8px 14px;
  font-family: 'VT323', sans-serif;
  font-size: 16px;
`;

export const ButtonSearch = styled.button`
  height: 100%;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.main};
  padding: 7px;
`;
