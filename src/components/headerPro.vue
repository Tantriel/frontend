<template>
  <header>
    <div class="header">
      <div class="logo"><h2 id="color-white"><i class="fa-solid fa-chalkboard-user"></i> BestCourses </h2></div>
      <nav class="nav">
        <ul>
          <li><a href="/#">Головна</a></li>
          <li><a href="/teachers">Наші викладачі</a></li>
          <li><a href="/courses">Доступні курси</a></li>
          <li><a href="/form">Форма зв'язку</a></li>
        </ul>
      </nav>
      <div class="start-learning">
        <a href="/form" class="start-button">Почни навчання</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderPro',
};
</script>

<style scoped>
.header {
  background-color: #051C34;
  position: fixed; 
  top: 0; 
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 280px;
  color: #fff;
  z-index: 1000; 
}
.start-learning {
  display: flex;
  align-items: center;
}
.start-button {
  background-color: #1572D3;
  color: #fff;
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.start-button:hover {
  background-color: #1e5ea3;
}
.logo img {
  width: 70px;
}
.nav ul {
  list-style: none;
  padding: 0;
  display: flex;
}
.nav li {
  margin-right: 20px;
}
.nav a {
  text-decoration: none;
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  transition: color 0.3s;
}
.nav a:hover {
  color: #adadad;
}
</style>
