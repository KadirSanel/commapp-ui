import React from "react";
import "./register.css";

const Register = () => {
  return (
    <>
      <div class="login-wrap">
        <div className="card p-5 bg-dark">
          <h1 class="text-center text-danger">CommApp</h1>
          <p className="text-muted text-center">
            Topluluk kurmak, yönetmek ve istediğin topluluğa katılmak için
            kaydol.
          </p>
          <center>
            <div className="row">
              <div className="col-12">
                <a
                  href="/auth/google"
                  className="btn btn-outline-secondary border-0 fs-5 text-light"
                >
                  <i class="fa-brands fa-google-plus-square fs-3 me-2"></i>{" "}
                  Google ile Giriş Yap
                </a>
              </div>
            </div>
          </center>
          <div className="row text-light">
            <div className="col-5">
              <hr className="bg-light" />
            </div>
            <div className="col-2 text-center text-muted p-0 m-0">Ya Da</div>
            <div className="col-5">
              <hr className="bg-light" />
            </div>
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Kullanıcı Adı"
              aria-label="Kullanıcı Adı"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Cep Telefonu Numarası"
              aria-label="Cep Telefonu Numarası"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="E-posta"
              aria-label="E-posta"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Parola"
              aria-label="Parola"
              aria-describedby="basic-addon2"
            />
          </div>
          <button className="btn btn-danger w-100">
            <i class="fa-solid fa-right-to-bracket"></i> Kaydol
          </button>
          <p className="text-muted text-center mt-3">
            Kaydolarak, {" "}
            <a
              href="/auth/conditions"
              className="text-danger text-decoration-none"
            >
              Koşullar
            </a>
            'ı, {" "}
            <a
              href="/auth/datapolicy"
              className="text-danger text-decoration-none"
            >
              Veri İlkesi
            </a>'ni ve {" "}
            <a
              href="/auth/cookies"
              className="text-danger text-decoration-none"
            >
              Çerezler İlkesi
            </a>'ni kabul etmiş olursun.
          </p>
        </div>
        <div className="card p-4 bg-dark mt-1">
          <h6 className="text-light text-center p-0 m-0">
            Hesabın var mı?{" "}
            <a
              href="/auth/login"
              className="text-danger text-decoration-none"
            >
              Giriş Yap
            </a>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Register;
