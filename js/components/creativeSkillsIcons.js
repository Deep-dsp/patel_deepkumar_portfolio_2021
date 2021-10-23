export default{
   name: "creativeSkillsIcons",
   props: ['design'],
   template: `
      <div class="tech-skill drop-shadow">
            <img :src="'./images/skills/' + design" alt="">
      </div>
   `,
   mounted:function(){
      console.log("Inside Component");
  },
}