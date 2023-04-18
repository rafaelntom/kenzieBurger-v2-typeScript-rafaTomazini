import { useContext, useEffect } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContext';

const ProductCard = () => {
  const { getAllProducts, products } = useContext(CartContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  const productCard = products.map((product) => (
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
        <StyledParagraph className='price'>R$ {product.price}</StyledParagraph>
        <StyledButton $buttonSize='medium' $buttonStyle='green'>
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  ));

  return (
    <>
    {productCard}
    </>
  );
};

export default ProductCard;
