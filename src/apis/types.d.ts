interface ResumeV1Contact {
  key: string
  title: string
  value: string
}

interface ResumeV1PersonalInfo {
  fullName: string
  role: string
  location: string
  bornOn: string
  about: string
  contact: ResumeV1Contact[]
}

interface ResumeV3PersonalInfo {
  fullName: string
  role: string
  location: string
  bornOn: string
  about: string
  contact: (ResumeV1Contact & { path: string })[]
}

interface ResumeV1Summary {
  title: string
  value: string
}

interface ResumeV1Skill {
  key: string
  title: string
  items: string[]
}

interface ResumeV1Skills {
  title: string
  children: ResumeV1Skill[]
}

interface ResumeV1ProjectItem {
  key: string
  title: string
  value: string
}

interface ResumeV1Project {
  title: string
  path?: string
  description?: string
  items: ResumeV1ProjectItem[]
}

interface ResumeV1Company {
  title: string
  description: string
  startTime: string
  endTime: string
  projects: ResumeV1Project[]
}

interface ResumeV1Experience {
  title: string
  companies: ResumeV1Company[]
}

interface ResumeV3SelfExperience {
  title: string
  projects: ResumeV1Project[]
}

interface ResumeV1EducationItem {
  title: string
  description: string
}

interface ResumeV1Education {
  title: string
  children: ResumeV1EducationItem[]
}

interface ResumeV1SoftSkills {
  title: string
  items: string[]
}

interface ResumeV1 {
  personalInfo: ResumeV1PersonalInfo
  summary: ResumeV1Summary
  skills: ResumeV1Skills
  experience: ResumeV1Experience
  softSkills: ResumeV1SoftSkills
  education: ResumeV1Education
}

interface ResumeV2Contact {
  key: string
  title: string
  value: string
}

interface ResumeV2PersonalInfo {
  fullName: string
  role: string
  location: string
  bornOn: string
  about: string
  contact: ResumeV2Contact[]
}

interface ResumeV2Summary {
  title: string
  value: string
}

interface ResumeV2Skill {
  key: string
  title: string
  items: string[]
}

interface ResumeV2Skills {
  title: string
  children: ResumeV2Skill[]
}

interface ResumeV2ProjectItem {
  key: string
  title: string
  value: string
}

interface ResumeV2Projects {
  title: string
  keyFeatures: string[]
}

interface ResumeV2Company {
  title: string
  description: string
  startTime: string
  endTime: string
  keyResponsibilities: string[]
}

interface ResumeV2Experience {
  title: string
  companies: ResumeV2Company[]
}

interface ResumeV2EducationItem {
  title: string
  description: string
}

interface ResumeV2Education {
  title: string
  children: ResumeV2EducationItem[]
}

interface ResumeV2SoftSkills {
  title: string
  items: string[]
}

interface ResumeV2 {
  personalInfo: ResumeV2PersonalInfo
  summary: ResumeV2Summary
  skills: ResumeV2Skills
  experience: ResumeV2Experience
  softSkills: ResumeV2SoftSkills
  education: ResumeV2Education
}
