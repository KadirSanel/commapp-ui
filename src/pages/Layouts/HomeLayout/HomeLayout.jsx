import React from "react";
import { Outlet } from "react-router-dom";
import "./home-layout.css";

const HomeLayout = () => {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">CommApp</span>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a
                class="btn btn-outline-light border-0"
                aria-current="page"
                href="#"
              >
                <i class="fa-solid fa-house"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-danger border-0" href="#">
                <i class="fa-solid fa-users"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-danger border-0" href="#">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a
                class="btn btn-outline-light border-0"
                aria-current="page"
                href="#"
              >
                <i class="fa-solid fa-bell"></i>
              </a>
              <a
                class="btn btn-outline-light border-0"
                aria-current="page"
                href="#"
              >
                <i class="fa-solid fa-envelope"></i>
              </a>
              <a
                class="btn btn-outline-light border-0"
                aria-current="page"
                href="#"
              >
                <i class="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row m-0 sidebar">
        <div className="col-2 bg-dark">
          <ul class="list-group">
            <li
              class="text-white border-0 list-group-item bg-dark"
              aria-current="true"
            >
              <a href="" className="btn btn-outline-light border-0">
                <i class="fa-solid fa-user text-danger"></i> Profil
              </a>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <a href="" className="btn btn-outline-light border-0">
                <i class="fa-solid fa-users text-danger"></i> Topluluklar
              </a>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <a href="" className="btn btn-outline-light border-0">
                <i class="fa-solid fa-triangle-exclamation text-danger"></i>{" "}
                Duyurular
              </a>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <a href="" className="btn btn-outline-light border-0">
                <i class="fa-solid fa-message text-danger"></i> Mesajlar
              </a>
            </li>
          </ul>
          <hr className="text-light" />
          <span class="navbar-brand text-light mb-0 h1">CommBulut</span>
          <ul class="list-group">
            <li class="text-white border-0 bg-dark list-group-item">
              <a href="" className="btn btn-outline-light border-0">
                <i class="fa-solid fa-cloud text-danger"></i> Kişisel Bulutum
              </a>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <a href="" className="btn btn-outline-light border-0">
                <i class="fa-solid fa-circle-nodes text-danger"></i> Açık
                Bulutlar
              </a>
            </li>
          </ul>
          <hr className="text-light" />
          <span class="navbar-brand text-light mb-0 h1">CommAyarlar</span>
          <ul class="list-group">
            <li class="text-white border-0 bg-dark list-group-item">
              <a href="" className="btn btn-outline-light border-0">
                <i class="fa-solid fa-gears text-danger"></i> Genel Ayarlar
              </a>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <a href="" className="btn btn-outline-light border-0">
                <i class="fa-solid fa-user-gear text-danger"></i> Profil
                Ayarları
              </a>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <a href="" className="btn btn-outline-light border-0">
                <i class="fa-solid fa-users-gear text-danger"></i> Topluluk
                Ayarları
              </a>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <a href="" className="btn btn-outline-light border-0">
                <i class="fa-solid fa-cloud-meatball text-danger"></i> Bulut
                Ayarları
              </a>
            </li>
          </ul>
          <hr className="text-light" />
          <div class="list-group">
            <a
              href="#"
              class="list-group-item list-group-item-action bg-danger"
              aria-current="true"
            >
              <p class="mb-1">
                <i class="fa-solid fa-star text-warning"></i> Premium Hesap
              </p>
              <small>Son geçerlilik Mayıs 15, 2022</small>
            </a>
          </div>
          <hr className="text-light" />
        </div>
        <div className="col-8">
          <div className="container-fluid text-white">
            <Outlet />
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
};

export default HomeLayout;
