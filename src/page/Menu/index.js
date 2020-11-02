import '../../style/menu.scss'
import { Button } from 'antd';
function Menu(props){
    return (
        <div className="menu-wrap">
            <div shape="circle" className="pub-menu menu-inner">菜单</div>
            <div className="pub-menu menu-inner1">首页</div>
            <div className="pub-menu menu-inner2">待办</div>
            <div className="pub-menu menu-inner3">操作<br/>日志</div>
            <div className="pub-menu menu-inner4">库存<br/>管理</div>
            <div className="pub-menu menu-inner5">日志</div>
        </div>
    )
}
export default Menu