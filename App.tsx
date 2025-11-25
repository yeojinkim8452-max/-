import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Beans } from './pages/Beans';
import { Subscribe } from './pages/Subscribe';
import { Story } from './pages/Story';
import { Support } from './pages/Support';
import { AiSommelier } from './components/AiSommelier';
import { PageRoute } from './types';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={PageRoute.HOME} element={<Home />} />
          <Route path={PageRoute.BEANS} element={<Beans />} />
          <Route path={PageRoute.SUBSCRIBE} element={<Subscribe />} />
          <Route path={PageRoute.STORY} element={<Story />} />
          <Route path={PageRoute.SUPPORT} element={<Support />} />
        </Routes>
      </Layout>
      <AiSommelier />
    </Router>
  );
};

export default App;