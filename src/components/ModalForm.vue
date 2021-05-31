<template>
  <div>
    <div class="modal-backdrop" @click="$emit('close')"></div>
    <div class="modal">
      <h3>Спасибо за регистрацию!</h3>
      <button class="btn primary" @click="$emit('close')">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
  emits:['close'],
  setup() {

  },
}
</script>