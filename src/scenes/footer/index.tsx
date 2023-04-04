
import Logo from '@/assets/images/Logo.png'




const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="logo" />
                <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum suscipit odit quisquam recusandae illum earum optio! Voluptate id fugit et animi inventore quae, error molestiae, neque accusantium, ratione a quisquam?</p>
                <p>Evogym All Rights Reserved</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Lorem, ipsum.</p>
                <p className='my-5'>Lorem ipsum dolor sit.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>Lorem ipsum dolor sit amet.</p>
                <p className='my-5'>(632)425-5555</p>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer