




import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'
import CourseDetailsOne from '@/components/courseSingle/CourseDetailsOne'
import CourseSlider from '@/components/courseSingle/CourseSlider'
import FooterTwo from '@/components/layout/footers/FooterTwo'

import Header from '@/components/layout/headers/Header'
import React from 'react'

export const metadata = {
  title: 'Couese-single-1 || Tafegippsland - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Tafegippsland, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default function page({ params }) {
  <Preloader/>
  return (
    <div  className="main-content  ">
        <Header/>
        <div  className="content-wrapper  js-content-wrapper ">
            <PageLinks/>
            <CourseDetailsOne id={params.id} />
            <CourseSlider/>
            <FooterTwo/>
        </div>


    </div>
  )
}
