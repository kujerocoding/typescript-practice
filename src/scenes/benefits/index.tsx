import Htext from "@/shared/Htext"
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit"

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
      </motion.div>
    </section>
  )
}

export default Benefits