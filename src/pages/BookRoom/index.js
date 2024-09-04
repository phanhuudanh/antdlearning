import { Row, Col, Input, Button, Checkbox, Space, Radio } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import "./bookroom.scss";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { DatePicker } from "antd";
import { Select } from "antd";
import { bookRoom } from "../../services/roomservice";

function BookRoom() {

    const { RangePicker } = DatePicker;

    const [data, setData] = useState({
        gift: "A hat",
        timegetroom: "14 pm"
    });

    const timeoptions = [];

    for(let i=7 ; i <=24; i++){
        if(i <= 9){
            timeoptions.push({
                label: `0${i} am`,
                value: `0${i} am`
            })
        }
        else if(i>9 && i<= 12){
            timeoptions.push({
                label: `${i} am`,
                value: `${i} am`
            })
        }
        else{
            timeoptions.push({
                label: `${i} pm`,
                value: `${i} pm`
            })  
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const response = bookRoom(data);
        if( response ){
            alert("Congratulation!");
        }else{
            alert("Fail!");
        }
    };

    const handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({
            ...data,
            [name]: value
        })
    };

    const handleChangeCheckBox = (e) => {
        setData({
            ...data,
            services: e
        }
        )
    };

    const handleChangeDate = (dates, dateString) => {
        setData({
            ...data,
            date: dateString
        })
    };

    const handleChangeRadio = (e) => {
        setData({
            ...data,
            gift: e.target.value
        })
    };

    const handleChangeTime = (e) => {
        setData({
            ...data,
            timegetroom: e
        })
    };
    return (
        <>
            <div className="bookroom">
                <h2>Book Room</h2>
                <form onSubmit={handleSubmit}>
                    <Row gutter={[10, 10]}>
                        <Col span={24}>
                            <span>Full Name:</span>
                            <Input placeholder="Phan Huu Danh" prefix={<UserOutlined />} name="fullname" onChange={handleChangeInput} />
                        </Col>
                        <Col lg={12} xs={24}>
                            <span>Phone Number:</span>
                            <Input placeholder="84+" prefix={<PhoneOutlined />} name="phone" onChange={handleChangeInput} />
                        </Col>
                        <Col lg={12} xs={24}>
                            <span>Email:</span>
                            <Input placeholder="@gmail.com" prefix={<MailOutlined />} name="email" onChange={handleChangeInput} />
                        </Col>
                        <Col span={24}>
                            <span>Information:</span>
                            <TextArea placeholder="Infomation" rows={4} name="information" onChange={handleChangeInput} />
                        </Col>
                        <Col md={12} xs={24}>
                            <Checkbox.Group onChange={handleChangeCheckBox} name="services">
                                <span className="service__span">Services:</span>
                                <Space direction="vertical">
                                    <Checkbox value="Hire a motor">Hire a motor</Checkbox>
                                    <Checkbox value="Hire a 4-seater car">Hire a 4-seater car</Checkbox>
                                    <Checkbox value="Hire a 7-seater car">Hire a 7-seater car</Checkbox>
                                    <Checkbox value="Hire a 16-seater car">Hire a 16-seater car</Checkbox>
                                </Space>
                            </Checkbox.Group>
                        </Col>
                        <Col md={12} xs={24}>
                            <Radio.Group onChange={handleChangeRadio} name="gift" defaultValue={"A hat"}>
                                <span className="gift__span">Gift:</span>
                                <Space direction="vertical">
                                    <Radio value="A hat">A hat</Radio>
                                    <Radio value="A speaker">A speaker</Radio>
                                    <Radio value="A t-shirt">A t-shirt</Radio>
                                    <Radio value="A random-gift">A random-gift</Radio>
                                </Space>
                            </Radio.Group>
                        </Col>
                        <Col span={12}>
                            <span className="date__span">Date:</span>
                            <RangePicker format={"DD/MM/YYYY"} onChange={handleChangeDate} placeholder={["Get room", "Pay room"]} />
                        </Col>
                        <Col span={12}>
                            <span className="time__span">Time get room:</span>
                            <Select
                                defaultValue={"14 pm"}
                                style={{
                                    width: 200,
                                }}
                                onChange={handleChangeTime}
                                options = {timeoptions}
                            />
                        </Col>
                        <Col span={24}>
                            <Button type="primary" htmlType="submit">Book</Button>
                        </Col>
                    </Row>
                </form>
            </div>
        </>
    )
}

export default BookRoom;