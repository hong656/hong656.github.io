<template>
    <div class="dashboard-page">
      <div class="container">
        <nav class="menu">
          <h2>Admin</h2>
          <ul>
            <li><a href="#">Users</a></li>
            <li><a href="#">Products</a></li>
          </ul>
          <button @click="logoutHandler">Log Out</button>
        </nav>
        <main class="content">
          <h1>Users Management</h1>
          <p>user</p>
        </main>
      </div>
      <ul>
        <li v-for="(el, indx) in products" :key="indx">{{ el.id }} - {{ el.title }}</li>
      </ul>
    </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: nowrap;
}

.menu {
  width: 200px; /* Set desired width for menu */
  padding: 20px;
  background-color: #f1f1f1;
  height: 96vh; /* Set menu height to 100vh */
}

.content {
  flex: 1; /* Make content fill remaining space */
  padding: 20px;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav a {
  text-decoration: none;
  color: black;
}
</style>


<script>
    export default {
  methods: {
    logoutHandler() {
      localStorage.removeItem('isLogin')
      this.$router.push('/admin/login')
    }
  }
}
</script>