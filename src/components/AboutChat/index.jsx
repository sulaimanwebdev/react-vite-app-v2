import { CgClose, CgSmile } from "react-icons/cg";
import MessengerIcon from "../../assets/icons/messenger.svg";
import { FiUser, FiMail } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { IoLanguage } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import Accordion from "../Accordion";
import FacebookChat from '../FacebookChat/index';


const drawerStyle = {
  base: "flex flex-col flex-shrink-0 transition pr-8 overflow-y-auto",
  active: "w-72",
  inactive: "w-0 hidden",
};

const AboutChatDrawer = ({
  disclousure,

}) => {
  return (
    <>
   
     <div >
     <FacebookChat disclousure={disclousure}/>
     </div>



    </>
  );
};

export default AboutChatDrawer;
