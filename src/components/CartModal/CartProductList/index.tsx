import { useContext } from 'react';
import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContext';

const CartProductList = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const cartTotalValue = cartProducts.reduce((acc, item) => {
    if (item.finalPrice) {
      return acc + item.finalPrice;
    }
    return acc + item.price;
  }, 0);

  const removeAllCartItems = () => {
    setCartProducts([]);
  };

  return (
    <StyledCartProductList>
      <ul>
        <CartProductCard />
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>
          R$ {cartTotalValue.toFixed(2)}
        </StyledParagraph>
      </div>
      <StyledButton
        onClick={() => removeAllCartItems()}
        $buttonSize='default'
        $buttonStyle='gray'
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
