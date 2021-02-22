import React from 'react'
import { database2 } from '../../data/database'

export const HomeScreen = () => {

    const informacion_cuenta = database2();
    console.log("datos", informacion_cuenta);

    return (
        <div>
            <h1>Home</h1>
            <div className="amigos">
                <h1>AMIGOS</h1>
                {JSON.stringify(informacion_cuenta.amigos)}
                {
                    informacion_cuenta.amigos.map( info => {
                        <div>hola</div>
                    })
                }
            </div>
        </div>
    )
}
