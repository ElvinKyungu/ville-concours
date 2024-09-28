export interface SkillDetail {
  title: string
  description: string
  image: string
  isHigh: boolean // true if the skill level is "High", false if "Middle"
}

export interface ExperienceDetail {
  companyName: string
  duration: string
  workType: {
    location: string
    time: string
  }
  hardSkills: SkillDetail[]
  softSkills: SkillDetail[]
  creativeSkills: SkillDetail[]
}
