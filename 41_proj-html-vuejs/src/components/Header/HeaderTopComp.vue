<template>
  <div class="border-bottom">
    <div class="container">
      <div class="row row-cols-3 d-flex align-items-center py-3">
        <div class="col-4">
          <form>
            <fieldset>
              <div class="mt-3">
                <select id="disabledSelect" class="form-select w-25">
                  <option>English</option>
                  <option>Italian</option>
                  <option>Mandarin</option>
                  <option>Hindi</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>Arabic</option>
                  <option>Russian</option>
                </select>
              </div>
            </fieldset>
          </form>
        </div>
        <div class="col-6 d-flex align-items-center justify-content-end listContainer">
          <ul class="d-flex menu-list mt-3 m-0" v-for="(elem, index) in arrayHeaderTop" :key="index">
            <div class="newContainer" v-if="elem.new == true"><span class="text-uppercase border p-1 m-2 bg-danger text-white">new</span></div>
            <li class="me-3 lh-1"> {{ elem.name }} </li>
          </ul>
        </div>
        <div class="col-2 text-end mt-3">
          <i class="fa-brands fa-twitter me-3"></i>
          <i class="fa-brands fa-instagram me-3"></i>
          <i class="fa-brands fa-git me-3"></i>
          <i class="fa-brands fa-linkedin me-3"></i>
          <i class="fa-brands fa-pinterest"></i>
        </div>
      </div> 
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'HeaderTopComp',
  data() {
    return {
      arrayHeaderTop: [{
            "name": "Courses",
            "link": "#",
            "new": false
        },
        {
            "name": "Zoom",
            "link": "#",
            "new": true
        },
        {
            "name": "Pages",
            "link": "#",
            "new": false
        },
        {
            "name": "Bundles",
            "link": "#",
            "new": false
        },
        {
            "name": "Course Formats",
            "link": "#",
            "new": false
        },
        {
            "name": "Add Course",
            "link": "#",
            "new": true
        },
        {
            "name": "Demos",
            "link": "#",
            "new": false
        },
        ],
    }
  }
}
</script>

<style scoped lang="scss">
.menu-list{
  list-style-type: none;
}

.container{
  width: 90%;
  margin: 0 auto;
}

.listContainer{
  position: relative;
}

.newContainer{
  position: absolute;
  top: -30%;
}
</style>