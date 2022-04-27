import React from "react";

const Notice = () => {
  return (
    <>
      <div class="card bg-dark-light-b mb-3">
        <div className="card-header">
          <img
            src="https://raclab.org/wp-content/uploads/2021/07/raclab.png"
            class="rounded feed-profile-img"
            alt="..."
          />
          <span class="card-title ms-3">Raclab - Akif Durdu</span>
        </div>
        <div class="card-body">
          <p class="card-text">
            Labda çalışacak arkdaşlar yarın lab bayram dolayısıyla kapalı
            olacaktır.
          </p>
        </div>
        <div className="card-footer p-2 m-0">
          <div className="row">
            <div className="col">
              <div>
                <a className="text-light border-0 me-1" href="/add-like">
                  <i class="fa-solid fa-thumbs-up"></i>
                </a>
                <span>34</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notice;
