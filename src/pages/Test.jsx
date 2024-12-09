import React from 'react';
import '../styles/test.css';

function Test(props) {
   return (
      <div className='test_container' style={{height:"2000px"}}>
         <h2 className='main_title'>메인타이틀입니다.</h2>
         <h3 className='sub_title'>서브 타이틀 입니다.</h3>

         <p className='contents_title'>컨텐츠 타이틀입니다.</p>
         <p className='contents_description'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quo necessitatibus iste temporibus obcaecati excepturi distinctio, dolore sit quibusdam, illo ab aspernatur velit, eius minus sapiente atque voluptates. Asperiores, aliquid?
         </p>
      </div>
   );
}

export default Test;