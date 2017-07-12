import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ApiClient from './helper/ApiClient';
import configureStore from './redux/createStore';

import Welcome from './component/Welcome';
import Profile from './page/profile/index';
import Detail from './page/Detail';
import Bill from './page/Bill';
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
                            <Menu.Item key="basic"><Link to="/basic">Basic</Link></Menu.Item>
                            <Menu.Item key="detail"><Link to="/detail">Detail</Link></Menu.Item>
                            <Menu.Item key="bill"><Link to="/bill">Bill</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <div style={{width: '100%', minWidth: 800, background: '#fff'}}>
                    <Layout>
                        <Header style={{background: '#fff'}}>
                            title
                        </Header>
                        <Content>
                            <Breadcrumb style={{margin: '12px 16px'}}>
                                <Breadcrumb.Item>Price Inquiry</Breadcrumb.Item>
                                <Breadcrumb.Item>Inquiry Result</Breadcrumb.Item>
                                <Breadcrumb.Item>Quotation statement</Breadcrumb.Item>
                            </Breadcrumb>
                        </Content>
                        <div style={{height: '100%', overflowY: 'auto', background: '#fff'}}>
                            <Route exact path="/" component={Profile}/>
                            <Route path="/basic" component={Profile}/>
                            <Route path="/detail" component={Detail}/>
                            <Route path="/bill" component={Bill}/>
                        </div>
                    </Layout>
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
