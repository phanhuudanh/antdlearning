import { BellOutlined } from "@ant-design/icons";
import { Dropdown, Button } from "antd";
import "./notify.scss";

function Notify() {
    const items = [
        {
            label: "Menu-1",
            key: "menu-1"
        },
        {
            label: "Menu-2",
            key: "menu-2"
        },
        {
            label: 'Menu-3',
            key: 'menu-3',
        },
        {
            label: "Menu-4",
            key: "menu-4"
        },
        {
            label: "Menu-5",
            key: "menu-5"
        },
        {
            label: "Menu-6",
            key: "menu-6"
        },
        {
            label: "Menu-7",
            key: "menu-7"
        },
    ];
    return (
        <>
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
                dropdownRender={(menu) => (
                    <>
                    <div className="notify">
                        <div className="notify__header">
                            <div className="notify__title"><BellOutlined /> Notification</div>
                            <Button type="link">View all</Button>
                        </div>
                        <div className="notify__body">
                            {menu}
                        </div>
                    </div>
                    </>
                )}
            >
                <Button type="text" icon={<BellOutlined />}></Button>
            </Dropdown>
        </>
    )
}

export default Notify;