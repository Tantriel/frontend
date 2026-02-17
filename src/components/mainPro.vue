<template>
  <section class="homepage-section">
    <div class="content">
      <h1 class="social-text-h1">
        Навчайтесь з нами та ставайте частиною нашою команди
      </h1>
      <p class="about-us-description">
        Ми - команда фахівців, які вірять у силу освіти та створюють найкращі
        умови для вашого навчання. Наша місія - надихати та підтримувати вас на
        шляху до знань та професійного росту. Ми пропонуємо якісні курси з
        найсучасніших областей інформаційних технологій, де кожен студент має
        можливість отримати найкращу освіту та розвинути свій потенціал. Наша
        команда викладачів та спеціалістів готова поділитися своїм досвідом та
        знаннями, допомагаючи вам досягти професійного успіху. Приєднуйтесь до
        нас та почніть свій шлях до нових можливостей та досягнень!
      </p>
    </div>
    <img
      src="https://www.alphaacademy.org/wp-content/uploads/2024/10/computer-programmer_.jpg"
      alt=""
    />
  </section>
  <coursesMain />
  <reviewsMain />
</template>

<script>
import coursesMain from "./main/coursesMain.vue";
import reviewsMain from "./main/reviewsMain.vue";

export default {
  components: {
    coursesMain,
    reviewsMain,
  },
};
</script>

<style scoped>
.image {
  width: 750px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-sw {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
.img-sw img {
  width: 600px;
  height: 400px;
  object-fit: cover;
}
.about-us {
  margin: 0 auto;
  text-align: center;
}
.about-us-title {
  font-size: 28px;
  color: #1572d3;
  font-weight: bold;
}
.about-us-description {
  font-size: 20px;
  line-height: 1.4;
  margin: 20px auto;
}
.homepage-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 120px;
  padding: 50px;
  background-color: #f2f2f2;
}
.homepage-section img {
  width: 550px;
}
.content {
  width: 650px;
}
.content h1 {
  font-size: 36px;
  text-transform: uppercase;
}
.social-icons {
  margin-top: 20px;
}
.icon-link {
  display: inline-block;
  margin-right: 20px;
}
.social-text-h1 {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #1572d3;
}
.icon-link img {
  width: 32px;
  height: 32px;
}
.social-icons {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  width: 160px;
}
.icon-link {
  background-color: #333;
  border-radius: 10px;
  padding: 10px;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.icon-link i {
  font-size: 24px;
  margin-right: 10px;
}
.icon-link:hover {
  background-color: #00bcd4;
}
.social-text {
  font-size: 18px;
  font-family: "Roboto", sans-serif;
}
</style>
