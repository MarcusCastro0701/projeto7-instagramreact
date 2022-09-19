const sugestoes = [
    {imgSugestao: "assets/img/bad.vibes.memes.svg", nomeSugestao: "bad.vibes.memes", razaoSugestao: "Segue você"},
    {imgSugestao: "assets/img/chibirdart.svg", nomeSugestao: "chibirdart", razaoSugestao: "Segue você"},
    {imgSugestao: "assets/img/razoesparaacreditar.svg", nomeSugestao: "razoesparaacreditar", razaoSugestao: "Novo no Instagram"},
    {imgSugestao: "assets/img/adorable_animals.svg", nomeSugestao: "adorable_animals", razaoSugestao: "Segue você"},
    {imgSugestao: "assets/img/smallcutecats.svg", nomeSugestao: "smallcutecats", razaoSugestao: "Segue você"}
]

export default function RendSugestoes(){
    return(
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoes.map((fator) => (
                <div class="sugestao">
                    <div class="usuario">
                        <img src={fator.imgSugestao} />
                        <div class="texto">
                            <div class="nome">{fator.nomeSugestao}</div>
                            <div class="razao">{fator.razaoSugestao}</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>
            ))}
        </div>
    )
}