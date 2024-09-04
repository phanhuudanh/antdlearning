import { Menu } from "antd";
import { RobotOutlined, ShopOutlined, ScheduleOutlined, HomeOutlined, LockOutlined, PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function MenuSider() {
    const items =[
        {
            label: "Menu-1",
            icon: <RobotOutlined />,
            key: "menu-1",
            children: [
                {
                    label: <Link to="/">DashBoard</Link>,
                    key: "dashboard"
                },
                {
                    label:"Menu 1-2",
                    key: "menu 1-2"
                }
            ]
        },
        {
            label: "Menu-2",
            icon: <ShopOutlined />,
            key: "menu-2",
            children: [
                {
                    label:"Menu 2-1",
                    key: "menu 2-1"
                },
                {
                    label:"Menu 2-2",
                    key: "menu 2-2"
                },
                {
                    label:"Menu 2-1",
                    key: "menu 2-3"
                }
            ]
        },
        {
            label: "Menu-3",
            icon: <ScheduleOutlined />,
            key: "menu-3",
            children: [
                {
                    label:"Menu 3-1",
                    key: "menu 3-1"
                },
                {
                    label:"Menu 3-2",
                    key: "menu 3-2"
                },
                {
                    label:"Menu 3-1",
                    key: "menu 3-3"
                }
            ]
        },
        {
            label: <Link to="/bookroom">BookRoom</Link>,
            icon: <HomeOutlined />,
            key: "bookroom"
        },
        {
            label: "Admin",
            icon: <LockOutlined />,
            children: [
                {
                    label: <Link to="/createroom">CreateRoom</Link>,
                    icon: <PlusOutlined />,
                    key: "createroom"
                },
                {
                    label: <Link to="/roomlist">RoomList</Link>,
                    icon: <UnorderedListOutlined />,
                    key: "roomlist"
                }
            ]
        }
    ]
    return (
        <>
            <Menu
                mode="inline"
                items={items}
                defaultSelectedKeys={["dashboard"]}
                defaultOpenKeys={["dashboard"]}
            />
        </>
    )
}

export default MenuSider;