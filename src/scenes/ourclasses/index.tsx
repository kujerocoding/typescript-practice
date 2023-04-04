import { ClassType, SelectedPage } from '@/shared/types'
import image1 from '@/assets/images/image1.png'
import image2 from '@/assets/images/image2.png'
import image3 from '@/assets/images/image3.png'
import image4 from '@/assets/images/image4.png'
import image5 from '@/assets/images/image5.png'
import image6 from '@/assets/images/image6.png'
import { motion } from 'framer-motion'
import Htext from '@/shared/Htext'
import Class from './Class'

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam commodi praesentium neque quam placeat officia magni qui obcaecati odio asperiores.",
        image: image1
    },
    {
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam commodi praesentium neque quam placeat officia magni qui obcaecati odio asperiores.",
        image: image2
    },
    {
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam commodi praesentium neque quam placeat officia magni qui obcaecati odio asperiores.",
        image: image3
    },
    {
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam commodi praesentium neque quam placeat officia magni qui obcaecati odio asperiores.",
        image: image4
    },
    {
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam commodi praesentium neque quam placeat officia magni qui obcaecati odio asperiores.",
        image: image5
    },
    {
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam commodi praesentium neque quam placeat officia magni qui obcaecati odio asperiores.",
        image: image6
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className='w-full bg-primary-100 py-40'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div className='mx-auto w-5/6'
             initial="hidden" 
             whileInView="visible" 
             viewport={{once: true, amount: 0.5}} 
             transition={{duration: 0.5}} 
             variants={{hidden: {opacity: 0, x:-50}, visible: {opacity: 1, x:0}}}
            >
                <div className='md:w-3/5'>
                    <Htext>OUR CLASSES</Htext>
                    <p className='py-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates similique provident pariatur error aut enim? Dolor eos, dignissimos explicabo placeat inventore commodi soluta incidunt aliquid aperiam iusto quos quae earum deserunt quidem laborum excepturi reiciendis libero repellat repudiandae? Repellat mollitia laborum cum dignissimos laboriosam rem eveniet reiciendis ea! Odio, neque?</p>
                </div>
            </motion.div>
            <div className='mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {classes.map((item: ClassType, index) => (
                        <Class 
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                         />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses