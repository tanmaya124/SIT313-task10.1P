import React from 'react';
import { Menu, Container, Input, Button } from 'semantic-ui-react';
import './Header.css';

const Header = () => (
  <>
  <Menu inverted className="custom-header" fixed="top">
    <Container>
      <Menu.Item as="a" header className="logo">
        <span className="highlight">DEV@</span> DEAKIN
      </Menu.Item>
      <Menu.Item>
        <Input
          icon={<i className="search icon"></i>}
          placeholder="Search..."
          className="search-input"
          iconPosition="left"
          style={{ width: '700px' }}
        />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item  >
          
          <div className ="btn">
          <Button  content="POST" /></div>
          <Button  content="LOGIN"/>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
    
      
  </>

);

export default Header;
