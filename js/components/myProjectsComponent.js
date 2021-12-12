export default{
   name: "myProjectsComponent",
   props: ["sample"],

   template:`
   <div class="col-xl-4 d-flex justify-content-center">

      <div class="project-block drop-shadow mb-5">
         <img :src="'./images/work/' + sample.image + '.png'" :alt=" sample.image + ' image'" class="img-fluid project-image">

         <div class="project-details d-flex flex-column justify-content-around">
            <p class="page-title purple text-capitalize text-center">{{ sample.title }}</p>
            <p class="sm-font-20 text-center">
               {{ sample.about }}
            </p>

            <div class="tech-block">
                  <p class="sm-font-20 purple text-center">-- Technologies Used --</p>

                  <div class="tech-used d-flex justify-content-around flex-wrap">
                     <p class="sm-font-20 white text-uppercase" v-for=" tech in sample.technology"> 
                        {{ tech }}
                     </p>
                  </div>
            </div>

            <div class="github-live d-flex justify-content-center">
                  <a :href="sample.live" class="sm-font-20 mx-2" target="_blank"><u>LIVE</u></a>
                  <a :href="sample.repo" v-if="sample.repo != '' " class="sm-font-20 mx-2" target="_blank"><u>GITHUB</u></a>
            </div>

         </div>
      </div>

   </div>
   `,
   mounted:function(){
      console.log("Inside Project Component");
  },
}