const images = require.context('../../assets', true, /\.png$/)
const projects = [
  {
    image: images('./p1.png'),
    title: 'Project Tile goes here',
    description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: 'Vue, Html, Css, Bootstrap',
    url: 'https://github.com/Abdeljabbar-dev/Portfolio'
  },
  {
    image: images('./p2.png'),
    title: 'Project Tile goes here',
    description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: 'Vue, Html, Css, Bootstrap',
    url: 'https://github.com/Abdeljabbar-dev/Portfolio'
  },
  {
    image: images('./p3.png'),
    title: 'Project Tile goes here',
    description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: 'Vue, Html, Css, Bootstrap',
    url: 'https://github.com/Abdeljabbar-dev/Portfolio'
  },
  {
    image: images('./p4.png'),
    title: 'Project Tile goes here',
    description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: 'Vue, Html, Css, Bootstrap',
    url: 'https://github.com/Abdeljabbar-dev/Portfolio'
  },
  {
    image: images('./p5.png'),
    title: 'Project Tile goes here',
    description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    url: 'https://github.com/Abdeljabbar-dev/Portfolio'
  },
  {
    image: images('./p6.png'),
    title: 'Project Tile goes here',
    description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: 'Vue, Html, Css, Bootstrap',
    url: 'https://github.com/Abdeljabbar-dev/Portfolio'
  }
]

const githubImage = {
  darkGithub: images('./github_dark.png'),
  lighGithub: images('./github_light.png')
}
export default { projects, githubImage }
