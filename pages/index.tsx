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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
