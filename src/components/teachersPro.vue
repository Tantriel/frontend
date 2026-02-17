<template>
  <div class="teachers-page">
    <h1 class="page-title">Наші викладачі</h1>
    <div class="teachers-list">
      <div v-for="teacher in teachers" :key="teacher.id" class="teacher-card">
        <div class="teacher-photo-container">
          <img :src="teacher.photo" :alt="teacher.name" class="teacher-photo" />
        </div>
        <h2 class="teacher-name">{{ teacher.name }}</h2>
        <p class="teacher-experience">{{ teacher.experience }}</p>
        <p class="teacher-teaches">Викладає: {{ teacher.teaches }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      teachers: [],
    };
  },
  mounted() {
    axios
      .get("https://backend-ex1z.onrender.com/teachers")
      .then((response) => {
        this.teachers = response.data;
        console.log("GET Response:", this.teachers);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
  },
};
</script>

<style scoped>
.teachers-page {
  margin-top: 120px;
}
.page-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #1572d3;
  text-align: center;
}
.teachers-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.teacher-card {
  width: calc(30.33% - 20px);
  margin: 20px;
  border: 1px solid;
  text-align: center;
  background-color: #051c34;
  color: white;
  border-radius: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}
.teacher-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
}
.teacher-photo-container {
  border-radius: 15px 15px 0 0;
  overflow: hidden;
}
.teacher-photo {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center 25%;
}
.teacher-name {
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
}
.teacher-experience {
  font-style: italic;
  font-size: 18px;
  margin-bottom: 5px;
}
.teacher-teaches {
  margin-top: 10px;
  font-size: 18px;
}
</style>
