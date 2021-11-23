 
export default{
   name: "experience",
   props: ["exp"],

   template: 

   `
   <div class="swiper-slide">
      <div class="experience-block">
         <p class="page-title purple mb-0">{{ exp.position }}
         </p>
         <p class="label grey text-capitalize"> {{ exp.company }}</p>

         <ul class="role">
            <li v-for="item in exp.responsibility" class="label mb-2">
               {{ item }}
            </li>
         </ul>
         
      </div>
   </div>

   `
}


