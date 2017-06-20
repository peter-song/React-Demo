import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ApiClient from './helper/ApiClient';
import configureStore from './redux/createStore';

import Welcome from './component/Welcome';
import Profile from './component/profile/index';
import Portal from './component/portal/index';
import Published from './page/published/index';
import Quotation from './page/quotation/index';
import Quotation2 from './page/quotation2/index';
import Setting from './page/setting/index';
import OrderDetail from './page/order/Detail';
import DevTools from "./component/DevTools/DevTools";

import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

require('../static/js/html2canvas.js');

import './main.css';
const client = new ApiClient();
const store = configureStore(client, window.__INITIAL_STATE__);

class App extends React.Component {

    state = {
        collapsed: false,
        mode: 'inline',
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    };

    render() {
        return (
            <Layout id="components-layout-demo-side">
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                    style={{minHeight: 800}}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['2']} defaultOpenKeys={['sub1']}>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user"/><span className="nav-text">User</span></span>}
                        >
                            <Menu.Item key="1"><Link to="/basic">Basic</Link></Menu.Item>
                            {/*<Menu.Item key="2"><Link to="/portal">Portal</Link></Menu.Item>*/}
                            <Menu.Item key="3"><Link to="/published">Published</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/quotation">Quotation</Link></Menu.Item>
                            {/*<Menu.Item key="5"><Link to="/quotation2">Quotation2</Link></Menu.Item>*/}
                            <Menu.Item key="setting"><Link to="/setting">Setting</Link></Menu.Item>
                            <Menu.Item key="orderDetail"><Link to="/orderDetail">OrderDetail</Link></Menu.Item>
                        </SubMenu>
                        {/*<SubMenu
                            key="sub2"
                            title={<span><Icon type="team"/><span className="nav-text">Team</span></span>}
                        >
                            <Menu.Item key="44">Team 1</Menu.Item>
                            <Menu.Item key="545">Team 2</Menu.Item>
                        </SubMenu>*/}
                    </Menu>
                </Sider>
                <div style={{width: '100%', minHeight: 800, background: '#fff'}}>
                    <Route exact path="/" component={Portal}/>
                    <Route path="/basic" component={Profile}/>
                    <Route path="/portal" component={Portal}/>
                    <Route path="/published" component={Published}/>
                    <Route path="/quotation" component={Quotation}/>
                    <Route path="/quotation2" component={Quotation2}/>
                    <Route path="/setting" component={Setting}/>
                    <Route path="/orderDetail" component={OrderDetail}/>
                </div>
            </Layout>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router>
                <App />
            </Router>
            {/*<DevTools />*/}
        </div>
    </Provider>,
    document.getElementById('root')
);
