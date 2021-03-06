# vue-timeago.js

**_Version 0.0.2 only supports vue 3 with no backward compatibility. If you are using vue 2 please run yarn add vue-timeago.js@0.0.1_**

## Usage

``` ts
import { createApp } from "vue"
import VueTimeagojs from "vue-timeago.js"

const app = createApp()
app.use(VueTimeagojs)

app.mount("#app")
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

<script setup lang="ts">
import { VueTimeagojs } from "vue-timeago.js"
</script>
```

| Prop name | Type                  | Default | Description                                                   |
| --------- | --------------------- | ------- | ------------------------------------------------------------- |
| tag       | String?               | "span"  | the name of the tag you want to render                        |
| time      | Date, String, Number  |         | required time you want to count                               |
| locale    | String?               | "en_US" | locale name                                                   |
| delay     | Number?               | 1000    | refresh time. if you set it to 0, vue-timeagojs won't refresh |
