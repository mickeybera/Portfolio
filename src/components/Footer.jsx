import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';
function Footer() {
  return (
    <>
      <hr />
      <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex space-x-4'>
              <a href="https://www.facebook.com/arpan.bera.5623?mibextid=kFxxJD">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/arpanbera475?igsh=eHlzenEwd2FkaGpw">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/arpan-bera-13922a269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin size={24} />
              </a>
              <a href="https://x.com/arpanbera475?t=JMtp2T7Q2XWl8Cw1zxNldg&s=08"><FaTwitter size={24} />
              </a>
            </div>
            <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
              <p className='text-sm'>&copy; 2024 Your Company. All rights reserved.</p>
              <p className='text-sm'>Supportive Partner ❤️ Arpan</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
