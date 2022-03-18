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
                                                <h3 class="text-center display-1 orange--text text--accent-3 mb-3 mt-3">Email Enviado!!</h3>
                                            </v-card-text>
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
        name:'MyMessage',
         data: () => ({
           emailRules: [ v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail deve ser válido']
        }),
       
    }
</script>