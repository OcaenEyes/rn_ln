import {
  UserOutlined,
  ProjectOutlined,
  ExperimentOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { Card, PageHeader, Tag } from "antd";
import "../../themes/resume.less";
const Resume01 = () => {
  var resumeData = require("../../data/resume.json");
  console.log(resumeData);
  return (
    <div className="resume-detail">
      <PageHeader
        className="resume-detail-header"
        onBack={() => window.history.back()}
        title="Reusme"
        subTitle="This is a resume"
      />
      <Card className="resume-detail-content" hoverable={true}>
        <div>
          <Tag icon={<UserOutlined />}>个人简介</Tag>
        </div>
        <div>
          <Tag icon={<ExperimentOutlined />}>项目经历</Tag>
        </div>
        <div>
          <Tag icon={<ProjectOutlined />}>工作经历</Tag>
        </div>
        <div>
          <Tag icon={<RocketOutlined />}>技能📖</Tag>
        </div>
      </Card>
    </div>
  );
};
export default Resume01;
