import RendUsuario from './Usuario';
import RendSugestoes from './Sugestoes';



export default function RendSidebar(){
    return(
        <div class="sidebar">

            <RendUsuario/>

            <RendSugestoes/>
            

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}