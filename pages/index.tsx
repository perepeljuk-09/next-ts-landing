import { Inter } from '@next/font/google'
import { Meta } from '../App/utils/Meta'
import { Header } from '../App/Components/Header/Header'
import { MainBlock } from '../App/Components/MainBlock/MainBlock'
import { Ellipse } from '../App/utils/Ellipse/Ellipse'
import { SectionAbout } from '../App/Components/SectionAbout/SectionAbout'
import { SectionTehn } from '../App/Components/SectionTehn/SectionTehn'
import { SectionContactUs } from '../App/Components/SectionContactUs/SectionContactUs'
import { SectionReview } from '../App/Components/SectionReview/SectionReview'
import { SectionGallery } from '../App/Components/SectionGallery/SectionGallery'
import { Footer } from '../App/Components/Footer/Footer'
import { SectionQuestions } from '../App/Components/SectionQuestions/SectionQuestions'
import { SectionSteps } from '../App/Components/SectionSteps/SectionSteps'
import styles from '../styles/Home.module.scss'
import Star from '../App/utils/Stars/Star'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  function fn1 () {
    const anchors = document.querySelectorAll('a.anchor') 
    anchors.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault()
        const href = link.getAttribute('href')?.substring(1)
        const scrollTarget = document.querySelector(`${href}`)
        const targetCorsTop = scrollTarget?.getBoundingClientRect().top
        scrollBy({
          top: targetCorsTop,
          behavior: 'smooth'
        })
      })
    })
  }

  useEffect(() => {
   fn1()
  }, [])
  return (
    <>
    <Meta title='Главная' description='Описание страницы' />
      <main className={styles.main}>
        <div className={styles.block__ellipsis}>
          <Ellipse/>
          <Ellipse/>
          <Ellipse/>
          <Ellipse/>
          <Ellipse/>
          <Ellipse/>
          <div className={styles.block__stars}>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
          </div>
        </div>
        <div className={styles.container}>
          <Header/>  
          <MainBlock/>
          <SectionAbout/>
          <SectionTehn/>
          <SectionSteps/>
          <SectionQuestions/>
          <SectionReview/>  
          <SectionGallery/>  
          <SectionContactUs/>
        </div>
      <Footer/>
      </main>
    </>
  )
}
