import React, { Component } from 'react'
import './FAQ.css'



class FAQ extends Component {
      render(){
          return(
            <div className='FAQ'>
            <div id='FAQ-Section' className='scrollbar-FAQ' />
                <div className='faq-header'>FAQ</div>
                <div className='faq-section-title'> How Many Jars Can I Add To My Server?
                    <div className='faq-section-answer'>Each server is permitted 1 jar at a time. The server owner may delete the jar at any time and craete a new one.</div>
                </div>
                <div className='faq-section-title'> Who Can Create/Delete A Jar?
                    <div className='faq-section-answer'>Only the server owner is permitted to create and delte jars in the server. </div>
                </div>
                <div className='faq-section-title'> Who Can View My Messages?
                    <div className='faq-section-answer'>Each server user can view their own messages and nobody elses before the jar is opened. The only exception is that the server owner may view all messages in the jar at any time for review.</div>
                </div>
                <div className='faq-section-title'> Where Do I Get The Message ID To Delete A Message I've Entered?
                    <div className='faq-section-answer'>Perform the '!tiko view messages' command. TikoJar will send you a private DM with you messages and the ID next to them to reference.</div>
                </div>
            </div>
           
          )
      }
  }
  export default FAQ;