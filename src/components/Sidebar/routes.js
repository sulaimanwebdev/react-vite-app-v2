import Home from "../../assets/icons/Home.jsx"
import Comments from "../../assets/icons/comments.jsx"
import Info from "../../assets/icons/Info.jsx"
import AddressBook from "../../assets/icons/address-book.jsx"
import ChartPie from "../../assets/icons/chart-pie-alt"
import Megaphone from "../../assets/icons/megaphone"
import Calendar from "../../assets/icons/calendar"
import Settings from "../../assets/icons/settings"

const routes = [
  {
    path: "/",
    name: "Home",
    icon: Home,
  },
  {
    path: "/chat",
    name: "Chat",
    icon: Comments,
  },
  {
    path: "/chatbot",
    name: "Chatbot",
    icon: Info,
  },
  {
    path: "/contacts",
    name: "Contacts",
    icon: AddressBook,
  },
  {
    path: "/analytics",
    name: "Analytic",
    icon: ChartPie,
  },
  {
    path: "/champaign",
    name: "Champaign",
    icon: Megaphone,
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: Calendar,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: Settings,
  },
];

export default routes;
