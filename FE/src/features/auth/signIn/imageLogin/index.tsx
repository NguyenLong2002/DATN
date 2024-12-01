import imageLogin from '../../../../assets/images/signin-image.jpg';
import { Link } from "react-router-dom";

const ImageLogin = () => {
  return (
    <div className="singIn__content-image">
      <figure>
        <img src={imageLogin} alt="sing in image" />
        <Link to="/login/sign-up"><span className="">Chưa có tài khoản? <span className="text-primary font-bold">Đăng ký</span></span></Link>
      </figure>
    </div>
  );
};

export default ImageLogin;
