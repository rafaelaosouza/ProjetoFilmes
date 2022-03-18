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
                                                <h1 class="text-center display-2 orange--text text--accent-3">Esqueci Minha Senha:</h1>
                                                <h3 class="text-center display-0 orange--text text--accent-3 mb-3 mt-3">Digite um Email para que possamos refazer sua senha</h3>
                                                <v-form>
                                                    <v-text-field  v-model="email_id" label="Email" name="Email" type="text" color="orange accent-3" :rules="emailRules" required/>
                                                </v-form>
                                            </v-card-text>
                                            <div class="text-center mt-3">
                                                <v-btn class="mb-3" @click="enviar" rounded color="orange accent-3">Enviar</v-btn>   
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
        name:'MyPassword',
         data: () => ({
            email_id:"",
            emailRules: [ v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail deve ser válido']
        }),
        methods:{
        enviar() {
            this.$router.push({ name: "mensagem" });},
        },
    }
</script>