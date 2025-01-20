import Hero from '@/components/Hero'
import React from 'react'
import FeatureProduct from '@/components/FeatureProduct'
import TopCategerious from '@/components/TopCategerious'
import NewStyle from '@/components/NewStyle'
import OurProduct from '@/components/OurProduct'
import CompanyLogo from './companyLogo/page'

export default function Home() {
 
  return (
    <div>
     
      <Hero/>
      <CompanyLogo/>
      <FeatureProduct/>
      <TopCategerious/>
      <NewStyle/>
      <OurProduct/>
    </div>
  )
}

