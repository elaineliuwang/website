interface Project {
  title: string
  description: string
  date: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
    {
      title: 'Muddy Buddies - IoT sensor network',
      date: 'Spring 2026',
      description: `Group project building a low-cost sensor network to estimate real-time seat occupancy at MIT's Muddy Charles Pub. Each chair has a force sensor and an ESP32-C3 that reports occupancy to nearby table gateways over ESP-NOW; tables use WiFi to forward data to a Flask backend and a live dashboard. Chairs auto-assign to the nearest table by RSSI signal strength, so the system is plug-and-play when furniture moves. The dashboard turns raw occupancy into wait-time estimates, without using cameras or phone tracking.`,
      imgSrc: '/static/images/muddybuddies.png',
      href: 'https://docs.google.com/presentation/d/1LL18WDsu7gxZU4soR_--0B4NY5uRTgGCyaaNqESKYCg/edit?usp=sharing',
    },
    {
      title: 'Cinema by the Numbers',
      date: 'Fall 2025',
      description: `Group project building an analytics pipeline to optimize a theater's weekly schedule for maximum revenue. Used SOV.AI data and TMDB/OMDB metadata; engineered 100+ features, forecasted weekly demand using a SARIMA time-series model, estimated per-film demand share using a multinomial logit (MNL) choice model. Then, formulated a mixed-integer optimization model (MIP) scheduling movies across multiple screens under real operational constraints (runtime, buffers, capacity, genre), producing an optimal showtime schedule.`,
      imgSrc: '/static/images/cinemabythenumbers.jpg',
      href: 'https://drive.google.com/file/d/14uavNdL-FtIMOVZ0RLPTqQSAfz-WsezO/view?usp=sharing',
    },
    {
    title: 'clothespin',
    date: 'Fall 2025',
    description: `A sustainability-driven fashion app that helps you get the most out of your closet while cutting down on clothing waste. With just a photo, you can pin your clothes into a digital wardrobe, track how often you wear each piece, and get reminders when items haven’t been worn in a while. The app suggests nearby thrift shops and donation spots, letting you earn points for re-wearing/donating clothes -- creating a circular fashion system. Watch our <a href="https://youtu.be/glGl5sb8sMw" target="_blank" class="underline decoration-dotted text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400">demo</a> and fun <a href="https://youtu.be/60EXv8GitFc" target="_blank" class="underline decoration-dotted text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400">promo</a> video!`,
    imgSrc: '/static/images/clothespin-img.jpg',
    href: 'https://devpost.com/software/clothespin-mj27bw',
  },
  {
    title: 'sustain.',
    date: 'Fall 2024',
    description: `A full-stack <a href="https://sustain-ten.vercel.app/" target="_blank" class="underline decoration-dotted text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400">web application</a> that connects environmentally conscious consumers with sustainable brands. Instead of prioritizing brand names, users can easily discover alternative products that align with their values. The app simplifies the shopping experience with seamless browsing and personalized recommendations.`,
    imgSrc: '/static/images/sustain-motto.jpg',
    href: 'https://devpost.com/software/sustain-lvg6nm',
  },
  {
    title: 'agora',
    date: 'Fall 2023',
    description: `A web application that helps users make decisions by analyzing their voice recordings. Users record their thoughts on different options—and <em>agora</em> evaluates their tone to generate emotional scores. These scores are ranked, guiding users toward their instinctive choice.`,
    imgSrc: '/static/images/agora_portfolio.jpeg',
    href: 'https://youtu.be/fxhFVNplBYM?si=ZczS7bu5W1f62QkD',
  },
  {
    title: 'MobiScope',
    date: '2023',
    description: `Worked with the City Science group @ MIT Media Lab to build a physical interface that explores the performance of autonomous delivery vehicles in Cambridge, MA. With the KPI models, stakeholders can analyze different system configurations, gaining insights into the impacts of these vehicles. Findings were <a href="https://www.mdpi.com/2825546" target="_blank" class="underline decoration-dotted text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400">published</a> in the Future Transportation Journal in June 2024.`,
    imgSrc: '/static/images/mobiscope.jpeg',
    href: 'https://www.media.mit.edu/projects/mobiscope/overview/',
  },
  {
    title: 'ConneXions Tutoring',
    date: '2020-2022',
    description: `A student-led, nationwide organization providing free online K-12 tutoring services. Since 2020, I have been heavily involved in its development; as a Tutor, Executive Director, and Website Designer/Developer. In 2021, I redesigned and relaunched the website to minimize organization costs—which is now maintained by a new technical team.`,
    imgSrc: '/static/images/connexions.jpeg',
    href: 'https://www.connexionstutoring.com/',
  },
  {
    title: 'Music Meteorology',
    date: '2021-2022',
    description: `A simple web application that lets the user input a US city and immediately receive a playlist based on that city's weather. The app analyzes conditions such as cloudiness, sunshine, and rain to create a personalized playlist that matches the mood of the weather.`,
    imgSrc: '/static/images/music-meteorology-bg.jpeg',
    href: 'https://youtu.be/JUjZ2eg5-bM?si=J1yzgtDd1sUUFfNk',
  },
]

export default projectsData
