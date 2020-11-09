<template>
<v-app>
 <v-card dark>
  <v-card-title>
   <v-text-field color="dark" v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
  </v-card-title>
  <v-data-table dark :headers="headers" :items="response.data" :search="search"></v-data-table>
 </v-card>
</v-app>
</template>

<script>
export default {
 name: "table",
 data() {
  return {
   search: "",
   headers: [],
   response: [],
   objectKeys: []
  }
 },
 async mounted() {
  console.log(this.$route.name);
  this.response = await this.$axios.get("https://jsonplaceholder.typicode.com/todos");
  this.objectKeys = Object.keys(this.response.data[0]);

  this.objectKeys.forEach((item) => {
   this.headers.push({
    text: item.charAt(0).toUpperCase() + item.slice(1),
    align: "start",
    filterable: true,
    value: item
   })
  })
 }
}
</script>

<style>

</style>
