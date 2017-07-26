import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ApiClient from './helper/ApiClient';
import configureStore from './redux/createStore';

import Template from './Template';
import Profile from './page/profile/index';
import Detail from './page/Detail';
import Bill from './page/Bill';
import Notice from './page/Notice';
import Fleet from './page/Fleet';
import DevTools from "./component/DevTools/DevTools";

import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

// require('../static/js/html2canvas.js');

import './main.css';
const client = new ApiClient();
const store = configureStore(client, window.__INITIAL_STATE__);

class App extends React.Component {

    getStyles(content) {

        const styles = {
            leftNav: {
                height: '100%',
                position: 'fixed',
                zIndex: '1',
            },

            rightContent: {
                marginLeft: content.state.collapsed ? 64 : 200
            }
        };

        return styles;
    }

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            mode: 'inline',
        }
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    };

    render() {

        const styles = this.getStyles(this);
        return (
            <div>
                <div style={styles.leftNav}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                        style={{height: '100%'}}
                    >
                        <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['2']}
                              defaultOpenKeys={['sub1']}>
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user"/><span className="nav-text">User</span></span>}
                            >
                                <Menu.Item key="basic"><Link to="/basic">Basic</Link></Menu.Item>
                                <Menu.Item key="detail"><Link to="/detail">Detail</Link></Menu.Item>
                                <Menu.Item key="bill"><Link to="/bill">Bill</Link></Menu.Item>
                                <Menu.Item key="notice"><Link to="/notice">Notice</Link></Menu.Item>
                                <Menu.Item key="fleet"><Link to="/fleet">Fleet</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                </div>
                <Layout style={styles.rightContent}>
                    <Layout>
                        {/*<Header style={{background: '#fff', padding: 0}}/>*/}
                        <Content style={{margin: '0 16px'}}>
                            <Breadcrumb style={{margin: '12px 0'}}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{background: '#fff', minHeight: 600}}>
                                <Route exact path="/" component={Profile}/>
                                <Route path="/basic" component={Profile}/>
                                <Route path="/detail" component={Detail}/>
                                <Route path="/bill" component={Bill}/>
                                <Route path="/notice" component={Notice}/>
                                <Route path="/template" component={Template}/>
                                <Route path="/fleet" component={Fleet}/>
                            </div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            {/*Ant Design ©2016 Created by Ant UED*/}
                        </Footer>
                    </Layout>
                </Layout>
                {/*<DevTools />*/}
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
