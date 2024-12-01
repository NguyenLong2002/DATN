
const TourDetail = () => {


  return (
    <div className="mt-28" id="TourDetail">
      {/* Header Section */}
      <div className="mx-auto w-3/4 flex justify-between">
        <div className="w-3/5">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            title
          </h1>
          <div className="mt-2">
            <span className="bg-gray-200 px-2 py-1 rounded-md mr-2 font-semibold text-sm text-gray-600">
              Tiếng Anh/Tiếng Việt
            </span>
            <span className="bg-gray-200 px-2 py-1 rounded-md mr-2 font-semibold text-sm text-gray-600">
              Tùy chọn đón tại khách sạn
            </span>
            <span className="bg-gray-200 px-2 py-1 rounded-md mr-2 font-semibold text-sm text-gray-600">
              Thời lượng: 2 giờ
            </span>
          </div>
          <p className="text-xl mt-2 font-semibold text-gray-700">
            <span className="text-yellow-300">&#9733;</span>
            <span className="text-yellow-300">
              5
            </span>
            (<a
              href="#"
              
              className="text-lg cursor-pointer hover:underline"
            >
              5 đánh giá
            </a>)
          </p>
        </div>
        <div>
          <p className="text-4xl font-bold text-secondary">
           300 <span>đ</span> / Khách
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-3/4 mx-auto flex mt-8">
        <div className="grid gap-4 grid-flow-col grid-cols-12 w-full">
          <div className="col-span-8">
            <img
              className="h-96 w-full rounded-lg"
              src="https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/fsmsr/2024_08_20/z4973874897101-47aa1ecf4e523a2f7d3358b8b95e85eb-1947.jpg.webp"
             
            />
          </div>
          <div className="grid row-span-1 gap-4 col-span-4">
            
              <div>
                <img
                  className="h-[184px] w-full rounded-lg"
                  src="https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/fsmsr/2024_08_20/z4973874897101-47aa1ecf4e523a2f7d3358b8b95e85eb-1947.jpg.webp"
                  
                />
              </div>
           
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="sticky top-[68px] bg-white z-20 transition-all duration-300 ease-in-out">
        <div className="w-3/4 mx-auto mt-12">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 bg-gray-200 rounded-lg p-2">
            <li className="me-2">
              <a
                href="#"
            
               
              >
                Gói dịch vụ
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
               
              
              >
                Giới thiệu
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
              
              >
                Đánh giá
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Sections */}
      <div className="w-3/4 mx-auto flex">
        <div className="w-2/3 mr-4">
          {/* Service Section */}
          <div id="service"  className="pt-12">
            <h1 className="text-3xl font-bold">Gói dịch vụ</h1>
            <div className="w-full bg-gray-300 p-5 rounded-xl mt-8">
        <div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold text-gray-800">Thông tin gói dịch vụ</p>
            <p className="cursor-pointer font-semibold text-gray-900 hover:text-secondary">
              Xóa tất cả
            </p>
          </div>
          <h3 className="text-gray-600 text-sm mt-4">Xin chọn ngày tham gia</h3>
          <div className="relative max-w-sm mt-2">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block ps-10 p-2.5"
            />
          </div>

          <h3 className="text-gray-600 text-sm mt-4">Số lượng</h3>
          <div className="mt-2 flex justify-between items-center px-4 py-2 bg-white rounded-md">
            <p className="font-semibold text-gray-900">Người lớn</p>
            <div className="flex items-center">
              <p className="text-gray-900 mr-3 font-semibold">
                300
                <span>đ</span>
              </p>
              <div className="relative flex items-center max-w-32">
                <button
                  
                  type="button"
                  className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                >
                  <svg className="w-3 h-3 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                  </svg>
                </button>
                <input
                  type="text"
                  
                  readOnly
                  className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                />
                <button
                 
                  type="button"
                  className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                >
                  <svg className="w-3 h-3 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
            <div className="mt-2 flex justify-between items-center px-4 py-2 bg-white rounded-md">
              <p className="font-semibold text-gray-900">Trẻ em(5-8)</p>
              <div className="flex items-center">
                <p className="text-gray-900 mr-3 font-semibold">
                 200
                  <span>đ</span>
                </p>
                <div className="relative flex items-center max-w-32">
                  <button
                    
                    type="button"
                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                  >
                    <svg className="w-3 h-3 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input
                    type="text"
                   
                    readOnly
                    className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                  />
                  <button
                  
                    type="button"
                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                  >
                    <svg className="w-3 h-3 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          
          <div className="mt-8 px-4 flex justify-between items-center">
            <div>
              <p className="text-gray-900 text-sm">Tổng tiền</p>
              <p className="text-2xl text-secondary">500đ</p>
            </div>
            <button
              
              className={`px-5 py-3 text-sm font-medium text-center rounded-xl shadow-3xl transition-colors duration-300 ease-in-out
                'bg-primary hover:bg-secondary text-secondary hover:text-white' 'bg-gray-300 text-gray-700 cursor-not-allowed'
              `}
            >
              Đặt ngay
            </button>
          </div>
        </div>
      </div>
          </div>

          {/* Introduction Section */}
          <div id="introduce" className="pt-12">
            <h3 className="text-3xl font-bold">Giới thiệu</h3>
            <div className=" mt-8">
                <p className="">
                    Du lịch là việc đi lại nhằm mục đích vui thú hoặc kinh doanh; cũng là lý thuyết và thực hành về tổ chức các chương trình đi du lịch, ngành kinh doanh nhằm thu hút, cung cấp và giải trí cho khách du lịch, và việc kinh doanh của các tổ chức điều hành các tour du lịch.[1] Tổ chức Du lịch Thế giới định nghĩa du lịch nói chung, theo nghĩa "vượt ra ngoài nhận thức chung về du lịch là chỉ giới hạn trong hoạt động nghỉ lễ", vì mọi người "đi du lịch và ở trong những nơi ngoài môi trường thông thường của họ không quá một năm liên tiếp để giải trí và không ít hơn 24 giờ, với mục đích kinh doanh và các mục đích khác".[2] Du lịch có thể là du lịch nội địa (trong quốc gia của khách du lịch) hoặc du lịch quốc tế có cả ý nghĩa đến và đi, có ý nghĩa quan trọng đối với cán cân thanh toán của một quốc gia (tác động của du lịch).
                </p>
            </div>
        
          </div>

          {/* Evaluate Section */}
          <div id="evaluate"  className="pt-12">
        
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold">Đánh giá (5)</h3>
                <button
                
                  className="px-8 py-2 text-lg font-medium text-center text-secondary bg-primary rounded-xl shadow-3xl hover:text-white hover:bg-secondary transition-colors duration-200 ease-in-out cursor-pointer"
                >
                  Gửi đánh giá
                </button>
              </div>
              <div className="mt-12">
                <div className="flex w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl px-2 py-4">
                  <div className="w-1/3 text-center my-auto">
                    <p className="text-yellow-300 text-5xl font-bold flex items-center justify-center">
                      5{" "}
                      <i className="fas fa-star text-3xl ml-2" />
                    </p>
                  </div>
                  <span className="h-32 w-[1px] bg-gray-400 block my-auto mr-12"></span>
                  <div className="w-2/3">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div className="flex items-center mt-3" key={stars}>
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
                          {stars} sao
                        </a>
                        <div className="w-3/4 h-3 mx-4 bg-gray-200 rounded">
                          <div
                            className="h-3 bg-yellow-300 rounded"
                            style={{ width: `50%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500">
                          40 %
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-12">
                  
                    <div
                      
                      className="w-full border border-gray-300 text-gray-900 shadow-lg rounded-3xl p-4 mt-5"
                    >
                      <p className="flex">
                        
                            <i className="w-5 h-5 ms-1 text-yellow-300 fas fa-star" />
                          
                      </p>
                      <p className="text-xl font-medium text-gray-900 mt-3 ml-1">
                        sds
                      </p>
                      <p className="text-sm font-medium mt-3 text-gray-600 ml-1">
                        hay
                      </p>
                      <p className="text-gray-700 mt-3 ml-1">
                        12
                      </p>
                    </div>
                  
                  <div className="mt-10 flex justify-center">
                  pani
                  </div>
                </div>
                <span className="block w-3/4 mx-auto h-[1px] bg-primary my-12"></span>
                <div id="evaluteForm" className="pt-12">
                  <form>
                    <div className="mb-5 flex justify-between">
                      <div className="w-1/2 mx-2">
                        <label htmlFor="rating" className="block ml-6 text-sm font-medium">
                          Chất lượng
                        </label>
                        <div className="flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full w-full px-2 py-2">
                        
                              <i
                                className={`w-7 h-7 ms-3 cursor-pointer transition duration-200 ease-in-out transform
                                
                                    ? "text-yellow-300"
                                    : "text-gray-300"
                                } fas fa-star`}
                              
                              />
                        </div>
                      </div>
                      <div className="w-1/2 mx-2">
                        <label htmlFor="username" className="block ml-6 text-sm font-medium">
                          Họ và tên
                        </label>
                        <input
                          name="username"
                          type="text"
                          id="username"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full px-4 py-3"
                          placeholder="Nhập họ và tên"
                          
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-5 flex justify-between">
                      <div className="w-1/2 mx-2">
                        <label htmlFor="phone" className="block ml-6 text-sm font-medium">
                          Số điện thoại
                        </label>
                        <input
                          name="phone"
                          type="text"
                          id="phone"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full px-4 py-3"
                          placeholder="Nhập số điện thoại"
                          
                          required
                        />
                      </div>
                      <div className="w-1/2 mx-2">
                        <label htmlFor="email" className="block ml-6 text-sm font-medium">
                          Địa chỉ email
                        </label>
                        <input
                          name="email"
                          type="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full px-4 py-3"
                          placeholder="Nhập email"
                        
                          required
                        />
                      </div>
                    </div>
                    <div className="mx-2">
                      <label htmlFor="reviewText" className="block ml-6 text-sm font-medium">
                        Nhận xét của bạn
                      </label>
                      <textarea
                        name="reviewText"
                        id="reviewText"
                      
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl block w-full p-3"
                        placeholder="Nhận xét của bạn"
                        
                        required
                      ></textarea>
                    </div>
                    <div className="text-center mt-8">
                      <button
                        type="submit"
                        className="px-8 py-2 text-lg font-medium text-center text-white bg-primary rounded-xl shadow-3xl hover:text-secondary hover:bg-secondary transition-colors duration-200 ease-in-out cursor-pointer"
                      >
                        Gửi đánh giá
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 ml-4 mt-28">
                <div className="relative bg-gray-300 p-5 rounded-xl ">
                    <div className="absolute top-5 -left-7 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[15px] border-t-[15px] border-transparent border-r-gray-300"></div>
                    <div className="text-xl font-semibold text-gray-800">Chi tiết gói dịch vụ</div>
                    <div className="">
                        <div className="">
                            <h2 className="text-lg font-semibold text-gray-800 mt-2">Lịch trình.</h2>
                            <p className="">Thời lượng: 2 giờ</p>
                            <div className="mt-2" >
                               <p className="font-semibold text-gray-900"> Khởi hành </p>
                               <p className="px-2 ml-2 font-medium text-gray-800">Cho biết thời gian bắt đầu mong muốn của bạn khi thanh toán (thời gian sớm nhất lúc 8:00, muộn nhất lúc 18:00)</p>
                               <ul className="my-2">
                                    <li className="list-disc ml-7 py-1 text-sm font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900" >
                                        <span className="">  destination </span>
                                    </li>
                                    
                                </ul>
                               <p className="font-semibold text-gray-900">Kết thúc </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold text-gray-800 ">Thông tin tập trung / đón khách.</h2>
                            <h4 className="text-gray-800 font-semibold ml-2 mt-2">Thời gian được xác định sau khi đặt</h4>
                            <p className="mx-4"><span className="text-gray-900 font-medium">- Đưa đón miễn phí tại :</span> df. Nếu khách sạn của bạn nằm ngoài khu vực đón, nhà điều hành sẽ thông báo về phụ phí hoặc địa điểm tập trung.</p>
                            <h4 className="text-gray-800 font-semibold ml-2 mt-2">Văn phòng điều hành.</h4>
                            <p className="mx-4"><span className="text-gray-900 font-medium">- Địa chỉ:</span> hanoi</p>
                            <h4 className="text-gray-800 font-semibold ml-2 mt-2">Lưu ý <span className="text-red-700">*</span>.</h4>
                            <p className="mx-4 text-gray-700">- Vui lòng đến điểm xuất phát trước giờ khởi hành 10 phút.</p>
                            <p className="mx-4 text-gray-700">- Không hoàn tiền cho khách đến trễ hoặc vắng mặt.</p>
                            <p className="mx-4 text-gray-700">- Nhập tên và địa chỉ khách sạn của bạn ở trang thanh toán.</p>
                        </div>
                    </div>
                </div>
        </div>
      </div>
        
    </div>
  );
};

export default TourDetail;
