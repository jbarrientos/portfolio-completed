const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod
    ? "https://jbportfolio-app.herokuapp.com"
    : "http://localhost:3000",
  "process.env.NAMESPACE": "https://jbportfolio-app.herokuapp.com",
  "process.env.CLIENT_ID": "rFxWMn0MyJCOjCYRk1wDvq5jSDvc4NXG"
};
