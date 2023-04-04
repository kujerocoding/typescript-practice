import Htext from "@/shared/Htext"
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import BenefitsPageGraphic from '@/assets/images/BenefitsPageGraphic.png'

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minima?"
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minima?"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minima?"
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{once: true, amount: 0.5}} 
        transition={{delay: 0.2, duration: 0.5}} 
        variants={{hidden: {opacity: 0, x:-50}, visible: {opacity: 1, x:0}}}
        className="md:my-5 md:w-3/5">
          <Htext>MORE THAN JUST GYM</Htext>
          <p className="my-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti omnis qui beatae quisquam temporibus quaerat dolores nobis itaque. Veniam!</p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div className="md:flex mt-5 items-center justify-between gap-8" 
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHIC and DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
         <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-page-graphic" />
         {/* DESCRIPTION */}
         <div>
          {/* TITLE */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <div>
                  <Htext>MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span></Htext>
                </div>
            </div>
          </div>
          {/* DESCRIPTION */}
          <div>
            <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis incidunt aperiam numquam aliquam doloribus rem inventore perferendis alias officiis illum odio sit unde enim excepturi, error sint, deleniti eligendi quam dolor quasi sed aliquid? Vel inventore dolorem aliquam beatae veniam ratione ea illo eum, provident deserunt distinctio consequatur fuga consequuntur?</p>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique maxime vero unde dolore aut repudiandae fugit cumque aliquid, culpa itaque reprehenderit eum quis ratione dolores nemo omnis placeat accusantium sequi! Non dolores voluptatibus porro magni in consequuntur illum laboriosam culpa.</p>
          </div>
          {/* BUTTON */}
          <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now  
              </ActionButton> 
            </div>
          </div>
         </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits