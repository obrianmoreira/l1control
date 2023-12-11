'use client'
import MainHero from '@/components/section/hero/mainHero';
import { useState, useEffect } from 'react';
import { Wall } from '@/components/layout/layout';
import SearchBar from '@/components/section/search/search';
import TableBar from '@/components/section/table/table';

export default function Home() {

  const [searchBar, setSearchBar] = useState('*');

  useEffect(() => {
      console.log(searchBar)
  }, [searchBar])

  return (
    <>  
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
            <SearchBar
              onChange={(e) => setSearchBar(e.target.value)}
            />
          </div>
          <div id='table'>
            <TableBar/>
          </div>
        </Wall>
    </>
  )
}