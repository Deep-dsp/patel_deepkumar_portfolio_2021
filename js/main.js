import TechSkillsIcons from "./components/techSkillsIcons.js";
import CreativeSkillIcons from "./components/creativeSkillsIcons.js";

const myVM = (()=>{

  var app = new Vue({
      el: '#app',
      data: {
        active: false,
        navitem: false,
        techicons: [
          "icons8-html-5.svg","icons8-css3.svg","icons8-javascript.svg","icons8-wordpress.svg","jquery.png",
          "icons8-bootstrap.svg","icons8-sass.svg","icons8-npm.svg","icons8-nodejs.svg","icons8-vue-js.svg",
          "icons8-webpack.svg","bitbucket-atlassian-logo.svg"
        ],

        creativeicons: [
          "icons8-adobe-creative-cloud.svg",
          "icons8-autodesk-maya.svg","icons8-cinema-4d.svg",
          "icons8-figma.svg"
        ]
      },

      components:{
        techskillsicons : TechSkillsIcons,
        creativeskillsicons : CreativeSkillIcons
      }

  }).$mount("#app");

})();