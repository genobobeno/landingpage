import React from 'react'

const SignupForm: React.FC = () => {
  return (
    <section className="signup py-20 bg-[#ECEDE7]">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl md:text-4xl font-['Ultra'] text-center text-[#4D3072] mb-8">
          Do you want a sample?
        </h2>
        <div className="bg-[#ECEDE7] rounded-3xl shadow-xl p-4">
          <iframe 
            aria-label="PhD2Pro Landing Page" 
            frameBorder="0" 
            style={{ height: '550px', width: '100%', border: 'none' }}
            src="https://forms.zohopublic.com/helloeugen1/form/PhD2ProLandingPage/formperma/bBcqOVbgS9ZORYCYseVXuso5MyGCAFdBAi6Z1siZsdM"
          />
        </div>
      </div>
    </section>
  )
}

export default SignupForm
  