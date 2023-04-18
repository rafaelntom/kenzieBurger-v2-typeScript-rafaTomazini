import { MdShoppingCart, MdLogout } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';

import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../providers/CartContext';

const Header = () => {
  const { setCartModal } = useContext(CartContext);
  const navigate = useNavigate();

  const userLogout = () => {
    localStorage.removeItem('@kBurguerUserToken');
    navigate('/');
  };

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <img
            src={LogoKenzieBurguer}
            alt='Kenzie Burguer Logo'
            className='logo'
          />
          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <button type='button' onClick={() => setCartModal(true)}>
                <MdShoppingCart size={28} />
              </button>
              <button onClick={() => userLogout()} type='button'>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
