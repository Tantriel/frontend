<template>
  <div class="feedback-page">
    <h1 class="page-title">Зворотній зв'язок</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Ім'я:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="email">Електронна пошта:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div class="form-group">
        <label for="message">Що саме ви б хотіли дізнатись?:</label>
        <textarea
          id="message"
          v-model="formData.message"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit">Надіслати</button>
    </form>
    <div v-if="formSubmitted" class="confirmation-message">
      Дякуємо за ваше повідомлення! Ми зв'яжемося з вами найближчим часом.
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      formSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      console.log("Відправлено дані:", this.formData);
      this.formSubmitted = true;

      axios
        .post("https://backend-ex1z.onrender.com/feedback", this.formData)
        .then((response) => {
          console.log("Відгук надіслано успішно:", response.data);
          swal({
            title: "Дякуємо!",
            text: "Ваш відгук було успішно надіслано!",
            icon: "success",
            button: "OK",
          }).then(() => {
            this.formData.name = "";
            this.formData.email = "";
            this.formData.message = "";
          });
        })
        .catch((error) => {
          console.error("Помилка при надсиланні відгуку:", error);
          swal({
            title: "Помилка!",
            text: "Виникла помилка при надсиланні відгуку. Спробуйте ще раз.",
            icon: "error",
            button: "OK",
          });
        });
    },
  },
};
</script>

<style scoped>
.feedback-page {
  max-width: 600px;
  margin: 120px auto 0;
  padding: 40px 500px 70px;
}
.page-title {
  font-size: 30px;
  font-weight: bold;
  color: #1572d3;
  margin-bottom: 20px;
}
.form-group {
  margin-bottom: 20px;
}
label {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
  display: block;
}
input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}
button {
  background-color: #1572d3;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}
button:hover {
  background-color: #1e5ea3;
}
.confirmation-message {
  margin-top: 20px;
  border-radius: 5px;
  font-size: 18px;
}
</style>
