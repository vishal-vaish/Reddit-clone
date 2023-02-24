import styled from "styled-components";
import Button from "../button/Button";
import Logo from "../logo/Logo";
// import "../logo/Logo"
import Avatar from "../avatar/Avatar";
import logoImage from "../../assets/logo.png";
import avatarImage from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setUserLoggedIn } from "../../store/userSlice";


const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: inherit;
  margin-right: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100vw;
  background-color: #ecf2ff;
`;


const HeaderContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.isLoggedIn);

  const showToastMessage = () => {
    toast.success("Log Out Success !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <Header>
      <Logo src={logoImage} alt="Logo" />
      {user ?
        <h4 style={{
          fontSize: "30px",
          color: "red",
          textTransform: "uppercase"
        }}>{sessionStorage.getItem("name")}</h4> : ""}


      <Div>
        {!user ? (
          <Button
            height={"40px"}
            width={"100px"}
            backgroundColor={"#ff4500"}
            borderRadius={"20px"}
            border={"none"}
            fontColor={"white"}
            fontSize={"16px"}
            hover={"0.7"}
          >
            <Link to="./register">SIGN UP</Link></Button>
            ): (
            <Button
              height={"40px"}
              width={"100px"}
              backgroundColor={"#ff4500"}
              borderRadius={"20px"}
              border={"none"}
              fontColor={"white"}
              fontSize={"16px"}
              hover={"0.7"}
              onClick={() => {
                navigate("/signin");
                dispatch(setUserLoggedIn(false));
                showToastMessage();
              }}
            >
              <Link to="./">LOG OUT</Link>
            </Button>
        )}

          </Div>
    </Header>
  );
};

export default HeaderContainer;