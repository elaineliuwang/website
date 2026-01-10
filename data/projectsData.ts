interface TechStackItem {
  tech: string
  note: string
}

interface Project {
  title: string
  description: string
  techStack: TechStackItem[]
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
    {
      title: 'Cinema by the Numbers',
      description: `Semester-long group project building an analytics pipeline to optimize a theater's weekly schedule for maximum revenue. Used SOV.AI data and TMDB/OMDB metadata; engineered 100+ features, forecasted weekly demand using a SARIMA time-series model, estimated per-film demand share using a multinomial logit (MNL) choice model. Then, formulated a mixed-integer optimization model (MIP) scheduling movies across multiple screens under real operational constraints (runtime, buffers, capacity, genre), producing an optimal showtime schedule.`,
      techStack: [
        { tech: 'Python', note: 'classic jupyter' },
        { tech: 'SARIMA', note: 'weekly theater demand forecasting' },
        { tech: 'MNL/Ridge Regression', note: 'discrete choice modeling' },
      ],
      imgSrc: '/static/images/cinemabythenumbers.jpg',
      href: 'https://drive.google.com/file/d/14uavNdL-FtIMOVZ0RLPTqQSAfz-WsezO/view?usp=sharing',
    },
    {
    title: 'clothespin',
    description: `A sustainability-driven fashion app that helps you get the most out of your closet while cutting down on clothing waste. With just a photo, you can pin your clothes into a digital wardrobe, track how often you wear each piece, and get reminders when items haven’t been worn in a while. The app suggests nearby thrift shops and donation spots, letting you earn points for re-wearing/donating clothes -- creating a circular fashion system. Watch our <a href="https://youtu.be/glGl5sb8sMw" target="_blank" class="text-gray-400 hover:text-indigo-400">demo</a> and fun <a href="https://youtu.be/60EXv8GitFc" target="_blank" class="text-gray-400 hover:text-indigo-400">promo</a> video!`,
    techStack: [
      { tech: 'Swift', note: 'iOS frontend' },
      { tech: 'Firebase', note: 'database for clothing data' },
      { tech: 'Apple Maps API', note: 'donations tab' },
      { tech: 'ResNet50 CNN', note: 'image matching' },
    ],
    imgSrc: '/static/images/clothespin-img.jpg',
    href: 'https://youtu.be/glGl5sb8sMw',
  },
  {
    title: 'sustain.',
    description: `A full-stack <a href="https://sustain-ten.vercel.app/" target="_blank" class="text-gray-400 hover:text-indigo-400">web application</a> that connects environmentally conscious consumers with sustainable brands. Instead of prioritizing brand names, users can easily discover alternative products that align with their values. The app simplifies the shopping experience with seamless browsing and personalized recommendations.`,
    techStack: [
      { tech: 'React/Next.js', note: 'frontend' },
      { tech: 'Convex', note: 'backend functionality, vector search' },
      { tech: 'OpenAI API', note: 'for product recommendations' },
      { tech: 'Clerk', note: 'authentication' },
      { tech: 'Vercel', note: 'deployment' },
    ],
    imgSrc: '/static/images/sustain-motto.jpg',
    href: 'https://youtu.be/A_mbcRLzURs?si=SCwHjBdUJnn7StK9',
  },
  {
    title: 'agora: go with your gut',
    description: `A web application that helps users make decisions by analyzing their voice recordings. Users record their thoughts on different options—and <em>agora</em> evaluates their tone to generate emotional scores. These scores are ranked, guiding users toward their instinctive choice.`,
    techStack: [
      { tech: 'React/Next.js', note: 'frontend' },
      { tech: 'Python', note: 'script for backend analysis' },
      { tech: 'HuggingFace API', note: 'sentiment evaluation' },
      { tech: 'Figma', note: 'ui/ux design' },
    ],
    imgSrc: '/static/images/agora_portfolio.jpeg',
    href: 'https://youtu.be/fxhFVNplBYM?si=ZczS7bu5W1f62QkD',
  },
  {
    title: 'MobiScope',
    description: `Worked with the City Science group @ MIT Media Lab to build a physical interface that explores the performance of autonomous delivery vehicles in Cambridge, MA. With the KPI models, stakeholders can analyze different system configurations, gaining insights into the impacts of these vehicles. Findings were <a href="https://www.mdpi.com/2825546" target="_blank" class="text-gray-400 hover:text-indigo-400">published</a> in the <em>Future Transportation</em> Journal in June 2024.`,
    techStack: [
      { tech: 'Arduino', note: 'hardware' },
      { tech: 'GAMA Platform', note: 'data analysis and modeling' },
    ],
    imgSrc: '/static/images/mobiscope.jpeg',
    href: 'https://www.media.mit.edu/projects/mobiscope/overview/',
  },
  {
    title: 'ConneXions Tutoring',
    description: `A student-led, nationwide organization providing free online K-12 tutoring services. Since 2020, I have been heavily involved in its development; as a Tutor, Executive Director, and Website Designer/Developer. In 2021, I redesigned and relaunched the <a href="https://www.connexionstutoring.com/" target="_blank" class="text-gray-400 hover:text-indigo-400">website</a> to minimize organization costs—which is now maintained by a new technical team.`,
    techStack: [
      { tech: 'HTML/CSS/JS', note: 'vanilla' },
      { tech: 'Bootstrap', note: 'css framework' },
    ],
    imgSrc: '/static/images/connexions.jpeg',
    href: 'https://github.com/elaineliuwang/connexions-tutoring',
  },
  {
    title: 'Music Meteorology',
    description: `A simple web application that lets the user input a U.S. city and immediately receive a playlist based on that city's weather. The app analyzes conditions such as cloudiness, sunshine, and rain to create a personalized playlist that matches the mood of the weather.`,
    techStack: [
      { tech: 'HTML/CSS/JS', note: 'vanilla' },
      { tech: 'Node.js', note: 'server-side' },
      { tech: 'OpenWeather API', note: 'get real-time weather' },
    ],
    imgSrc: '/static/images/music-meteorology-bg.jpeg',
    href: 'https://youtu.be/JUjZ2eg5-bM?si=J1yzgtDd1sUUFfNk',
  },
]

export default projectsData
