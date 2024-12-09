import React from 'react';
import { Link } from 'react-router-dom';

function Header1(props) {
   return (
      <header>
         <Link to="/" >홈</Link>
         <Link to="/test" >테스트</Link>
      </header>
   );
}

export default Header1;