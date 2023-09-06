import React from "react";
import Image from "next/image";
import Link from "next/link";
import { coursesData } from "@/data/courses"; // Importing data directly

const CourseList = () => {
  return (
    <div className="row y-gap-30 mt-50">
      {coursesData.map((elm, i) => (
        <div key={i} className="col-xl-3 col-lg-4 col-md-6">
          <div className="coursesCard -type-1">
            <div className="relative">
              <div className="coursesCard__image overflow-hidden rounded-8">
                <Image
                  width={510}
                  height={360}
                  className="w-1/1"
                  src={elm.imageSrc}
                  alt="course image"
                />
                {elm.popular && (
                  <div className="coursesCard__image_overlay rounded-8"></div>
                )}
              </div>
              <div className="h-100 pt-15">
                <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                  <Link className="linkCustom" href={`/courses/${elm.id}`}>
                    {elm.title}
                  </Link>
                </div>
                <div className="d-flex x-gap-10 items-center pt-10">
                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <Image
                        width={16}
                        height={17}
                        src="/assets/img/coursesCards/icons/1.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">{`${Math.floor(
                      elm.duration / 60
                    )}h ${Math.floor(elm.duration % 60)}m`}</div>
                  </div>
                </div>
                <div className="coursesCard-footer">
                  <div className="coursesCard-footer__author">
                    <Image
                      width={30}
                      height={30}
                      src={elm.authorImageSrc}
                      alt="author"
                    />
                    <div>{elm.authorName}</div>
                  </div>
                  <div className="coursesCard-footer__price">
                    {elm.paid ? (
                      <>
                        <div>${elm.originalPrice}</div>
                        <div>${elm.discountedPrice}</div>
                      </>
                    ) : (
                      <div>Free</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
