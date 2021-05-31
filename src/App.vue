<template>
  <div class="container">
    <div class="card">
      <register-form @show ='modal = true'></register-form>
    </div>
     <teleport to="body">
        <modal-form v-if="modal" @close ='modal = false'></modal-form>
     </teleport>
  </div>
</template>

<script>
import {ref} from 'vue'
import RegisterForm from './components/RegisterForm'
import ModalForm from './components/ModalForm'

export default {
  components: {
    RegisterForm,
    ModalForm
  },
  setup() {
   const modal = ref(false)

   return {
     modal
   }
 }
}
</script>

