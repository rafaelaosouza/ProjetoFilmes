<template>
    <v-content>
        <v-container>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="8">
                        <v-card class="elevation-12 " height="100%">
                            <v-window v-model="step">
                                <v-window-item :value="1">
                                    <v-row>
                                        <v-col>
                                            <v-card-text class="mt-12">
                                                <h1 class="text-center display-2 orange--text text--accent-3">Entrar</h1>
                                                <v-form>
                                                    <v-text-field label="Email" name="Email" type="text" color="orange accent-3" :rules="emailRules" required/>
                                                    <v-text-field label="Password" name="Password" type="password" color="orange accent-3"/>
                                                </v-form>
                                               <a href="/esqueceusenha" > <h3 class="text-center mt-3"> Esqueceu a senha ?</h3> </a>
                                            </v-card-text>
                                            <div class="text-center mt-3">
                                                <v-btn class="mb-3" @click="logar" rounded color="orange accent-3">Entrar</v-btn>
                                                <v-btn class="ml-3 mb-3" rounded outilined="" white @click="register">Cadastrar</v-btn>    
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-window-item>  
                            </v-window>
                        </v-card>
                    </v-col>
                </v-row>
        </v-container>
    </v-content>
</template>

<script>
    export default{
        name:'MyLogin',
         data: () => ({
            emailRules: [ v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail deve ser válido']
        }),
        methods:{
        logar() {this.$router.push({ name: "" });},
        register(){this.$router.push({ name: "register" });}
        },
    }
</script>

<style scoped>
 a{
      text-decoration-line: none;
 }
</style>