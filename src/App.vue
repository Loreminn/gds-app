<template>
  <div>
    <div class="links">
      <router-link to="/">Главная</router-link>
      <router-link to="todos">Задачи</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
.links {
  display: flex;
  justify-content: center;
  font-family: "Inter", sans-serif;
  font-family: "Roboto", sans-serif;
}

.links a {
  color: darkgray;
  margin-right: 1rem;
  text-decoration: none;
}

.links a.router-link-exact-active {
  color: darkslategrey;
  border-bottom: 1px solid darkslategrey;
}

#app {
  max-width: 800px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  font-family: "Inter", sans-serif;
  font-family: "Roboto", sans-serif;
}

.btn {
  background-color: lightblue;
  padding: 10px 15px;
  border-radius: 25px;
  cursor: pointer;
  outline: none;
  border: none;
  font-family: "Inter", sans-serif;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
}

.btn.filter {
  background-color: aquamarine;
  transition: background-color 0.2s ease-in-out;
}

.btn.clear {
  background-color: chocolate;
}

.btn.filter.active {
  background-color: forestgreen;
  transition: background-color 0.2s ease-in-out;
}
</style>
