import Home from 'assets/images/home.svg';
import People from 'assets/images/people.svg';
import Heart from 'assets/images/heart.svg';
import Chat from 'assets/images/chat.svg';
import Person from 'assets/images/person.svg';
import { NavBarWrapper } from './style';
import { ImageButton } from 'components/Button';
import { useState } from 'react';
import { theme } from 'styles/theme';

export const NavBar = () => {
  const [active, setActive] = useState('home');

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActive(e.currentTarget.name);
  };
  console.log(active);
  return (
    <NavBarWrapper>
      <ImageButton name="home" onClick={handleButtonClick}>
        <Home fill={active === 'home' ? theme.colors.mainPink : '#CCCCCC'} />
      </ImageButton>
      <ImageButton name="people" onClick={handleButtonClick}>
        <People fill={active === 'people' ? theme.colors.mainPink : '#CCCCCC'} />
      </ImageButton>
      <ImageButton name="heart" onClick={handleButtonClick}>
        <Heart fill={active === 'heart' ? theme.colors.mainPink : '#CCCCCC'} />
      </ImageButton>
      <ImageButton name="chat" onClick={handleButtonClick}>
        <Chat fill={active === 'chat' ? theme.colors.mainPink : '#CCCCCC'} />
      </ImageButton>
      <ImageButton name="person" onClick={handleButtonClick}>
        <Person fill={active === 'person' ? theme.colors.mainPink : '#CCCCCC'} />
      </ImageButton>
    </NavBarWrapper>
  );
};
