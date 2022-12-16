
import './NightChange.css'

import React, { useState } from 'react'

export default function NightChange() {


    const [select, setSelect] = useState(true)

    function change() {
        if (select === true) {
            setSelect(false)
        } else {
            setSelect(true)
        }
    }


    return (
        <section className={select === true ? 'section' : ' sectionNacht'}>

            <article>
                <p style={select === true ? { color: 'black' } : { color: 'white' }} > {select === true ? 'Es ist Tag! ☀️' : 'Es ist Nacht! 🌑'} </p>
                <button onClick={change} className={select === true ? ' button' : 'button2'} > {select === true ? 'Wechsel zu Nacht' : 'Wechsel zu Tag'}</button>
            </article>

        </section>
    )
}
