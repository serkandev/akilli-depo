<template>
  <div class="landing-page">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="navbar-collapse collapse w-100">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active ml-5">
            <a class="navbar-brand brand mx-auto" href="#">AKILLI DEPO</a>
          </li>
        </ul>
      </div>

      <div class="navbar-collapse collapse w-100 mr-5">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link buy-link btn btn-outline-primary" href="#">Satın Al</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">İletişim</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container body">
      <div class="row mt-5">
        <div class="col-md-6 text-center">
          <h1>Akıllı Depo</h1>
          <p>Akıllı Depo çözümleriyle size vakit kazandırıp zamandan tasarruf etmenizi sağlıyoruz.</p>
          <img class="svg align-self-end" src="../assets/log.svg" />
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-10 mx-auto">
              <div class="card">
                <h3 class="title text-center mt-4">Ücretsiz Kayıt Ol</h3>
                <div class="card-body w-75 mx-auto">
                  <div class="form-group">
                    <label>İsim Soyisim :</label>
                    <input type="text" class="form-control" placeholder="İsminizi giriniz..." />
                  </div>
                  <div class="form-group">
                    <label>E-Mail :</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Mail Adresinizi  giriniz..."
                    />
                  </div>
                  <div class="form-group">
                    <label>Şifre :</label>
                    <input type="password" class="form-control" placeholder="Şifrenizi Giriniz..." />
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">Gönder</button>
                  <p class="forgot-password text-right">
                    Şifreni mi
                    <a href="#">unuttun?</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
<style>
.landing-page {
  height: 100vh;

  /* background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%); */
  background: #1c8ef9 !important;
}
.body {
  margin-top: 120px;
}
.navbar {
  background: none !important;
}
.nav-link {
  font-size: 20px;
}
label + label {
  margin-top: 5px;
}

h1,
h2,
h3,
h4,
h5,
h6,
label,
span {
  font-weight: 500;
  font-family: "Fira Sans", sans-serif;
}
.brand {
  font-weight: 800;
  color: #030000 !important;
}
.form-control {
}
label {
  display: block;
}
.svg {
  height: 300px;
  width: 300px;
}
.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d7d;
  margin: 0;
}

.forgot-password a {
  color: #167bff;
}
.card {
  border-radius: 15px;
  border: none;
}
.card > * {
  font-family: "Fira Sans", sans-serif !important;
}
.nav-item + .nav-item {
  margin-left: 25px;
}
.buy-link {
  border: none !important;
}
.buy-link:hover {
  color: #030000 !important;
}
.title {
  color: #18100c;
  font-weight: 500;
}
.sub-text {
  color: #264653;
}
.container-fluid {
  padding-right: 150px;
  padding-left: 150px;
}
</style>
