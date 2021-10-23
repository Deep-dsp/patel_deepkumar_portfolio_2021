export default{
   name: "techSkillsIcons",
   props: ['tech'],
   template: `
      <div class="tech-skill drop-shadow">
            <img :src="'./images/skills/' + tech" alt="">
      </div>
   `,
   mounted:function(){
      console.log("Inside Component");
  },
}