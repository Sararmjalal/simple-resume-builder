interface ResumeContact {
  key: string;
  title: string;
  value: string;
}

interface ResumePersonalInfo {
  fullName: string;
  role: string;
  location: string;
  bornOn: string;
  about: string;
  contact: ResumeContact[];
}

interface ResumeSummary {
  title: string;
  value: string;
}

interface ResumeSkill {
  key: string;
  title: string;
  items: string[];
}

interface ResumeSkills {
  title: string;
  children: ResumeSkill[];
}

interface ResumeProjectItem {
  key: string;
  title: string;
  value: string;
}

interface ResumeProject {
  title: string;
  items: ResumeProjectItem[];
}

interface ResumeCompany {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  projects: ResumeProject[];
}

interface ResumeExperience {
  title: string;
  company: ResumeCompany[];
}

interface ResumeEducationItem {
  title: string;
  description: string;
}

interface ResumeEducation {
  title: string;
  children: ResumeEducationItem[];
}

interface Resume {
  personalInfo: ResumePersonalInfo;
  summary: ResumeSummary;
  skills: ResumeSkills;
  experience: ResumeExperience;
  education: ResumeEducation;
}
