import React from 'react'
const About = () => {
  const imgLinks = [
    {
      link: 'https://www.hcl-software.com/wps/wcm/connect/d59dec68-5053-4c09-b165-c2af8098472d/Al-fattaim.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-d59dec68-5053-4c09-b165-c2af8098472d-oCHX5nc'
    },
    {
      link: 'https://www.hcl-software.com/wps/wcm/connect/a3fce919-f2c4-45a4-897b-88ecbf73c920/bmo.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-a3fce919-f2c4-45a4-897b-88ecbf73c920-oCHXgld'
    },
    {
      link: 'https://www.hcl-software.com/wps/wcm/connect/581d5f37-8aeb-47a7-b0b0-88400e7e34e9/philips.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-581d5f37-8aeb-47a7-b0b0-88400e7e34e9-oCHUSXN'
    },
    {
      link: 'https://www.hcl-software.com/wps/wcm/connect/8a1d2561-58a6-468e-bf77-53892e0437f2/CYlogo.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-8a1d2561-58a6-468e-bf77-53892e0437f2-oCHXx9M'
    },
    {
      link: 'https://www.hcl-software.com/wps/wcm/connect/ad0988a9-d431-45dd-86ab-28bde917ecc4/Fico.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-ad0988a9-d431-45dd-86ab-28bde917ecc4-oCHXGhC'
    },
    {
      link: 'https://www.hcl-software.com/wps/wcm/connect/0058e97f-faf6-4438-b60c-66d5993794ce/Pepsico.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-0058e97f-faf6-4438-b60c-66d5993794ce-oDlv7aM'
    },
    {
      link: 'https://www.hcl-software.com/wps/wcm/connect/a9f7eb52-7116-4d73-acdc-f7022b7c3328/uniden-logo.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-a9f7eb52-7116-4d73-acdc-f7022b7c3328-oCHYf3O'
    }
  ]
  return (
    <div className='about'>
      <h2 style={{ padding: '2rem' }}>About Us</h2>
      <p>We are committed to you. And to making your business more competitive through software that works — for people.<br />
        Our goal is to build stronger relationships with our customers and ensure their long-term success with our software.
      </p>
      <h2 style={{ padding: '2rem' }}>Fueling the Digital+ Economy</h2>
      <p>The future of our economy — and our technology — isn’t just digital.<br />
        It’s Digital+. Digital+ is an enterprise business software ecosystem. It’s integrated technology platforms.
        It’s a rapidly evolving hyperconnected environment, where technology — especially
        software — connects people and organizations so we can work, communicate, collaborate, and do business better and safer.</p>
      <h1 style={{ padding: '2rem' }}><u>Our Clients</u></h1>
      <ul >
        {imgLinks.map((imageLink) => (
          <li >
            <img src={imageLink.link} alt="partner" />
          </li>
        ))}

      </ul>
    </div>
  )
}

export default About