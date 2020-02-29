<template>
    <div>
      <!--手机号-->
      <div class="form-group" :class="{'error': $v.user.phone.$error}">
        <span class="message" v-if="!$v.user.phone.required">手机号不能为空</span>

        <input type="text" placeholder="手机号"
               v-model.trim="user.phone"
               @blur="$v.user.phone.$touch()">
      </div>

      <!--密码-->
      <div class="form-group" :class="{'error': $v.user.password.$error}">
        <span class="message" v-if="!$v.user.password.required">密码不能为空</span>
        <span class="message"
              v-if="!$v.user.password.minLength">密码不能小于{{$v.user.password.$params.minLength.min}}位</span>
        <span class="message"
              v-if="!$v.user.password.maxLength">密码不能大于{{$v.user.password.$params.maxLength.max}}位</span>

        <div class="auth-password">
          <input type="password" placeholder="输入密码"
                 v-model.trim="user.password"
                 @blur="$v.user.password.$touch()" ref="password1">
        </div>
      </div>

      <!--确认密码-->
      <div class="form-group" :class="{'error': $v.user.confirmPassword.$error}">
        <span class="message" v-if="!$v.user.confirmPassword.sameAsPassword">两次输入的密码不一样</span>

        <div class="auth-password">
          <input type="password" placeholder="确认密码"
                 v-model.trim="user.confirmPassword"
                 @blur="$v.user.confirmPassword.$touch()"
                 @keyup.enter="register" ref="password2">
        </div>
      </div>
    </div>
</template>

<script>
  import { required, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'
  export default {
    name: "login2",
    data() {
      return {
        user: {
          username: '',
          phone: '',
          phoneCode: '',
          password: '',
          confirmPassword: '',
        },
      }
    },

    validations: {
      user: {
        username: {
          required,
          minLength: minLength(2),
          maxLength: maxLength(20)
        },
        phone: {
          required
        },
        phoneCode: {
          required
        },
        password: {
          required,
          minLength: minLength(8),
          maxLength: maxLength(32)
        },
        confirmPassword: {
          sameAsPassword: sameAs('Password')
        }
      }
    }
  }
</script>

<style scoped>

</style>
