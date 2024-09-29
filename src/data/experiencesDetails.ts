import type { ExperienceDetail } from '@/types/experiences'
import artile1 from '@/assets/article-1.jpg'
import artile2 from '@/assets/article-2.jpg'
import artile3 from '@/assets/article-3.avif'
import personnage1 from '@/assets/personnage-1.avif'
import personnage2 from '@/assets/personnage2.jpeg'
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
      title: "Meiji Restoration",
      description: "The Meiji Restoration of 1868 was a pivotal moment in Japanese history that led to the rapid modernization and industrialization of the country. It marked the end of feudal rule and the beginning of the imperial government."
    },
    {
      img: artile2,
      title: "Great Kanto Earthquake",
      description: "In 1923, the Great Kanto Earthquake struck Tokyo, causing massive destruction. It was a catalyst for urban redevelopment and modernization efforts in the subsequent decades."
    }
  ],
  personnages: [
    {
      img: artile3,
      title: "Emperor Meiji",
      description: "Emperor Meiji played a crucial role in transforming Japan from a feudal society into a modern state. His leadership was instrumental during the Meiji Restoration, which shifted power from the shogunate to the emperor."
    },
    {
      img: personnage1,
      title: "Tokugawa Yoshinobu",
      description: "The last shogun of the Tokugawa shogunate, Tokugawa Yoshinobu, played a significant role in the events leading to the Meiji Restoration. His resignation marked the end of centuries of feudal rule."
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
      img: personnage1,
      title: "Emperor Meiji",
      description: "The role of Emperor Meiji in relocating the capital and initiating Tokyo's modernization."
    },
    {
      img: personnage2,
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
      title: "Economic Miracle",
      description: "The post-war economic boom, often called the 'Japanese Economic Miracle,' transformed Tokyo into a thriving metropolis. This period saw rapid industrial growth, improved infrastructure, and increased global trade."
    },
    {
      img: artile2,
      title: "Urban Expansion",
      description: "During the economic growth period, Tokyo underwent significant urban expansion, with the construction of modern skyscrapers, bullet trains, and advanced urban planning to accommodate its growing population."
    }
  ],
  personnages: [
    {
      img: personnage1,
      title: "Prime Minister Eisaku Sato",
      description: "Under the leadership of Prime Minister Eisaku Sato, Tokyo experienced remarkable economic growth and hosted the 1964 Olympics, showcasing Japan's recovery and modernization."
    },
    {
      img: artile1,
      title: "Japanese Business Leaders",
      description: "Business leaders like Soichiro Honda and Akio Morita (founder of Sony) played crucial roles in Tokyo’s transformation into a global hub for technology and innovation during the economic boom."
    }
  ]
}

export const significantEvents: ExperienceDetail = {
  image: culture,
  title: "Significant Events",
  description: "During the Edo period (1603-1868), Tokyo, then called Edo, transformed from a small fishing village into Japan’s political center. At the end of the Tokugawa shogunate in 1868, the city was renamed Tokyo, meaning \"Eastern Capital.\"",
  articles: [
    {
      img: artile1,
      title: "Edo Period Transformation",
      description: "During the Edo period, Edo transformed into Japan's political center under the Tokugawa shogunate, growing in population and cultural influence."
    },
    {
      img: artile2,
      title: "Tokugawa Shogunate",
      description: "The Tokugawa shogunate ruled Japan for over 250 years, providing stability and a strict social order, which allowed Edo to flourish as a cultural and economic hub."
    }
  ],
  personnages: [
    {
      img: personnage2,
      title: "Tokugawa Ieyasu",
      description: "Tokugawa Ieyasu was the founder of the Tokugawa shogunate, establishing Edo as the administrative capital and laying the foundations for its growth into modern-day Tokyo."
    },
    {
      img: artile1,
      title: "Merchant Class in Edo",
      description: "The rising merchant class played a significant role in the economic prosperity of Edo, contributing to its cultural and financial growth during the shogunate era."
    }
  ]
}