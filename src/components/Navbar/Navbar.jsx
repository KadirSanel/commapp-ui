import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">CommApp</span>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <Link
                class="btn btn-outline-light border-0"
                aria-current="page"
                to="/home"
              >
                <i class="fa-solid fa-house"></i>
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="btn btn-outline-danger border-0"
                to="/home/communities"
              >
                <i class="fa-solid fa-users"></i>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="btn btn-outline-danger border-0" to="/home/messages">
                <i class="fa-solid fa-envelope"></i>
              </Link>
            </li>
          </ul>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <button class="btn btn-outline-light border-0">
                <i class="fa-solid fa-bell"></i>
              </button>
              <button class="btn btn-outline-light border-0">
                <i class="fa-solid fa-envelope"></i>
              </button>
              <button class="btn btn-outline-light border-0">
                <i class="fa-solid fa-envelope"></i>
              </button>
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
              <Link
                to="/home/profiles"
                className="btn btn-outline-light border-0"
              >
                <i class="fa-solid fa-user text-danger"></i> Profil
              </Link>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <Link
                to="/home/communities"
                className="btn btn-outline-light border-0"
              >
                <i class="fa-solid fa-users text-danger"></i> Topluluklar
              </Link>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <Link
                to="/home/notices"
                className="btn btn-outline-light border-0"
              >
                <i class="fa-solid fa-triangle-exclamation text-danger"></i>{" "}
                Duyurular
              </Link>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <Link
                to="/home/messages"
                className="btn btn-outline-light border-0"
              >
                <i class="fa-solid fa-message text-danger"></i> Mesajlar
              </Link>
            </li>
          </ul>
          <hr className="text-light" />
          <span class="navbar-brand text-light mb-0 h1">CommBulut</span>
          <ul class="list-group">
            <li class="text-white border-0 bg-dark list-group-item">
              <Link
                to="/cloud/private"
                className="btn btn-outline-light border-0"
              >
                <i class="fa-solid fa-cloud text-danger"></i> Kişisel Bulutum
              </Link>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <Link
                to="/cloud/public"
                className="btn btn-outline-light border-0"
              >
                <i class="fa-solid fa-circle-nodes text-danger"></i> Açık
                Bulutlar
              </Link>
            </li>
          </ul>
          <hr className="text-light" />
          <span class="navbar-brand text-light mb-0 h1">CommAyarlar</span>
          <ul class="list-group">
            <li class="text-white border-0 bg-dark list-group-item">
              <Link to="/settings" className="btn btn-outline-light border-0">
                <i class="fa-solid fa-gears text-danger"></i> Genel Ayarlar
              </Link>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <Link
                to="/settings/profile"
                className="btn btn-outline-light border-0"
              >
                <i class="fa-solid fa-user-gear text-danger"></i> Profil
                Ayarları
              </Link>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <Link
                to="/settings/communities"
                className="btn btn-outline-light border-0"
              >
                <i class="fa-solid fa-users-gear text-danger"></i> Topluluk
                Ayarları
              </Link>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <Link
                to="/settings/cloud"
                className="btn btn-outline-light border-0"
              >
                <i class="fa-solid fa-cloud-meatball text-danger"></i> Bulut
                Ayarları
              </Link>
            </li>
          </ul>
          <hr className="text-light" />
          <div class="list-group">
            <Link
              to="/premium"
              class="list-group-item list-group-item-action bg-danger"
              aria-current="true"
            >
              <p class="mb-1">
                <i class="fa-solid fa-star text-warning"></i> Premium Hesap
              </p>
              <small>Son geçerlilik Mayıs 15, 2022</small>
            </Link>
          </div>
          <hr className="text-light" />
        </div>
        <div className="col-8">
          <div className="container text-white m-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
