<template>
  <v-progress-circular v-if="services == undefined"></v-progress-circular>
  <servicescard-component
    v-else
    :services="services"
    title="Active IPD services"
  ></servicescard-component>
</template>
<script>
import ServiceCard from "@/components/profile/consultation_card";
export default {
  components: {
    "servicescard-component": ServiceCard
  },
  data: function() {
    return {};
  },
  created() {
    this.$store.dispatch("retrieve_active_ipd_services");
  },
  computed: {
    services() {
      var data = this.$store.getters.ipds;
      return data;
    }
  }
};
</script>
