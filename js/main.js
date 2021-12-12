// Swiper
// import "./components/swiper.js";
// Components
import TechSkillsIcons from "./components/techSkillsIcons.js";
import CreativeSkillIcons from "./components/creativeSkillsIcons.js";
import Experience from "./components/experience.js";
import myProjectsComponent from "./components/myProjectsComponent.js";

const myVM = (()=>{
  var app = new Vue({
      el: '#app',
      data: {
        active: false,
        navitem: false,
        window: {
          width: window.innerWidth,
        },
        techicons: [
          "icons8-html-5.svg","icons8-css3.svg","icons8-javascript.svg","icons8-wordpress.svg","jquery.png",
          "icons8-bootstrap.svg","icons8-sass.svg","icons8-npm.svg","icons8-nodejs.svg","icons8-vue-js.svg",
          "icons8-webpack.svg","bitbucket-atlassian-logo.svg"
        ],

        creativeicons: [
          "icons8-adobe-creative-cloud.svg",
          "icons8-autodesk-maya.svg","icons8-cinema-4d.svg",
          "icons8-figma.svg"
        ],

        experiences:[

          {
            position: "Junior Web Developer",
            company: "Redding Designs Inc, London, ON ( Jul 2021 - Present )",
            responsibility : [
              "Develop pixel-perfect website according to design provided, Quality Assurance",
              "Update live website according to client requirements",
              "Team meeting once in a week to give pitch about progress"
            ]
          },

          {
            position: "Front-End (wordpress) Developer Intern",
            company: "eToolSmith development, London, ON ( Mar 2021 – Apr 2021 )",
            responsibility : [
              "Develop pixel-perfect front end website using Foundation, Sass and Wordpress",
              "Collaborated with senior-level developers to develop projects",
            ]
          },

          {
            position: "3D Artist (Volunteer)",
            company: "New Graduate Tech Collective, London, ON ( Oct 2020 – Jan 2021 )",
            responsibility : [
              "Created 3D models according to the storyboards provided",
              "Make sure to focus on details to bring exclusive real time experience",
            ]
          },

          {
            position: "Graphic Designer - Internship",
            company: "Eidolon Brand Design Studio, India ( SEPT 2018 – OCT 2018 )",
            responsibility : [
              "Designed more than 15 social media post for advertisement promotions",
              "Designed and Conceptualized advertising campaigns",
              "Managed client meetings to get more information about the project, requirements and expectation",
            ]
          },

        ],

        work:[

          {
            image: 'githubpost',
            title: 'Instagram Profile Clone',
            about: 'Clone my instagram profile to practice my Front-end programming skills and dark toggle mode to make it more fun',
            technology:["html5", "scss", "vanillajs"],
            live:"https://infallible-ritchie-d42aa6.netlify.app/",
            repo: "https://github.com/Deep-dsp/myInstagramProfile_Front_End"
          },

          {
            image: 'cheftable',
            title: 'Fanshawe The Chefs Table',
            about: 'This project has been done under the guidance of Northern Commerce and my team was the winner of the four months workshop.',
            technology:["Shopify", "Css", "Liquid"],
            live:"https://thechefstablefanshawe.ca/",
            repo: "https://github.com/McJon/fc-cuisine"
          },

          {
            image: 'signup',
            title: 'Signup Form',
            about: 'Form build to learn about Zurb foundation, validation and how to use local storage to check whether a user has already signed up or not.',
            technology:["html5", "css3", "foundation", "jQuery"],
            live:"https://blissful-meninsky-f5972f.netlify.app/",
            repo: "https://github.com/Deep-dsp/commerceTest"
          },

          {
            image: 'tcc',
            title: 'TCC Tuckersmith',
            about: 'Great project because of the challenges such as creating complex mathematical algorithms, categorizing items, filters and AJAX programming.',
            technology:["wordpress", "html5", "css3", "Sass", "bootstrap", "jQuery"],
            live:"https://tcc.on.ca/",
            repo: ""
          },

          {
            image: 'faithmission',
            title: 'Faith Mission Canada',
            about: 'Another huge website which has ecommerce platform, audio books and great learning curve for me to get hands on query strings and wocommerce product templates',
            technology:["wordpress", "woocommerce", "html5", "css3", "Sass", "bootstrap", "jQuery"],
            live:"https://faithmissioncanada.org/",
            repo: ""
          }

        ]
      },
      methods: {
        closeSideNav: function() {
          
          if(this.window.width < 992){
            this.active = !this.active;
            document.querySelector("aside").classList.remove("sidemenuactive");
            document.querySelector(".overlay").classList.remove("overlay_active");
            document.querySelector(".line-block").classList.remove("burgermenuclick");
          }
          
        }
      },

      components:{
        techskillsicons : TechSkillsIcons,
        creativeskillsicons : CreativeSkillIcons,
        experience : Experience,
        myprojectscomponent : myProjectsComponent
      }
      

  });

})();


var swiper = new Swiper(".mySwiper", {
  // direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
  grabCursor: true,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});