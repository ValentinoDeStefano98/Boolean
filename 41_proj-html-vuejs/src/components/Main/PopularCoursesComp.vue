<template>
  <div>
    <div class="big-container py-5">
      <h2>Popular Courses</h2>
      <p class="text-secondary">Discover our most popular courses for self lerning</p>
      <div class="container">
        <div class="row py-4">
          <div class="col-2 mb-4" v-for="(elem, index) in arrayPopularCourses" :key="index">
            <div class="card">
              <img :src="`${elem.poster}`" class="card-img-top" alt="...">
              <div class="card-body">
                <div class="text-start">
                  <span class="text-secondary size">{{elem.category}}</span>               
                <h6 class="card-title pt-2">{{elem.name}}</h6>
                </div>
                <hr>
                <div class="container p-0 m-0">
                  <div class="row">
                    <div class="col-8 text-start size">
                      <span class="my-3" v-if="elem.rating !== ''">
                            <i class="fa-solid fa-star" :class="elem.rating >= 1 ? 'text-warning' : ''"></i>
                            <i class="fa-solid fa-star" :class="elem.rating >= 2 ? 'text-warning' : ''"></i>
                            <i class="fa-solid fa-star" :class="elem.rating >= 3 ? 'text-warning' : ''"></i>
                            <i class="fa-solid fa-star" :class="elem.rating >= 4 ? 'text-warning' : ''"></i>
                            <i class="fa-solid fa-star" :class="elem.rating == 5 ? 'text-warning' : ''"></i>
                            {{elem.rating}} 
                      </span>
                      <span v-if="elem.time != ''" class="size"><i class="fa-regular fa-clock"></i> {{ elem.time }}</span>
                    </div>
                    <div class="col-4 text-end size">                    
                      <span v-bind:class="{discounted : elem.discounted == true}" class="fw-bold">{{elem.originalPrice}}</span>
                      <div class="fw-bold" v-if="elem.discount !== ''">{{ elem.discount }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>        
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="p-2 border bg-white arrow">
          <i class="fa-solid fa-angle-left"></i>
        </div>
        <div class="p-2 border bg-white arrow">
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from './../../assets/img/photo-1461749280684-dccba630e2f6-544x322.jpeg';
import image2 from './../../assets/img/cat_2-544x322.jpg';
import image3 from './../../assets/img/course-preview-544x322.jpg';
import image4 from './../../assets/img/photo-1496307042754-b4aa456c4a2d-544x322.jpeg';
import image5 from './../../assets/img/photo-1416339134316-0e91dc9ded92-scaled-544x322.jpeg';
import image6 from './../../assets/img/cathryn-lavery-67852-unsplash-544x322.jpg';
export default {
  name: 'PopularCoursesComp',
  data(){
    return{
      arrayPopularCourses: [{
        "poster": image1,
            "category": "Apache >",
            "name": "Web Coding and Apache Basics",
            "time": "6 hours",
            "rating": "",
            "originalPrice": "Free",
            "discount": "",
            "discounted": false,
            "link": "#",
        },
        {
            "poster": image2,
            "category": "Art >",
            "name": "Real Things Art Painting by Jason Ni",
            "time": "6 hours",
            "rating": "",
            "originalPrice": "$60",
            "discount": "$45",
            "discounted": true,
            "link": "#",
        },
        {
            "poster": image3,
            "category": "Software Development >",
            "name": "Basics of MasterStudy",
            "time": "",
            "rating": "5",
            "originalPrice": "Free",
            "discount": "",
            "discounted": false,
            "link": "#",
        },
        {
            "poster": image4,
            "category": "Electronic >",
            "name": "How to be a DJ? Make Electronic Music",
            "time": "",
            "rating": "5",
            "originalPrice": "$59",
            "discount": "$49",
            "discounted": true,
            "link": "#",
        },
        {
            "poster": image5,
            "category": "Communication >",
            "name": "Design Instrument for Communication",
            "time": "6 hours",
            "rating": "",
            "originalPrice": "",
            "discount": "",
            "discounted": false,
            "link": "#",
        },
        {
            "poster": image6,
            "category": "Art >",
            "name": "Make your Concept Right and Beautiful",
            "time": "6 hours",
            "rating": "",
            "originalPrice": "$70",
            "discount": "",
            "discounted": false,
            "link": "#",
      }]
    }
  }
}
</script>

<style scoped lang="scss">
.big-container{
  background-color: #F0F4F9;
}

.size{
  font-size: 0.8em;
}

.card{
  height: 290px;
}

.arrow:hover{
  background-color: #365182 !important;
  color: white;
}
</style>