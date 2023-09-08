import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import './estilos.css'

const Contador = () => {
    const [puntoFinal, cambiarPuntoFinal] = useState({});

    const Config = {
        apiKey: "AIzaSyCvOp-L5ZeNGpNFD7h1ruPgfGbs8QYWVI8",
        authDomain: "puntuador-squash.firebaseapp.com",
        databaseURL: "https://puntuador-squash-default-rtdb.firebaseio.com",
        projectId: "puntuador-squash",
        storageBucket: "puntuador-squash.appspot.com",
        messagingSenderId: "921442880570",
        appId: "1:921442880570:web:1dce05082963eb4d65f903"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(Config)
    }
    useEffect(() => {
        firebase.database().ref().on('value', (puntos) => {
            const list = [];
            puntos.forEach((punto) => {
                list.push(punto.val())
            })
            cambiarPuntoFinal(list)
            })
        }, []);
    return (
        <div>
            {Array.isArray(puntoFinal) ? puntoFinal.map((partido, index) => {
                console.log(partido)
                    return (
                    <div key={partido+index}>
                        <table className='tabla-squad'>
                            <tbody>
                                {partido.C_INSTANCIA && partido.C_INSTANCIA !== undefined ?
                                <tr className='sign-final'>
                                    <th className='final-row' colSpan="1"></th>
                                    <th className='final-row' colSpan="1"></th>
                                    <th className='final-row' colSpan="1"></th>
                                    <th className='final-row1' colSpan="1">{partido.C_INSTANCIA.replace(/['\\"]+/g, '').toUpperCase()}</th>
                                    <th className='final-row' colSpan="1"></th>
                                    <th className='final-row' colSpan="1"></th>
                                    <th className='final-row' colSpan="1"></th>
                                </tr> :
                                console.log('no hay instancia')
                                }
                                <tr className='squad-pointer'>
                                    <th className='parejas-squad1' colSpan="1">{partido.A_PAREJA1.replace(/['\\"]+/g, '').toUpperCase()}</th>
                                    <th className='saque'>{partido.A_SAQUE1.replace(/['"]+/g, '')}</th>
                                    <th className='set1'>{partido.APAREJA1SET.replace(/['"]+/g, '')}</th>
                                    <th className='separator'><span className='puntos1'>{partido.A_P1_PUNTOS.replace(/['"]+/g, '')}</span>-<span className='puntos1'>{partido.B_P2_PUNTOS.replace(/['"]+/g, '')}</span></th>
                                    <th className='set1'>{partido.BPAREJA2SET.replace(/['"]+/g, '')}</th>
                                    <th className='saque'>{partido.B_SAQUE2.replace(/['"]+/g, '')}</th>
                                    <th className='parejas-squad2' colSpan="1">{partido.B_PAREJA2.replace(/['\\"]+/g, '').toUpperCase()}</th>


                                </tr>
                            </tbody>
                        </table>
                        
                        
                        
                        <table className="tabla-puntos-1" >
                            <tbody>
                                <tr>
                                    <th className="parejas" colSpan="1">{partido.A_PAREJA1.replace(/['\\"]+/g, '').toUpperCase()}</th>
                                    {partido.SAQUE1 !== undefined ?
                                        <th className="saque">{partido.SAQUE1.replace(/['"]+/g, '')}</th> :
                                        <th className="saque"></th>
                                    }
                                    {(partido.A_P1_1SET !== '""' || partido.B_P2_1S !== '""') && partido.A_P1_1SET !== undefined ?
                                        <th className="set">{partido.A_P1_1SET.replace(/['"]+/g, '')}</th>
                                        :
                                        console.log()
                                    }

                                    {(partido.A_P1_2SET !== '""' || partido.B_P2_2S !== '""') && partido.A_P1_2SET !== undefined ?
                                        <th className="set">{partido.A_P1_2SET.replace(/['"]+/g, '')}</th>
                                        :
                                        console.log()
                                    }

                                    {(partido.A_P1_3SET !== '""' || partido.B_P2_3S !== '""') && partido.A_P1_3SET !== undefined ?
                                        <th className="set">{partido.A_P1_3SET.replace(/['"]+/g, '')}</th>
                                        :
                                        console.log()
                                    }

                                    {(partido.A_P1_4SET !== '""' || partido.B_P2_4S !== '""') && partido.A_P1_4SET !== undefined ?
                                        <th className="set">{partido.A_P1_4SET.replace(/['"]+/g, '')}</th>
                                        :
                                        console.log()
                                    }

                                    {(partido.A_P1_5SET !== '""' || partido.B_P2_5S !== '""') && partido.A_P1_5SET !== undefined ?
                                        <th className="set">{partido.A_P1_5SET.replace(/['"]+/g, '')}</th>
                                        :
                                        console.log()
                                    }

                                    {/* {(partido.P1PS !== '""' || partido.P2PS !== '""' || partido.PUNTUACION === '"TBR"')
                                        && (partido.SAQUE1 !== '""' || partido.SAQUE2 !== '""' || partido.P1PS !== '"0"' || partido.P2PS !== '"0"')
                                        && partido.P1PS !== undefined ?
                                        partido.PUNTUACION === '"ORO"' ?
                                            <th className="oro">{partido.P1PS.replace(/['"]+/g, '')}</th> : partido.PUNTUACION === '"TBR"' ?
                                                <th className="tbr">{partido.P1PS.replace(/['"]+/g, '')}</th> :
                                                <th className="puntos">{partido.P1PS.replace(/['"]+/g, '')}</th>

                                        :
                                        console.log()
                                    } */}
                                </tr>
                                <tr>
                                    <th className="parejas" colSpan="1">{partido.B_PAREJA2.replace(/['\\"]+/g, '').toUpperCase()}</th>
                                    {partido.SAQUE2 !== undefined ?
                                        <th className="saque">{partido.SAQUE2.replace(/['"]+/g, '')}</th> :
                                        <th className="saque"></th>
                                    }

                                    {(partido.A_P1_1SET !== '""' || partido.B_P2_1S !== '""') && partido.B_P2_1S !== undefined ?
                                        <th className="set">{partido.B_P2_1S.replace(/['"]+/g, '')}</th>
                                        :
                                        console.log()
                                    }

                                    {(partido.A_P1_2SET !== '""' || partido.B_P2_2S !== '""') && partido.B_P2_2S !== undefined ?
                                        <th className="set">{partido.B_P2_2S.replace(/['"]+/g, '')}</th>
                                        :
                                        console.log()
                                    }

                                    {(partido.A_P1_3SET !== '""' || partido.B_P2_3S !== '""') && partido.B_P2_3S !== undefined ?
                                        <th className="set">{partido.B_P2_3S.replace(/['"]+/g, '')}</th>
                                        :
                                        console.log()
                                    }

                                    {(partido.A_P1_4SET !== '""' || partido.B_P2_4S !== '""') && partido.B_P2_4S !== undefined ?
                                        <th className="set">{partido.B_P2_4S.replace(/['"]+/g, '')}</th>
                                        :
                                        console.log()
                                    }

                                    {(partido.A_P1_5SET !== '""' || partido.B_P2_5S !== '""') && partido.B_P2_5S !== undefined ?
                                        <th className="set">{partido.B_P2_5S.replace(/['"]+/g, '')}</th>
                                        :
                                        console.log()
                                    }

                                    {/* {(partido.P1PS !== '""' || partido.P2PS !== '""' || partido.PUNTUACION === '"TBR"')
                                        && (partido.SAQUE1 !== '""' || partido.SAQUE2 !== '""' || partido.P1PS !== '"0"' || partido.P2PS !== '"0"')
                                        && partido.P2PS !== undefined ?
                                        partido.PUNTUACION === '"ORO"' ?
                                            <th className="oro">{partido.P2PS.replace(/['"]+/g, '')}</th> :
                                            partido.PUNTUACION === '"TBR"' ?
                                                <th className="tbr">{partido.P2PS.replace(/['"]+/g, '')}</th> :
                                                <th className="puntos">{partido.P2PS.replace(/['"]+/g, '')}</th>
                                        :
                                        console.log()
                                    } */}
                                </tr>
                            </tbody>
                        </table>
                    </div>)
                }) :null}
        </div>
    )
}

export default Contador;