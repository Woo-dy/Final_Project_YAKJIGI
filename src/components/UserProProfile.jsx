import React from 'react';

import profile from '../styles/mypage/userprofile.module.css';
import NumberCounter from "./NumberCounter";
import { Link } from 'react-router-dom';

function UserProProfile(props) {
   return (
      <>
         {/* user profiele */}
         <div className={profile.user_profile}>
            <ul className={profile.user_profile_ul}>
               <li className={profile.user_profile_photo}>
                     <figure>
                        <img src="/images/my/my_profile.jpg" alt="rewiew_1" />
                     </figure>
               </li>
               <li className={profile.user_profile_contents}>
                     <div className={profile.my_profile}>
                        <p className={profile.name}>자라나라 머리머리</p>
                        <p className={profile.birth}>kim03189</p>

                        <ul className={profile.my_btn}>
                           <li>
                              <button>
                                 <Link to="/myprouserinfo">회원정보</Link>
                              </button>
                           </li>
                        </ul>
                     </div>
               </li>
               <li className={profile.user_profile_number}>
                     <div className={profile.my_num}>
                        <ul>
                           <li>
                                 <p>상담대기</p>
                                 <NumberCounter countTo={100} duration={500} 
                                 className={profile.nums} />
                           </li>
                           <li>
                              <p>상담완료</p>
                              <NumberCounter countTo={10} duration={500} 
                              className={profile.nums} />
                           </li>
                           <li>
                              <p>문의내역</p>
                              <NumberCounter countTo={10} duration={500} 
                              className={profile.nums} />
                           </li>
                        </ul>
                     </div>
               </li>
            </ul>
         </div>
      </>
   );
}

export default UserProProfile;