<template>
  <div class="overlay">
    <div id="modal" class="styled">
      <div class="d-flex align-items-center">
        <strong>Loading...</strong>
        <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spinner'
}
</script>

<style scoped>
.overlay {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(234, 241, 252, 0.7);
  z-index: 998;
}

#modal {
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
}

#modal.styled {
  width: 70%;
  max-height: 350px;
  min-width: 100px;
  overflow: auto;
  background: #fff;
  padding: 12px 14px;
  border: 1px solid;
  border-color: #aaa #999 #888;
  border-radius: 3px;
  z-index: 999;
  box-shadow: 0 3px 14px -4px #000;
}
</style>
