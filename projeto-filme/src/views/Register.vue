<template>
<v-container>
    <v-content>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="8">
                    <v-card class="elevation-12">
                        <v-window v-model="step">
                            <v-window-item :value="1">
                                <v-row class="fill-height">
                                    <v-col>
                                        <v-card-text class="mt-12">
                                            <h1 class="text-center display-2 orange--text text--accent-3">Registrar-se</h1>
                                            <v-form>
                                                <v-text-field label="Name" name="Name" type="text" color="orange accent-3" />
                                                <v-text-field label="Email" name="Email" type="text" color="orange accent-3" :rules="emailRules" required/>
                                                <v-text-field label="Password" name="Password" type="password" color="orange accent-3" :rules="passwordRules" required/>
                                            </v-form>  
                                        </v-card-text> 
                                        <div class="text-center mt-n5 mb-3">
                                            <v-btn rounded color="orange accent-3" white>REGISTRAR</v-btn>
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
</v-container>
</template>
<script>
export default {
    name:'MyRegister',
    data: () => ({
        emailRules: [ v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail deve ser válido'],
        passwordRules: [v => !!v || 'Password is required',v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'A senha deve conter pelo menos uma letra minúscula, um número, um caractere especial e uma letra maiúscula',]
    }),
    methods:{
        register(){this.$router.push({ name: "" });}
        },
}
</script>