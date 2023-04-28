import React from 'react'

const Footer = () => {
  return (
   <div className='bg-gray-200'>  
   <div className='container max-w-[1440px] px-24 flex justify-between items-center pt-3 pb-6'>
        <img className='w-28 ms-2' src='https://www.ozdilek.com.tr/tr/images/ozl.png' alt=''/>
        <div className='text-[13px] text-gray-600'>© 2023  Özdilek Tüm Hakları Saklıdır.<span className='font-bold text-[#fa8222]'>Gizlilik ve Kişisel Verilerin Korunması Politikamız / Kullanım ve Koşullar</span></div>
   </div>
   </div>
  )
}

export default Footer