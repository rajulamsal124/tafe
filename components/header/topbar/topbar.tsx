"use client";

import Socials from "@/components/social/socialLinks";

const Topbar = () => {
  return (
    <div className="d-flex items-center bg-green-5 py-10">
      <div className="container">
        <div className="row y-gap-5 justify-between items-center">
          <div className="col-auto">
            <div className="d-flex x-gap-40 y-gap-10 items-center">
              <div className="d-flex items-center text-white md:d-none">
                <div className="icon-email mr-10"></div>
                <div className="text13 lh-1">(00) 242 844 39 88</div>
              </div>
              <div className="d-flex items-center text-white">
                <div className="icon-email mr-10"></div>
                <div className="text13 lh-1">hello@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="col-auto">
            <div className="d-flex x-gap-30 y-gap-10">
              <div>
                <div className="d-flex x-gap-20 items-center text-white">
                  <Socials textSize={"text-11"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
