import Stories from './Stories';
import Posts from './Posts';
import RendSidebar from './Sidebar';


export default function Corpo() {
    return (
        
        <div class="corpo">
            <div class="esquerda">
                
                <Stories/>
                <Posts/>
                
            </div>

            <RendSidebar/>
            
        </div>
        
    );
}