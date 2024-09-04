import { Row, Col } from 'antd';
import { EuroCircleOutlined, LineChartOutlined, UserOutlined, UnorderedListOutlined } from "@ant-design/icons";
import "./gird.scss";


function LearnGrid() {
    return (
        <>
            <div className="metrics">
                <Row gutter={[10, 8]}>
                    <Col lg={6} sm={12} xs={24}>
                        <div className="metrics__box">
                            <div className="metrics__icon">
                                <EuroCircleOutlined />
                            </div>
                            <div className="metrics__content" >
                                <div className="metrics__number">$23,523</div>
                                <div className="metrics__desc">Profit</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} sm={12} xs={24}>
                        <div className="metrics__box">
                            <div className="metrics__icon">
                                <LineChartOutlined />
                            </div>
                            <div className="metrics__content" >
                                <div className="metrics__number">+ 17.21%</div>
                                <div className="metrics__desc">Growth</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} sm={12} xs={24}>
                        <div className="metrics__box">
                            <div className="metrics__icon">
                                <UnorderedListOutlined />
                            </div>
                            <div className="metrics__content" >
                                <div className="metrics__number">3,685</div>
                                <div className="metrics__desc">Orders</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} sm={12} xs={24}>
                        <div className="metrics__box">
                            <div className="metrics__icon">
                                <UserOutlined />
                            </div>
                            <div className="metrics__content" >
                                <div className="metrics__number">1,832</div>
                                <div className="metrics__desc">Customers</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="chart">
                <Row gutter={[10,8]}>
                    <Col lg={8} xs={24}>
                        <div style={{ height: "400px" }} className="chart__img">Content</div>
                    </Col>
                    <Col lg={16} xs={24}>
                        <div style={{ height: "400px" }} className="chart__metrics">Content</div>
                    </Col>
                </Row>
            </div>
            <div className="productchart">
                <Row gutter={[10,8]}>
                    <Col lg={16} xs={24}>
                        <div style={{ height: "400px" }} className="productchart__img">Content</div>
                    </Col>
                    <Col lg={8} xs={24}>
                        <div style={{ height: "400px" }} className="chart__metrics">Content</div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default LearnGrid;