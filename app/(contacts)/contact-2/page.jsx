







import Faq from '@/components/common/Faq'
import Preloader from '@/components/common/Preloader'

import ContactTwo from '@/components/contacts/ContactTwo'

import FooterTwo from '@/components/layout/footers/FooterOne'
import Header from '@/components/layout/headers/Header'
import React from 'react'
export const metadata = {
  title: 'Contact-2 || Tafegippsland - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Tafegippsland, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>

        <Header/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            

            <ContactTwo/>
            <Faq/>

           
            
            <FooterTwo/>
        </div>

    </div>
  )
}

