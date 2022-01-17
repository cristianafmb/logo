import React from "react"
import CookieConsent from "react-cookie-consent"

const Cookies = () => {

    return(
        <CookieConsent
            location='bottom'
            buttonText='Aceitar'
            cookieName='cookie'
            style={{ 
                background: '#eeeae6',
                justifyContent: 'center',
                alignItems: 'center',
                borderTop: '1px solid #000'
            }}
            contentStyle={{
                fontFamily: 'rM, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontSize: '11px',
                lineHeight: '15px',
                color: '#000',
                maxWidth: 'fit-content',
                textAlign: 'justify'
            }}
            buttonStyle={{ 
                color: '#eeeae6',
                background: '#000',
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