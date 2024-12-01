import { useNavigate, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const TourCard = () => {
  return (
    <div className="flex mb-10 mx-2">
     <a>
        <div className="relative">
        <div className="absolute top-5  -left-1 py-2 px-3 bg-orange-500 rounded-e-2xl text-white text-sm font-semibold">
            Đặc sắc
            <div className="absolute -bottom-1 left-0 border-l-[2px] border-r-[2px] border-b-[2px] border-t-[2px] border-transparent border-t-orange-700 border-r-orange-700"></div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-3xl hover:shadow-full transition-shadow overflow-hidden">
            <a href="#" >
            <div className=" w-full h-56 overflow-hidden">
                <img className="w-full h-full object-cover" src="https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_131886/20220804030600_OVO9u/jpg" />
                
            </div>
            
            </a>
            <div className="p-5 flex flex-col min-h-52">
            <a href="#" className="grow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">Ha Noi</h5>
            </a>
            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">Thời lượng: <span>2</span> giờ</p>
            <p className="text-sm"><FontAwesomeIcon icon={faStar} className="text-yellow-300"/> <span>5</span> (<span>10</span>) đánh giá</p>
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-secondary">3000đ / Khách</p>
                <NavLink to="/tours/tour-detail" className="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-secondary bg-primary rounded-3xl hover:bg-secondary hover:text-white shadow-3xl focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                Đặt ngay
                </NavLink>
            </div>
            </div>
        </div>
        </div>
    </a>
    </div>
  );
};

export default TourCard;
