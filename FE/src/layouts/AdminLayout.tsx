import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { isUserLoggedIn, getToken } from "../utils/index";
// import SideBar from "../components/sideBarComponent";
import SideBar from "../components/shareCompt/SideBar"
import { fetchUserInfo } from '../store/user';
import { useAppDispatch, useAppSelector } from '../store/index';

const AdminLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const navigate = useNavigate()

  const dispatch = useAppDispatch();
  const userInfo = useAppSelector<UserState>((state) => state.user)

  useEffect(() => {
    const token = getToken();
    if (token) {
      dispatch(fetchUserInfo());
    }
  }, [])

  useEffect(() => {
    if (!!userInfo.role_user && +userInfo.role_user !== 1) {
      navigate('/forbidden')
    }
  }, [userInfo.role_user])

  // if (!isUserLoggedIn()) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <Layout className="layout__admin-private">
      <SideBar />
        <Outlet />
    </Layout>
  );
};

export default AdminLayout;
