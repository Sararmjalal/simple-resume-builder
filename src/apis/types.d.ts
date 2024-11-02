interface ResumeV1Contact {
  key: string;
  title: string;
  value: string;
}

interface ResumeV1PersonalInfo {
  fullName: string;
  role: string;
  location: string;
  bornOn: string;
  about: string;
  contact: ResumeV1Contact[];
}

interface ResumeV1Summary {
  title: string;
  value: string;
}

interface ResumeV1Skill {
  key: string;
  title: string;
  items: string[];
}

interface ResumeV1Skills {
  title: string;
  children: ResumeV1Skill[];
}

interface ResumeV1ProjectItem {
  key: string;
  title: string;
  value: string;
}

interface ResumeV1Project {
  title: string;
  items: ResumeV1ProjectItem[];
}

interface ResumeV1Company {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  projects: ResumeV1Project[];
}

interface ResumeV1Experience {
  title: string;
  company: ResumeV1Company[];
}

interface ResumeV1EducationItem {
  title: string;
  description: string;
}

interface ResumeV1Education {
  title: string;
  children: ResumeV1EducationItem[];
}

interface ResumeV1 {
  personalInfo: ResumeV1PersonalInfo;
  summary: ResumeV1Summary;
  skills: ResumeV1Skills;
  experience: ResumeV1Experience;
  education: ResumeV1Education;
}
