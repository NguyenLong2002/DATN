import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import authApi from "../../api/auth";
import Notification from "../../components/notificationSend";

import emailImg from "../../assets/images/gmail-img.png"

const VerifyEmail = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmail = async () => {
            const token = searchParams.get('token');
            if (token) {
                try {
                    await authApi.verifyEmail(token); 
                    Notification({
                        message: 'Xác nhận email thành công!',
                        description: 'Bạn có thể đăng nhập ngay bây giờ.',
                    });
                    navigate('/login'); 
                } catch (error) {
                    Notification({
                        message: 'Xác nhận thất bại!',
                        description: 'Đường dẫn xác nhận không hợp lệ hoặc đã hết hạn.',
                        type: 'error',
                    });
                }
            }
        };

        verifyEmail();
    }, [searchParams, navigate]);

    return <div
  className="flex items-center justify-center h-screen bg-gray-100"
>
  <div className="text-center">
    <img
      src={emailImg}
      alt="email-img"
      className="w-[200px] mx-auto mb-4"
    />
    <h2 className="text-xl font-semibold mb-4">
      Vui lòng xác minh email của bạn
    </h2>
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      <a href="https://mail.google.com/mail/u/0/#inbox" className="">
        Go to your email
      </a>
    </button>
  </div>
</div>


};

export default VerifyEmail;
