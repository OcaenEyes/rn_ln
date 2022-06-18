import { Avatar, Card, Col, Row } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const ResumeAll = () => {
  const { Meta } = Card;
  const listResumes = [1, 2, 3, 4, 5, 6, 7].map((num, index) => (
    <Col key={index}>
      <Link to={"resume0" + num}>
        <Card
          hoverable={true}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={"Resume Model " + num}
            description="This is the description"
          />
        </Card>
      </Link>
    </Col>
  ));
  return <Row gutter={[18, 18]}>{listResumes}</Row>;
};

export default ResumeAll;
