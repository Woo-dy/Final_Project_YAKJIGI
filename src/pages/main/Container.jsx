
import SwiperSlider from "./SwiperSlider";
import MedicineLife from "./MedicineLife";
import MedicineDefault from "./MedicineDefault";
import MedicineCategory from "./MedicineCategory";
import MedicineNotice from "./MedicineNotice";
import MedicineNews from "./MedicineNews";
import "../../styles/main/medicinecategory.css";
import '../../styles/main/medicinedefault.css';
import '../../styles/main/medicinenotice.css';
import '../../styles/main/medicinenews.css';
import '../../styles/main/swipercustom.css';

function Container() {

   return (
      <>
      {/* 메인 슬라이드 & 약품 검색 슬라이드 */}
      <SwiperSlider />

      {/* 안전한 의약생활 */}
      <MedicineLife />

      {/* 의약품이란? */}
      <MedicineDefault />

      {/* 약국 찾아보기 */}
      <MedicineCategory />

      {/* 뉴스 API */}
      <MedicineNews />

      {/* 공지사항 */}
      <MedicineNotice />
      </>
   );
}

export default Container;
