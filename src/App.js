import React from 'react'

import { ContextProvider } from './component/Context'

import { Breadcrumb, Layout, theme } from 'antd'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './component/shop/Shop'
import Cart from './component/cart/Cart'
import Checked from './component/checked/Checked'
import Search from './component/search/Search'
import Letter from './component/letter/Letter'
import Medicine from './component/pages/Medicine'
import Sk2 from './component/pages/Sk2'
import MakeOther from './component/pages/MakeOther'
import Haba from './component/pages/Haba'
import Others from './component/pages/Others'
import AllMakeups from './component/pages/AllMakeup'
import Nav from './component/nav/Nav'
import Toptitle from './component/Toptitle'
import GoodSale from './component/pages/Goodsale'
import Shiseido from './component/pages/Shiseido'
import Baby from './component/pages/Baby'

const { Header, Content, Footer, Sider } = Layout
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <ContextProvider>
      <BrowserRouter>
        <Layout>
          <Header>
            <Toptitle />
          </Header>
          <Content
            style={{
              padding: '0 50px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '10px 0',
              }}
            >
              <Breadcrumb.Item>
                <Letter />
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Search />
              </Breadcrumb.Item>
            </Breadcrumb>
            <Layout
              style={{
                padding: '5px 0',
                background: colorBgContainer,
              }}
            >
              <Sider
                style={{
                  background: colorBgContainer,
                  float: 'left',
                }}
                width={200}
                defaultCollapsed={true}
              >
                <Nav />
              </Sider>
              <Content
                style={{
                  padding: '0 24px',
                  minHeight: 200,
                }}
              >
                <Routes>
                  <Route path='/' element={<Shop />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/checked' element={<Checked />} />
                  <Route path='/makeups' element={<AllMakeups />} />
                  <Route path='/medicine' element={<Medicine />} />
                  <Route path='/others' element={<Others />} />
                  <Route path='/makeups/all' element={<AllMakeups />} />
                  <Route path='/makeups/sk2' element={<Sk2 />} />
                  <Route path='/makeups/haba' element={<Haba />} />
                  <Route path='/makeups/shiseido' element={<Shiseido />} />
                  <Route path='/makeups/others' element={<MakeOther />} />
                  <Route path='/goodsale' element={<GoodSale />} />
                  <Route path='/baby' element={<Baby />} />
                </Routes>
              </Content>
            </Layout>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              alignSelf: 'flex-end',
            }}
          >
            Made by 大桔株式会社@2023
          </Footer>
        </Layout>
      </BrowserRouter>
    </ContextProvider>
  )
}
export default App
