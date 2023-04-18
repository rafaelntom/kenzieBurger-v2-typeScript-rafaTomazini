import styled from 'styled-components';

export const StyledCartProductCard = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  .imageBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background: ${({ theme }) => theme.colors.gray100};

    img {
      width: 80px;
      height: 80px;
      object-fit: contain;
    }

    @media (max-width: 450px) {
      width: 40px;
      height: 40px;

      img {
        width: 40px;
        height: 40px;
      }
    }
  }

  .contentBox {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    gap: 20px;

    button {
      background: transparent;
      opacity: 0.4;
      transition: 0.4s;

      :hover {
        opacity: 0.7;
      }
    }
  }

  .quantityContainer {
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: max-content;

    button {
      color: #eb5757;
      opacity: 1;
      font-size: 2rem;
      width: max-content;
      padding-inline: 0.625rem;
    }

    span {
      background-color: white;
      padding-inline: 10px;
      padding-block: 3px;
      text-align: center;
      font-size: 0.9375rem;
    }
  }
`;
