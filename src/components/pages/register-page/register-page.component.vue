<!-- Template Code -->
<template>
    <div id="registerPage">

    <!-- Adds the create account box -->
    <div class="create-account-box-wrapper">
        <el-card class="create-account-box">

            <!-- Containers for each section of the register page -->
            <div class="form-header-wrapper">
                <!-- Adding title -->
                <span class="form-title-text">Create Your Account</span>
            </div>

            <div class="form-body-wrapper">
                <!-- el-form functional element -->
                <el-form ref="formData" :model="formData" @focusout.native="updateIsFormValidated">
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item :rules="rules.firstName" prop="firstName">
                                <!-- Adding controls -->
                                <el-input placeholder="First name" v-model="formData.firstName" v-focus></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item :rules="rules.lastName" prop="lastName">
                                <el-input placeholder="Last name" v-model="formData.lastName"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-form-item :rules="rules.email" prop="email">
                            <el-input placeholder="Email" v-model="formData.email"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item :rules="rules.password" prop="password">
                                <el-input type="password" placeholder="Password" v-model="formData.password"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item :rules="rules.passwordConfirm" prop="passwordConfirm">
                                <el-input type="password" placeholder="Confirm" v-model="formData.passwordConfirm"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <div class="instructions-text-wrapper">
                        <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                    </div>
                </el-form>
            </div>

            <div class="form-footer-wrapper">
                <div class="text-button-wrapper">
                    <router-link to="/login">
                        <a>Sign in instead</a>
                    </router-link>
                </div>
                <div class="next-button-wrapper">
                    <button v-bind:disabled="!isFormValidated" @click="register">Next</button>
                </div>
            </div>
            
        </el-card> <!-- End create-account-box -->
    </div> <!-- End create-account-box-wrapper -->

    </div>
</template>

<script src="./register-page.component.js"></script>
<style src="./register-page.component.css"></style>

