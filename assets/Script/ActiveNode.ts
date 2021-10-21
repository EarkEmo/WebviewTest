
import { _decorator, Component, Node, EventMouse } from 'cc';
const { ccclass, property } = _decorator;


 
@ccclass('ActiveNode')
export class ActiveNode extends Component {
    
    @property(Node)
    webViewNode : Node = null!

    ToggleWebView()
    {
        
            this.webViewNode.active = !this.webViewNode.active
        
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}


