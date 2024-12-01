import imageRegister from '../../../../assets/images/signup-image.jpg';
import { Link } from "react-router-dom";

const ImageRegister = () => {
  return (
    <div className="singUp__content-image">
      <figure>
        <img src={imageRegister} alt="sing up image" />
        <Link to="/login" className="mt-2">Đã có tài khoản! <span className="font-bold text-primary">Đăng nhập</span></Link>
      </figure>
    </div>
  );
};

export default ImageRegister;
