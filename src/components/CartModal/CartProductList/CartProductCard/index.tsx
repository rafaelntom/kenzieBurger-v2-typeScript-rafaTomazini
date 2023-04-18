import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../providers/CartContext';

const CartProductCard = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const removeItemFromCart = (id: number) => {
    const newList = cartProducts.filter((item) => item.id !== id);
    setCartProducts(newList);
  };

  const addItemQuantity = (id: number) => {
    const foundProduct = cartProducts.find((item) => item.id === id);

    if (foundProduct) {
      // eslint-disable-next-line operator-assignment
      foundProduct.quantity = foundProduct.quantity + 1;
      foundProduct.finalPrice = foundProduct.price * foundProduct.quantity;
    }

    setCartProducts([...cartProducts]);
  };

  const removeItemQuantity = (id: number) => {
    const foundProduct = cartProducts.find((item) => item.id === id);

    if (foundProduct) {
      // eslint-disable-next-line operator-assignment
      foundProduct.quantity = foundProduct.quantity - 1;
      foundProduct.finalPrice = foundProduct.price * foundProduct.quantity;
    }
    setCartProducts([...cartProducts]);

    if (foundProduct?.quantity === 0) {
      removeItemFromCart(foundProduct.id);
    }
  };

  return (
    <>
      {cartProducts.map((item) => (
        <StyledCartProductCard key={item.id}>
          <div className='imageBox'>
            <img src={item.img} alt={item.name} />
          </div>
          <div className='contentBox'>
            <StyledTitle tag='h3' $fontSize='three'>
              {item.name}
              <div className='quantityContainer'>
                <button
                  onClick={() => removeItemQuantity(item.id)}
                  type='button'
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => addItemQuantity(item.id)} type='button'>
                  +
                </button>
              </div>
            </StyledTitle>

            <button type='button' aria-label='Remover'>
              <MdDelete onClick={() => removeItemFromCart(item.id)} size={24} />
            </button>
          </div>
        </StyledCartProductCard>
      ))}
    </>
  );
};

export default CartProductCard;
