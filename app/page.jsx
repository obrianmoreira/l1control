'use client'
import MainHero from '@/components/section/hero/mainHero';
import { useState, useEffect } from 'react';
import { Wall } from '@/components/layout/layout';
import SearchBar from '@/components/section/search/search';
import TasksPage from '@/components/section/views/read/read';
import Table from '@/components/elements/table/table';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducer from '@/redux/reducer';

export default function Home() {

  const rootReducer = combineReducers({
    reducer,
  });

  const store = configureStore({
    reducer: rootReducer,
  })

  return (
    <>  
      <Provider store={store}>
        <Wall>
          <div id='hero'>
            <MainHero
              title="Pedidos de Serviços Ao L1"
              subtitle="Controle online de pedidos de serviços"
              description="Abaixo é possível pesquisar por serviços, visualizar todos os serviços feitos e pendentes, assim como adicionar novos serviços."
              buttonStyle={{display: "none"}}
            />                
          </div>
          <div id='controls'>
            <SearchBar/>
          </div>
          <div id='table'>
            <TasksPage/>
          </div>
        </Wall>
      </Provider>
    </>
  )
}