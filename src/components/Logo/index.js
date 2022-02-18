import React from 'react'
import Figure from 'react-bootstrap/Figure'
import Logomarca from './../../assets/images/logo_branca.png'

export default function Logo() {
    return (
        <Figure>
            <Figure.Image
                width={180}        
                src={Logomarca} style={{marginTop: 10, marginBottom: 0}}
            />
        </Figure>
    )
}
