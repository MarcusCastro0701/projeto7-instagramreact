import React from 'react';

function Usuario(props){

    let promptNome;
    let promptFoto;

    const [nm, setNm] = React.useState('catana')
    const [ft, setFt] = React.useState('assets/img/catanacomics.svg')
    
    
    

    function mudaNome(){
        promptNome = prompt("Qual o seu nome?");
        setNm(`${promptNome}`)
    }
    
    function mudaFoto(){
        promptFoto = prompt("Qual foto você deseja usar?")
        setFt(`${promptFoto}`)
    }

    
    

    return(
        <div class="usuario">
            <img onClick={mudaFoto} src={ft} />
            <div class="texto">
                <strong>{props.nickUsuario}</strong>
                <span>
                    {nm}
                    <ion-icon onClick={mudaNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
    
}

export default function RendUsuario(){
    return(
        <Usuario nickUsuario = "crazy_doggoXX"/>
    )
}