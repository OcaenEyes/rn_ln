import { Avatar, Card, PageHeader } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Resume01 = () => {
  const { Meta } = Card;
  return (
    <div className="resume-detail">
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
      <Card
        hoverable={true}
        style={{ backgroundColor: "#000" }}
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
          title={"Resume Model "}
          description="This is the description"
        />
      </Card>
    </div>
  );
};
export default Resume01;
