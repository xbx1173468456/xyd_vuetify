import VeeValidate, { Validator } from 'vee-validate'
import Vue from 'vue'

import zh_CN from 'vee-validate/dist/locale/zh_CN'
// import zh_CN from './zh_CN'

Vue.use(VeeValidate)

Validator.localize('zh_CN', zh_CN)
