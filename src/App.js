import React from 'react';
// import Switch from 'react-router-dom';
import { Route, Link, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Exchanges from './components/Exchanges';
import Cryptocurrencies from './components/Cryptocurrencies'
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';


import './App.css';


const App = () => {
    return (
        <>
            <div className='app'>
                <div className='navbar'>
                    <Navbar />
                </div>
                <div className='main'>
                    <Layout>
                        <div className='routes'>
                            <Routes>
                                <Route path="/" element={<Homepage />} />
                                <Route path="/exchanges" element={<Exchanges />} />
                                <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                                {/* <Route path="/crypto/:coinsId" element={<CryptoDetails />} /> */}
                                <Route path="/news" element={<News />} />
                            </Routes>
                        </div>
                    </Layout>
                    <div className='footer'>
                        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                            CryptoApp <br />
                            All rights reserved.
                        </Typography.Title>
                        <Space>
                            <Link to="/">Home</Link>
                            <Link to="/cryptocurrencies">Cryptocurrency</Link>
                            <Link to="/news">News</Link>
                        </Space>
                    </div>
                </div>
            </div>
        </>


    )
}

export default App
