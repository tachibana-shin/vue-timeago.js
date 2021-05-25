# vue-timeago.js

## Usage

``` js
import Vue from "vue"
import VueTimeagojs from "vue-timeago.js"

Vue.use(VueTimeagojs)
```

App.vue
``` vue
<template>
   <div id="app">
      <vue-timeagojs :time="05/25/2021" tag="span" locale="en_US" :delay="1000">
   </div>
</template>
```

or

App.vue
``` vue
<template>
   <div id="app">
      <vue-timeagojs :time="05/25/2021" tag="span" locale="en_US" :delay="1000">
   </div>
</template>

<script>
import { VueTimeagojs } from "vue-timeago.js"

export default {
   components: { VueTimeagojs }
}
</script>
```

Prop name | Type                 | Default | Description 
---------------------------------------------
tag       | String               | "span"  | the name of the tag you want to render 
time      | Date, String, Number |         | required time you want to count 
locale    | String               | "en_US" | locale name 
delay     | Number               | 1000    | refresh time. if you set it to 0, vue-timeagojs won't refresh 