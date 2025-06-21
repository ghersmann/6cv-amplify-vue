import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    portfolioProjects: [
      {
        id: '001',
        title: 'Herding Cats Travel App',
        description: [
          '- A comprehensive travel planning application developed using Vue.js.',
          '- Custom graphics and user interface designed using Figma.',
          '- Features include itinerary sharing, flight information, hotel bookings, meeting points, activities, and contact information management for small travel groups.'
        ],
        details: `
  <p>This is the final project for Coding Bootcamps Europe, created by me and two of my classmates. It is a travel planning app made for easily sharing travel information with a group of travellers, such as flight itineraries or hotel locations.</p>

  <p>I handled the graphic design and drew the cat logo using Figma. My main priority was to ensure that all user interactions were easy, with large buttons, clear color distinctions between functions, and consistent use of colors for easy identification. The color scheme was inspired by my dad’s 1980s tennis racket.</p>

  <p>For the cat logo, I wanted it to resemble a confused tourist who accidentally wandered onto the busiest shopping street instead of the Museum of Cultural History, which they were actually looking for.</p>

  <p>Tech Stack: HTML5, CSS3, JavaScript, Vue.js, MongoDB, Express.js, Node.js, Render, Git, Figma, RESTful API</p>
`,

        images: [
          {
            src: new URL(
              '@/assets/img/herding-cats/herding-cats-screen-shot-startpage.png',
              import.meta.url
            ).href,
            alt: 'Herding Cats Travel App Startpage',
            description:
              'Login, Sign Up or enter a trip id to go straight to a trip that someone has already set up.'
          },
          {
            src: new URL(
              '@/assets/img/herding-cats/herding-cats-screen-shot-alltravels.png',
              import.meta.url
            ).href,
            alt: 'Herding Cats Travel App All Travels',
            description:
              "Landing page after succesful login. It's an overview of all the user's trips. And functions for searching for trips, making a new trip and keeping personal notes."
          },
          {
            src: new URL(
              '@/assets/img/herding-cats/herding-cats-screen-shot-tripoverview.png',
              import.meta.url
            ).href,
            alt: 'Herding Cats Travel App Trip Overview',
            description:
              "Overview for a single trip. Click on the trip title to edit, including editing of trip dates. Click 'Transport' to view all the details about transportation. Switch between public and private trip. You can also copy the trip id for sharing. Lastly, delete trip, if it is no more, if it has siezed to be or if it's pushing up the daisies by now."
          },
          {
            src: new URL(
              '@/assets/img/herding-cats/herding-cats-screen-shot-packlist.png',
              import.meta.url
            ).href,
            alt: 'Herding Cats Travel App Packing List',
            description: 'Make sure that all that is needed for travel is packed.'
          },
          {
            src: new URL(
              '@/assets/img/herding-cats/herding-cats-screen-shot-notes.png',
              import.meta.url
            ).href,
            alt: 'Herding Cats Travel App Trip Notes',
            description:
              'Make notes for your trip for yourself or to share with others. Credits to officeipsum.com for the poetry here.'
          }
        ],
        link: 'https://herding-cats.onrender.com/',
        linkText: 'herding-cats.onrender.com',
        routerLinkText: 'View Details'
      },
      {
        id: '002',
        title: 'Gustav Hersmann Photography',
        description: [
          'Current project in the works. Developing a nice photo portfolio for my former business as a Professional Photographer. Mostly to stay updated on programming and learn new things while looking for a job.'
        ],
        details: `<p>I had my own business as a freelance photographer between 2006 and 2021. Besides making me a better photographer, it taught me a lot about being organised, structured and planning ahead.</p>`,
        images: [
          {
            src: new URL(
              '@/assets/img/ghff/GHFF_Cows_by_Gustav_Hersmann_0029_lowres.jpg',
              import.meta.url
            ).href,
            alt: 'Black and White photo of cows in the fog at dusk'
          },
          {
            src: new URL(
              '@/assets/img/ghff/GHFF_Snowboard_by_Gustav_Hersmann_0029_lowres.jpg',
              import.meta.url
            ).href,
            alt: 'Professional Snowboarder Wolfgang Nyvelt, advertising for Salomon Snowboards.'
          },
          {
            src: new URL(
              '@/assets/img/ghff/GHFF_Supersonic_by_Gustav_Hersmann_0029_lowres.jpg',
              import.meta.url
            ).href,
            alt: "Swedish band 'The Supersonic.' Created for the promotion of their debut record."
          }
        ],
        routerLink: { path: '/photo' },
        routerLinkText: 'Photography Portfolio'
      },
      {
        id: '003',
        title: 'Posters for Gemeinde Wutha-Farnroda and Hörselbergmuseum',
        description: [
          'During my two years at the municipal office Wutha-Farnroda I did amongst other things a bunch of graphic design work. I used the Affinity Suite (Photo, Designer and Publisher) for all of the tasks.'
        ],
        images: [
          {
            src: new URL('@/assets/img/gwf/plakat-das-licht-in-unserem-leben.jpg', import.meta.url)
              .href,
            alt: 'Poster for the Exhibition Das Licht in unserem Leben',
            description:
              "This exhibition explores light and how mankind has illuminated the world throughout history. The design is heavily inspired by photographs from the 1920s, a time when electric lighting became commonplace in people's homes."
          },
          {
            src: new URL(
              '@/assets/img/gwf/plakat-kleine-objekte-grosse-geschichten.png',
              import.meta.url
            ).href,
            alt: 'Poster for the Exhibition Kleine Objekte - Große Geschichten',
            description:
              "Poster for the exhibition 'Kleine Objekte - Große Geschichten'. In this design, I used slanted text to deviate from the usual poster formats that are usually seen in the same places. The exhibition emphasised objects from the museum's collection and used them to tell bigger stories. For example, the potato ricer depicted on the poster tells the story of Thuringian dumplings. To convey a sense of recognition and seriousness, I used the railway typeface used by Deutsche Bahn for signage."
          },
          {
            src: new URL('@/assets/img/gwf/plakat-museumsnacht.jpg', import.meta.url).href,
            alt: 'Poster for Night of the Museums',
            description:
              'The local museum, the Hörselbergmuseum, was organising an evening of events designed mainly for children. I wanted to capture the excitement of going on a treasure hunt in the dark with a torch.'
          }
        ],
        routerLinkText: 'View Details'
      },
      {
        id: '004',
        title: 'Red Leaf Cameras and No Fear of too many Cameras',
        description: [
          'I toyed with the idea of starting an online camera store for selling vintage analog cameras and made a design draft for it.'
        ],
        details: `<p>I lost my job during the pandemic, which led me to start repairing and selling old analog cameras. Initially, I envisioned launching my own independent online shop called Red Leaf Cameras and created this draft for it. However, after some research, I concluded that it would be easier to utilize an existing platform. This ultimately resulted in my Etsy store, which I named 'No Fear of too many Cameras.'</p>

<p>I aimed for the store to be simple, primarily focusing on the images of the cameras. I wanted to minimize distractions and ensure that nothing interfered with the photographs. The rationale behind this approach is that, when buying vintage cameras, the images convey 99% of the story.</p>`,
        images: [
          {
            src: new URL(
              '@/assets/img/red-leaf-cameras/phone_mockup_redleafcamera.jpg',
              import.meta.url
            ).href,
            alt: 'Phone Mockup for Red Leaf Cameras'
          },
          {
            src: new URL(
              '@/assets/img/red-leaf-cameras/testdesign_redleaf_camera_web.jpg',
              import.meta.url
            ).href,
            alt: 'Browser view draft for Red Leaf Cameras'
          },
          {
            src: new URL('@/assets/img/red-leaf-cameras/logo-nofotmc.png', import.meta.url).href,
            alt: 'Logo No Fear of too many Cameras'
          }
        ],
        routerLinkText: 'View Details'
      }
      /* {
      id: '005',
        title: 'Fowzi Magazine',
        description: [
          'An online magazine about snowboarding and snowboard culture. Made by me and my friend Brian. We only made three issues before other projects took over our attention.'
        ],
        images: [
          {
            src: new URL(
              '@/assets/img/GHFF_Cows_by_Gustav_Hersmann_0029_lowres.jpg',
              import.meta.url
            ).href,
            alt: 'Black and White photo of cows in the fog at dusk'
          },
          {
            src: new URL(
              '@/assets/img/GHFF_Snowboard_by_Gustav_Hersmann_0029_lowres.jpg',
              import.meta.url
            ).href,
            alt: 'A Snowboarder makes a turn and blows a big cloud of snow'
          },
          {
            src: new URL(
              '@/assets/img/GHFF_Supersonic_by_Gustav_Hersmann_0029_lowres.jpg',
              import.meta.url
            ).href,
            alt: 'Band photo of The Supersonic'
          }
        ],
        routerLink: { path: '/posters-gwf' },
        routerLinkText: 'View Details'
      } */
    ]
  }),

  getters: {
    getProjects: (state) => state.portfolioProjects
  }
})
