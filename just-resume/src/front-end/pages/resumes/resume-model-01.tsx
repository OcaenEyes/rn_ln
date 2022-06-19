import {
  UserOutlined,
  ProjectOutlined,
  ExperimentOutlined,
  RocketOutlined,
  SmileOutlined,
  GithubOutlined,
  WechatOutlined,
  DesktopOutlined,
  GlobalOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Card, PageHeader, Tag, Image, Progress, Timeline } from "antd";
import "../../themes/resume.less";
var resumeData = require("../../data/resume.json");
const Resume01 = () => {
  return (
    <div className="resume-detail">
      <PageHeader
        className="resume-detail-header"
        onBack={() => window.history.back()}
        title="Reusme"
        subTitle="This is a resume"
      />
      <Card className="resume-detail-content" hoverable={true}>
        <UserInfo />
        <ProjectInfo />
        <WorkInfo />
        <SkillInfo />
      </Card>
    </div>
  );
};

const UserInfo = () => {
  const userInfo = resumeData.userInfo;
  return (
    <div>
      <Tag className="resume-tag" icon={<UserOutlined />}>
        个人简介
      </Tag>
      <div className="resume-detail-user-info">
        <div
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <div style={{ height: "10%", fontSize: "16px", fontWeight: "bold" }}>
            <Tag icon={<SmileOutlined />}>姓名</Tag>
            {userInfo.name}
          </div>
          <div
            className="conact-website"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ height: "60%" }}>
              <div>
                <Tag icon={<PhoneOutlined />}>手机</Tag>
                {userInfo.phone}
              </div>
              <div>
                <Tag icon={<MailOutlined />}>邮箱</Tag> {userInfo.email}
              </div>
              <div>
                <Tag icon={<WechatOutlined />}>微信</Tag>
                {userInfo.wechat}
              </div>
            </div>
            <div>
              <div>
                <Tag icon={<DesktopOutlined />}>Website</Tag>
                {userInfo.website}
              </div>
              <div>
                <Tag icon={<GlobalOutlined />}>Blog</Tag>
                {userInfo.blog}
              </div>
              <div>
                <Tag icon={<GithubOutlined />}>Github</Tag>
                {userInfo.github}
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "22%" }}>
          <Image
            width={160}
            height={160}
            src="error"
            fallback="data:image/png;base64,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"
          />
        </div>
      </div>
    </div>
  );
};

const ProjectInfo = () => {
  const projectInfo = resumeData.projectExperience;
  return (
    <div>
      <Tag className="resume-tag" icon={<ExperimentOutlined />}>
        项目经历
      </Tag>
      <div className="resume-detail-project-info">
        <Timeline>
          {projectInfo.map((item: any, key: any) => (
            <Timeline.Item
              key={key}
              style={{ paddingBottom: "4px", paddingTop: "10px" }}
            >
              <div className="project-summary">
                <div>{item.title}</div>
                <div>{item.date}</div>
                <div>{item.res}</div>
              </div>
              <div className="project-describe">{item.des}</div>
            </Timeline.Item>
          ))}
          <Timeline.Item
            color="#108ee9"
            dot={<SmileOutlined />}
            style={{ paddingBottom: "0px", paddingTop: "4px" }}
          >
            <p>🚀起航～🚀</p>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
};

const WorkInfo = () => {
  const workInfo = resumeData.workExperience;
  return (
    <div>
      <Tag className="resume-tag" icon={<ProjectOutlined />}>
        工作经历
      </Tag>
      <div className="resume-detail-work-info">
        <Timeline>
          {workInfo.map((item: any, key: any) => (
            <Timeline.Item
              key={key}
              style={{ paddingBottom: "6px", paddingTop: "10px" }}
            >
              <div className="work-summary">
                <div>{item.company}</div>
                <div>{item.job}</div>
                <div>{item.date}</div>
              </div>
              <div>{item.des}</div>
            </Timeline.Item>
          ))}
          <Timeline.Item
            color="#108ee9"
            dot={<SmileOutlined />}
            style={{ paddingBottom: "0px", paddingTop: "4px" }}
          >
            <p>🚀起航～🚀</p>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
};

const SkillInfo = () => {
  const skillInfo = resumeData.skills;
  return (
    <div>
      <Tag className="resume-tag" icon={<RocketOutlined />}>
        技能📖
      </Tag>
      <div className="resume-detail-skill-info">
        {skillInfo.map((item: any, key: any) => (
          <div key={key}>
            <div className="skill">
              <div>{item.skill}</div>
              <Progress
                style={{ width: "82%" }}
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={item.score}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume01;
