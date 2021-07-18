<template>
  <div class="container">
    <v-col cols="6" sm="6" md="6" class="mx-auto">
      <v-text-field
          class="text-xs-center"
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        >
      </v-text-field>
    </v-col>
    <v-dialog v-model="dialog" scrollable max-width="750px">
        <template v-slot:activator="{ on }">
          <v-btn
            class=""
            color=""
            dark
            v-on="on"
            >Register Clasification<v-icon large title="Registrar Clasification" color="white"
              >add_circle
            </v-icon></v-btn
          >
        </template>
        <v-card>
          <v-card-title>{{ tituloFormulario }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="nombre"
                      label="Name Clasification"
                      outlined
                      autocomplete="off"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" text @click="close()">Cancelar</v-btn>
            <v-btn color="green" text @click="save()">Guardar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    <v-data-table
      :headers="headers"
      :items="clasifications"
      :search="search"
    >
    <template v-slot:item.opciones="{ item }">
        <v-icon
          title="Editar Movie"
          small
          class="mr-2"
          color=" blue"
          @click="editar(item)"
          >edit</v-icon
        >
        <v-icon
          title="Eliminar Usuario"
          small
          class="mr-2"
          color="red"
          @click="deleteItem(item._id)"
          >delete_forever</v-icon
        >
      </template>

    </v-data-table>
  </div>
</template>

<script>
import services from '../api/services';
export default {
  name: "Clasification",

  data () {
    return {
      headers: [
        { text: "Clasification", value: "name", sortable: false },
        { text: "Opciones", value: "opciones", sortable: false },
      ],
      search: '',
      editedIndex: -1,
      nombre: '',
      clasifications:[],
      id:'',
      dialog: false,
    }
  },
    created(){
      this.listar();
    },

    methods:{
      async listar() {
        let me = this;
        me.clasifications = await services.listClasification();
      },

      editar(item){
        console.log(item)
        this.id = item._id;
        this.nombre = item.name;
        this.dialog = true;
        this.editedIndex = 1;
      },

      async save() {
          if (this.editedIndex > -1) {
              let response = await services.updateClasification(this.id, this.nombre)
              this.close();
              this.listar();
              console.log(response);
              //update
          }else{
              //add
            if(this.nombre != ''){
                let response = await services.addClasification(this.nombre);
                this.close();
                this.listar();
                console.log(response);
            }
          }
      },

      async deleteItem(item){
        await services.deleteClasification(item);
        this.listar();
      },

      limpiar(){
        this.nombre = "";
      this.editedIndex = -1;
      },

      close() {
        this.dialog = false;
        this.limpiar();
      },
      
    },

    computed: {
      tituloFormulario() {
        return this.editedIndex === -1 ? "Register Clasification" : "Edit Clasification";
      },
    },

    watch: {
    dialog(val) {
      val || this.close();
    }
  },
};
</script>
<style scoped>
.container{
  width: 80%;
  padding-top: 20px;
}

</style>
