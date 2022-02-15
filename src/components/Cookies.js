import React from "react"
import CookieConsent from "react-cookie-consent"
import "bootstrap/dist/css/bootstrap.min.css"
const Cookies = () => {

    return(
        <CookieConsent
            location='bottom'
            buttonText='Aceitar'
            cookieName='cookie'
            style={{ 
                background: '#957841',
                justifyContent: 'center',
                alignItems: 'center',
                borderTop: '1px solid #C2A257'
            }}
            contentStyle={{
                fontFamily: 'rM, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontSize: '11px',
                lineHeight: '15px',
                color: '#fff',
                maxWidth: 'fit-content',
                textAlign: 'justify'
            }}
            buttonStyle={{ 
                color: '#fff',
                background: '#C2A257',
                fontFamily: 'rM, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontSize: '11px',
                lineHeight: '15px',
                padding: '10px 20px'
            }}
            expires={31}
        >
            Este site utiliza cookies para permitir uma melhor experiência por parte do utilizador. Ao navegar no site estará a consentir a sua utilização.
        </CookieConsent>
    )
}

export default Cookies