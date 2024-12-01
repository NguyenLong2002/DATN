import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import TourSearch from "../../../components/shareCompt/tourSearch";
import Paginate from "../../../components/shareCompt/paginate";

// const backendBaseUrl = "http://localhost:8000";

const TourPage = () => {
//   const dispatch = useDispatch();
//   const tours = useSelector((state: any) => state.tour.tours);
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 5;

  const vehicles = ["Đi bộ", "Xe đạp", "Xe ô tô", "Xe xích lô", "Xe máy", "Xe bus"];

//   useEffect(() => {
//     dispatch({ type: "tour/getTours" });
//   }, [dispatch]);

//   const paginatedTours = tours.slice((currentPage - 1) * toursPerPage, currentPage * toursPerPage);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     const tourListElement = document.getElementById("tourList");
//     if (tourListElement) {
//       window.scrollTo({
//         top: tourListElement.getBoundingClientRect().top + window.scrollY - 250,
//         behavior: "smooth",
//       });
//     }
//   };

  const getAverageRating = (reviews: { rating: number }[]) => {
    if (!reviews || !Array.isArray(reviews) || reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1);
  };

//   const getTourPhotoUrl = (photos: string[]) => {
//     return Array.isArray(photos) && photos.length > 0 ? `${backendBaseUrl}${photos[0]}` : "default.jpg";
//   };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("vi-VN").format(value);
  };

  return (
    <div className="bg-bgPattern">
      <div className="pt-40 w-3/4 mx-auto">
        <TourSearch />

        <div className="flex justify-between mt-32">
          <div>
            <h2 className="text-4xl text-gray-900 font-extrabold">Tìm thấy 3kết quả.</h2>
            <p className="h-[2px] w-24 bg-primary mt-4"></p>
          </div>
          <select className="border-gray-300 text-gray-900 text-lg rounded-full block px-5">
            <option>Không sắp xếp</option>
            <option>Giá : Thấp đến Cao</option>
            <option>Giá : Cao đến Thấp</option>
          </select>
        </div>

        <div className="flex mt-20">
          <div className="w-1/4 px-6 border border-gray-200 rounded-3xl mr-8">
            <div className="flex justify-between items-center py-6 border-b border-gray-300">
              <h2 className="font-bold text-xl text-gray-700">Lọc kết quả</h2>
              <p className="text-sm text-secondary font-semibold cursor-pointer hover:text-primary">Đặt lại</p>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold text-gray-800">Xếp hạng sao</h2>
              <div className="mt-3">
                {[3, 4, 5].map((star) => (
                  <div key={star} className="flex items-center mb-4">
                    <input type="checkbox" className="w-4 h-4 text-primary cursor-pointer bg-gray-100 border-gray-300 rounded focus:ring-primary" />
                    <label className="ms-2 text-sm font-medium text-gray-800">{star} sao</label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Phương tiện</h2>
              <div className="mt-3">
                {vehicles.map((vehicle, index) => (
                  <div key={index} className="flex items-center mb-4">
                    <input type="checkbox" className="w-4 h-4 text-primary cursor-pointer bg-gray-100 border-gray-300 rounded focus:ring-primary" />
                    <label className="ms-2 text-sm font-medium text-gray-800">{vehicle}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-3/4">
            <div id="tourList">
              <ul>
                
                  <li>
                    <a
                      className="relative flex flex-col items-center bg-white border border-gray-200 rounded-3xl shadow md:flex-row hover:bg-gray-100 hover:shadow-3xl p-6 mb-8"
                    >
                      
                        <div className="absolute top-8 left-8 px-4 py-2 text-white text-sm font-semibold bg-orange-500 rounded-2xl">Đặc sắc</div>
                      
                      <img
                        className="object-cover rounded-lg md:h-60 md:w-80 md:rounded-3xl"
                        src="https://i.ytimg.com/vi/JWz0Gwd2Ppo/maxresdefault.jpg"
                        
                      />
                      <div className="flex flex-col px-8 w-full justify-between">
                        <div>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Title</h5>
                          <div className="flex justify-between mt-1">
                            <p className="font-normal text-gray-900">Thời lượng: 2 giờ</p>
                            <p className="font-normal text-gray-900">Phương tiện: Xe máy</p>
                          </div>
                          <p className="text-sm mt-4">
                            ⭐ <span>5</span> (<span>4</span>) đánh giá
                          </p>
                          <hr className="my-6 bg-gray-500 w-full" />
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold text-secondary">300đ / Khách</p>
                           <NavLink to="/tours/tour-detail" className="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-secondary bg-primary rounded-3xl hover:bg-secondary hover:text-white shadow-3xl focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                Đặt ngay
                </NavLink>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative flex flex-col items-center bg-white border border-gray-200 rounded-3xl shadow md:flex-row hover:bg-gray-100 hover:shadow-3xl p-6 mb-8"
                    >
                      
                        <div className="absolute top-8 left-8 px-4 py-2 text-white text-sm font-semibold bg-orange-500 rounded-2xl">Đặc sắc</div>
                      
                      <img
                        className="object-cover rounded-lg md:h-60 md:w-80 md:rounded-3xl"
                        src="https://i.ytimg.com/vi/JWz0Gwd2Ppo/maxresdefault.jpg"
                        
                      />
                      <div className="flex flex-col px-8 w-full justify-between">
                        <div>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Title</h5>
                          <div className="flex justify-between mt-1">
                            <p className="font-normal text-gray-900">Thời lượng: 2 giờ</p>
                            <p className="font-normal text-gray-900">Phương tiện: Xe máy</p>
                          </div>
                          <p className="text-sm mt-4">
                            ⭐ <span>5</span> (<span>4</span>) đánh giá
                          </p>
                          <hr className="my-6 bg-gray-500 w-full" />
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold text-secondary">300đ / Khách</p>
                          <NavLink to="/tours/tour-detail" className="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-secondary bg-primary rounded-3xl hover:bg-secondary hover:text-white shadow-3xl focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                Đặt ngay
                </NavLink>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative flex flex-col items-center bg-white border border-gray-200 rounded-3xl shadow md:flex-row hover:bg-gray-100 hover:shadow-3xl p-6 mb-8"
                    >
                      
                        <div className="absolute top-8 left-8 px-4 py-2 text-white text-sm font-semibold bg-orange-500 rounded-2xl">Đặc sắc</div>
                      
                      <img
                        className="object-cover rounded-lg md:h-60 md:w-80 md:rounded-3xl"
                        src="https://i.ytimg.com/vi/JWz0Gwd2Ppo/maxresdefault.jpg"
                        
                      />
                      <div className="flex flex-col px-8 w-full justify-between">
                        <div>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Title</h5>
                          <div className="flex justify-between mt-1">
                            <p className="font-normal text-gray-900">Thời lượng: 2 giờ</p>
                            <p className="font-normal text-gray-900">Phương tiện: Xe máy</p>
                          </div>
                          <p className="text-sm mt-4">
                            ⭐ <span>5</span> (<span>4</span>) đánh giá
                          </p>
                          <hr className="my-6 bg-gray-500 w-full" />
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold text-secondary">300đ / Khách</p>
                           <NavLink to="/tours/tour-detail" className="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-secondary bg-primary rounded-3xl hover:bg-secondary hover:text-white shadow-3xl focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                Đặt ngay
                </NavLink>
                        </div>
                      </div>
                    </a>
                  </li>
              
              </ul>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-12">
              <Paginate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPage;
