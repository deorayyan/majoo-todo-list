// Cores
import React from 'react';

// Componentss
import Layout from '../views/Layout';
import Board from '../components/Board';
import Slideover from '../components/Slideover';
import Modal from '../components/Modal';

function Main() {
  return (
    <Layout>
      <Board />
      <Slideover />
      <Modal />
    </Layout>
  )
}

export default Main;