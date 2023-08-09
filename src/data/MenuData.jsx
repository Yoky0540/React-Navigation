import { FaHome,FaUserAlt,FaShoppingCart,FaUserCog} from "react-icons/fa";

const MenuData = [
    {
        title:"HOME",
        path:"/",
        icon:<FaHome/>
    },
    {
        title:"MEMBER",
        path:"/member",
        icon:<FaUserAlt/>
    },
    {
        title:"CART",
        path:"/product",
        icon:<FaShoppingCart/>
    },
    {
        title:"ADMIN",
        path:"/admin",
        icon:<FaUserCog/>
    }
]


export default MenuData;