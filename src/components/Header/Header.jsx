import { Logo } from '../Assets/Img/Logo';
import { Buscador } from '../Buscador/Buscador';
import { Estrenos } from '../Estrenos/Estrenos';
import './Header.css';

export const Header = () => {
  return (
    <div className='header-container'>
      <Logo />
      <Buscador />
      <Estrenos />
    </div>
  )
}
