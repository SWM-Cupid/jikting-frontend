import Home from 'assets/images/home.svg';
import People from 'assets/images/people.svg';
import Heart from 'assets/images/heart.svg';
import Chat from 'assets/images/chat.svg';
import Person from 'assets/images/person.svg';
import { NavBarWrapper } from './style';
import { ImageButton } from 'components/Button';
import { useState } from 'react';
import { theme } from 'styles/theme';
import { useNavigate } from 'react-router-dom';

export const NavBar = ({ defaultActive }: { defaultActive: string }) => {
  const [active, setActive] = useState(defaultActive);
  const navigate = useNavigate();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, routePath: string) => {
    setActive(e.currentTarget.name);
    navigate(routePath);
  };

  const navItems = [
    {
      name: 'main',
      routePath: '/main',
      icon: Home,
    },
    {
      name: 'team',
      routePath: '/team',
      icon: People,
    },
    {
      name: 'like',
      routePath: '/like',
      icon: Heart,
    },
    {
      name: 'chat',
      routePath: '/chat',
      icon: Chat,
    },
    {
      name: 'mypage',
      routePath: '/mypage',
      icon: Person,
    },
  ];
  const color = (name: string) => (active === name ? theme.colors.mainPink : '#CCCCCC');

  return (
    <NavBarWrapper>
      {navItems.map((item) => (
        <ImageButton key={item.name} name={item.name} onClick={(e) => handleButtonClick(e, item.routePath)}>
          <item.icon fill={color(item.name)} />
        </ImageButton>
      ))}
    </NavBarWrapper>
  );
};
