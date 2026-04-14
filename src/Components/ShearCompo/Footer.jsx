import footer from '../../assets/logo-xl.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center border-b border-white/10 pb-12">
    
          <div className="mb-6 inline-block hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img className='mx-auto max-h-12' src={footer} alt="KeenKeeper Logo" />
          </div>

          <p className='text-gray-300 max-w-xl mx-auto leading-relaxed text-sm md:text-base'>
            Your personal shelf of meaningful connections. <br className="hidden md:block" />
            Browse, tend, and nurture the relationships that matter most.
          </p>

          <div className="mt-10">
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-5'>Follow Our Journey</p>
            <div className="flex justify-center gap-6">
              {[
                { img: instagram, alt: 'instagram' },
                { img: facebook, alt: 'facebook' },
                { img: twitter, alt: 'twitter' }

              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <img src={social.img} alt={social.alt} className="w-5 h-5 opacity-80" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-gray-400">
          <p className="mb-4 md:mb-0">
            &copy; 2026 <span className="text-white font-medium">KeenKeeper</span>. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;