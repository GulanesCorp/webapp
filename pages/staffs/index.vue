<template>
  <div>
    <div class="breadcrumb">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/staffs" class="active">Staffs</router-link>
    </div>
    <v-container fluid>
      <v-card class="py-2 pl-1" flat>
        <v-card-title>{{ $t("label.titles.staffs") }}</v-card-title>
        <v-row no-gutters>
          <v-col v-for="(staff, n) in staffs" :key="n" sm="3" md="2">
            <staff-card :staff="staff"></staff-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import StaffCard from "@/components/staff/staff_card";
import { mapGetters } from "vuex";
export default {
  components: {
    StaffCard
  },
  beforeCreate() {
    this.$store.dispatch("fetchAllStaffs");
  },
  computed: {
    ...mapGetters({
      staffs: "staffs"
    })
  }
};
</script>
