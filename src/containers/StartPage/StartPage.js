import React, { Component } from 'react'
import {
  HorizontalRule,
  NavBar,
} from '../../components'
import { mediaQueries } from '../../styles/common'
import config from '../../config'

import StepsHeader from './StepsHeader/StepsHeader'
import StepsDescription from './StepsDescription/StepsDescription'
import StartForm from './StartForm/StartForm'

const styles = {
  hr: {
    width: '80%',
    height: '4px',
    marginTop: '-2px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 0,
    [mediaQueries.mediumUp]: {
      width: '70%',
      height: '5px',
      marginTop: '-2.5px'
    }
  }
}

class Start extends Component {
  constructor() {
    console.log(config);
    window.intercomSettings = {
      app_id: config.intercomAppKey
    };

    (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/'+window.intercomSettings.intercomAppKey;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()

    super()
  }
  
  render() {
    return (
      <div>
        <NavBar />
        <StepsHeader />
        <HorizontalRule style={styles.hr} />
        <StepsDescription />
        <StartForm />
      </div>
    )
  }
}

export default Start
