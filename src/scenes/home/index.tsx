import { SelectedPage } from '@/shared/types'
import React from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import HomePageText from '@/assets/images/HomePageText.png'
import HomePageGraphic from '@/assets/images/HomePageGraphic.png'
import SponsorRedBull from '@/assets/images/SponsorRedBull.png'
import SponsorForbes from '@/assets/images/SponsorForbes.png'
import SponsorFortune from '@/assets/images/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
      {/* HEADER AND IMAGE */}
      <div>
        {/* MAIN HEADER*/}
        <div>
          {/* HEADER */}
          <div>
              <div>
                <img src={HomePageText} alt="home-page-text" />
              </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus itaque quas iure ipsam. Ea autem neque dolorum, est dolorem blanditiis.</p>
        </div>
        {/* ACTIONS */}
        <div>
          <ActionButton setSelectedPage={setSelectedPage}>
            Join Now
          </ActionButton>
          <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500' 
          onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
          href={`${SelectedPage.ContactUs}`}>
            <p>Learn More</p>
          </AnchorLink>
        </div>
      </div>
    </section>
  )
}

export default Home