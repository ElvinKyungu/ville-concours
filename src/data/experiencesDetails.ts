import type { ExperienceDetail } from '@/types/experiences'
import artile1 from '@/assets/article-1.jpg'
import artile2 from '@/assets/article-2.jpg'
import artile3 from '@/assets/article-3.avif'

import capital from '@/assets/capital-otkyo.avif'
import growth from '@/assets/growth-tokyo.avif'
import origine from '@/assets/origine-tokyo.avif'
import culture from '@/assets/culture-modernity.avif'

export const HistoricalOrigins: ExperienceDetail = {
  title: "Historical Origin",
  image: origine,
  description: "The Meiji Restoration in 1868 marked the start of modernization. The Great Kanto Earthquake in 1923 devastated the city, followed by destruction during World War II (1939-1945). Reconstruction was completed in the 1950s.",
  articles: [
    {
      img: artile1,
      title: "Innovation",
      description: "Worked on cutting-edge frontend projects that required innovative solutions."
    },
    {
      img: artile2,
      title: "UI/UX Design",
      description: "Enhanced my skills in creating user-centric designs with a focus on accessibility."
    }
  ],
  personnages: [
    {
      img: artile3,
      title: "Innovation",
      description: "Worked on cutting-edge frontend projects that required innovative solutions."
    },
    {
      img: artile1,
      title: "UI/UX Design",
      description: "Enhanced my skills in creating user-centric designs with a focus on accessibility."
    }
  ]
}
export const capitalTransition: ExperienceDetail = {
  image: capital,
  title: "Tokyo Becomes the Capital",
  description: "In 1868, during the Meiji Restoration, Emperor Meiji moved the capital from Kyoto to Edo, renaming it Tokyo, which means 'Eastern Capital'. This move symbolized the beginning of Japan's modernization and the centralization of political power in Tokyo.",
  articles: [
    {
      img: artile1,
      title: "Capital Relocation",
      description: "Explores the strategic reasons behind moving the capital from Kyoto to Tokyo."
    },
    {
      img: artile2,
      title: "Political Modernization",
      description: "Examines how the move to Tokyo signaled a new era in Japan’s political landscape."
    }
  ],
  personnages: [
    {
      img: artile3,
      title: "Emperor Meiji",
      description: "The role of Emperor Meiji in relocating the capital and initiating Tokyo's modernization."
    },
    {
      img: artile1,
      title: "Samurai Transition",
      description: "How the shift of the capital impacted the samurai and their societal role."
    }
  ]
}

export const modernGrowth: ExperienceDetail = {
  title: "Modern Growth",
  image: growth,
  description: "The economic boom from the 1960s to the 1990s turned Tokyo into a global metropolis and a major financial center. Today, Tokyo is one of the world’s most influential cities.",
  articles: [
    {
      img: artile1,
      title: "Innovation",
      description: "Worked on cutting-edge frontend projects that required innovative solutions."

    },
    {
      img: artile2,
      title: "UI/UX Design",
      description: "Enhanced my skills in creating user-centric designs with a focus on accessibility."
    }
  ],
  personnages: [
    {
      img: artile3,
      title: "Innovation",
      description: "Worked on cutting-edge frontend projects that required innovative solutions."
    },
    {
      img: artile1,
      title: "UI/UX Design",
      description: "Enhanced my skills in creating user-centric designs with a focus on accessibility."
    }
  ]
}

export const significantEvents: ExperienceDetail = {
  image: culture,
  title: "Historical Events",
  description: "During the Edo period (1603-1868), Tokyo, then called Edo, transformed from a small fishing village into Japan’s political center. At the end of the Tokugawa shogunate in 1868, the city was renamed Tokyo, meaning \"Eastern Capital.\"",
  articles: [
    {
      img: artile1,
      title: "Innovation",
      description: "Worked on cutting-edge frontend projects that required innovative solutions."

    },
    {
      img: artile2,
      title: "UI/UX Design",
      description: "Enhanced my skills in creating user-centric designs with a focus on accessibility."
    }
  ],
  personnages: [
    {
      img: artile3,
      title: "Innovation",
      description: "Worked on cutting-edge frontend projects that required innovative solutions."
    },
    {
      img: artile1,
      title: "UI/UX Design",
      description: "Enhanced my skills in creating user-centric designs with a focus on accessibility."
    }
  ]
}