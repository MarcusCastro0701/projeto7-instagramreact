import React from 'react';

function Post(props){
    let [h, setH] = React.useState(true)
    let [b, setB] = React.useState(true)

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUsu} />
                    {props.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img onClick={() => {setH(!h)}} src={props.imgCont} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={(h === true) ? "nada" : "red"} name={(h === true) ? "heart-outline" : "heart"}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={() => {setB(!b) }} name={(b === true) ? "bookmark-outline" : "bookmark"}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/adorable_animals.svg" />
                    <div class="texto">
                        Curtido por <strong>{props.cPor}</strong> e <strong>outras {(h === true) ? props.nCurtidas : props.nCurtidas + 0.001} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}


const infoPosts = [
    {nome: "meowed", 
    imgUsuario:"assets/img/meowed.svg", 
    imgConteudo: "assets/img/gato-telefone.svg", 
    curtidoPor: "respondeai",
    numeroDeCurtidas: parseFloat(100.595)
    },

    {nome: "barked", 
    imgUsuario:"assets/img/barked.svg", 
    imgConteudo: "assets/img/dog.svg", 
    curtidoPor: "adorable_animals",
    numeroDeCurtidas: parseFloat(65.386)
    }
]


export default function Posts() {

    return (
        <div class="posts">

            {infoPosts.map((fator) => <Post nome = {fator.nome} imgUsu = {fator.imgUsuario} imgCont = {fator.imgConteudo} cPor = {fator.curtidoPor} nCurtidas = {fator.numeroDeCurtidas}/>)}

        </div>
    )}
    
