<template>
  <div class="home-courses">
    <h2 class="section-title">Найпопулярніші курси</h2>
    <div class="course-list">
      <div
        v-for="course in popularCourses"
        :key="course.id"
        class="course-card"
      >
        <img :src="course.image" :alt="course.name" class="course-image" />
        <div class="course-details">
          <h3 class="course-name">{{ course.name }}</h3>
          <p class="course-duration">{{ course.duration }}</p>
          <p class="course-description">{{ course.description }}</p>
          <p class="course-price">Ціна: {{ course.price }} грн</p>
        </div>
      </div>
    </div>
    <a href="/courses" class="view-all-link">Переглянути всі курси</a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      popularCourses: [],
    };
  },
  mounted() {
    axios
      .get("https://backend-ex1z.onrender.com/Courses")
      .then((response) => {
        this.popularCourses = response.data.slice(0, 3);
        console.log("GET Response:", this.popularCourses);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
  },
};
</script>

<style scoped>
.home-courses {
  padding: 40px 20px;
  text-align: center;
}
.section-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #1572d3;
}
.course-list {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.course-card {
  width: calc(33.33% - 20px);
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: left;
  background-color: #fff;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}
.course-card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
}
.course-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.course-details {
  margin-top: -5px;
  padding: 20px;
  background-color: #051c34;
  color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
}
.course-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
.course-duration {
  font-size: 18px;
  margin-top: 10px;
}
.course-description {
  font-size: 16px;
  margin-top: 10px;
  line-height: 1.5;
}
.course-price {
  font-size: 20px;
  margin-top: 10px;
}
.view-all-link {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 40px;
  background-color: #051c34;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 20px;
  transition: background-color 0.3s;
}
.view-all-link:hover {
  background-color: #0056b3;
}
</style>
