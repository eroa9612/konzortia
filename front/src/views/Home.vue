<template>
  <div>
    <v-card>
      <v-tabs grow>
        <v-tab>
          <v-icon left>mdi-account</v-icon>Movies
        </v-tab>
        <v-tab >
          <v-icon left>mdi-lock</v-icon>Clasifications
        </v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <Movies />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item >
          <v-card flat>
            <v-card-text>
              <Clasifications />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import Movies from "../components/Movies";
import Clasifications from '../components/Clasifications';

export default {
  name: "Home",

  components: {
    Movies,
    Clasifications
  },
};
</script>
