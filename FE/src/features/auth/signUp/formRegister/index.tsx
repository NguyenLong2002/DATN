import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "antd";
import InputComponent from "../../../../components/form/inputComponent";
import ButtonComponent from "../../../../components/form/buttonComponent";
import {
  LockOutlined,
  UserOutlined,
  AliwangwangOutlined,
} from "@ant-design/icons";
import { schema, FormData } from "./constant";
import authApi from "../../../../api/auth";
import Notification from "../../../../components/notificationSend";
import { useNavigate } from "react-router-dom";


const FormRegister = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    // use resolver to validate with yup
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: Required<FormData>) => {
    try {
      setLoading(true);
      await authApi.signUp({...data, is_active: '0'});
      // Notification({
      //   // message: TEXT_COMMON.SUCCESS_TEXT.NOTIFY_MESSAGE,
      //   // description: TEXT_COMMON.SUCCESS_TEXT.CREATE_USER_DESCRIPTION,
      //   // duration: 10,
      // });

      navigate("/verify-email");
    } catch (error) {
      // NotificationError(error)
      throw error;
    } finally {
      setLoading(false);
    }
  };
  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="singUp__content-form">
      <h2 className="form__title text-2xl text-center">Đăng ký</h2>
      <Form
        name="basic"
        onFinish={handleSubmit(onSubmit)}
        onFinishFailed={onFinishFailed}
      >
        <InputComponent
          name="name"
          control={control}
          errors={errors}
          placeholder="Tên tài khoản"
          className="remove__border"
          icon={<UserOutlined className="site-form-item-icon" />}
        />
        <InputComponent
          name="email"
          control={control}
          errors={errors}
          placeholder="Email"
          className="remove__border"
          icon={<AliwangwangOutlined />}
        />
        <InputComponent
          name="password"
          control={control}
          errors={errors}
          placeholder="Mật khẩu"
          className="remove__border"
          type="password"
          icon={<LockOutlined />}
        />
        <InputComponent
          name="re_password"
          control={control}
          errors={errors}
          placeholder="Nhập lại mật khẩu"
          className="remove__border"
          type="password"
          icon={<LockOutlined />}
        />
        <ButtonComponent
          htmlType="submit"
          label="Đăng ký"
          className="btn__submit"
          loading={loading}
        />
      </Form>
    </div>
  );
};

export default FormRegister;
