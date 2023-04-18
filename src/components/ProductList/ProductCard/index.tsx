import { toast } from 'react-toastify';
import { useContext, useEffect } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContext';

const ProductCard = () => {
  const { getAllProducts, products, cartProducts, setCartProducts } =
    useContext(CartContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleAddItemToCart = (id: number) => {
    const productExists = cartProducts.find((item) => item.id === id);

    if (productExists) {
      const foundProduct = cartProducts.map((product) => {
        if (productExists.id === product.id) {
          product.quantity += product.quantity;
          product.finalPrice = product.price * product.quantity;
        }

        return product;
      });

      toast.success('Item adicionado ao carrinho!');
      setCartProducts(foundProduct);
    } else {
      const foundProduct = products.find((product) => product.id === id);

      const productWithQuantity = {
        ...foundProduct,
        quantity: 1,
        finalPrice: 0,
      };

      toast.success('Item adicionado ao carrinho!');
      setCartProducts([...cartProducts, productWithQuantity]);
    }
  };

  return (
    <>
      {products.map((product) => (
        <StyledProductCard key={product.id}>
          <div className='imageBox'>
            <img src={product.img} alt={product.name} />
          </div>
          <div className='content'>
            <StyledTitle tag='h3' $fontSize='three'>
              {product.name}
            </StyledTitle>
            <StyledParagraph className='category'>
              {product.category}
            </StyledParagraph>
            <StyledParagraph className='price'>
              R$ {product.price}
            </StyledParagraph>
            <StyledButton
              onClick={() => handleAddItemToCart(product.id)}
              $buttonSize='medium'
              $buttonStyle='green'
            >
              Adicionar
            </StyledButton>
          </div>
        </StyledProductCard>
      ))}
    </>
  );
};

export default ProductCard;
