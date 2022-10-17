import React, { useEffect } from 'react'
import Counter from './components/Counter/Counter';
import useGetData from './hooks/use-getData';

function App() {
  let categories = useGetData('https://api.publicapis.org/categories');

  useEffect(() => {
    categories.getData()
  }, [])
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Counter />
      <Counter forward={false} color="red" />

      {
        categories.loading && <p>Loading</p>
      }

      <div>
        {
          categories.data && categories.data.categories.length > 0 ?
            categories.data.categories.map((el, i) => (
              <li key={i}>{el}</li>
            ))
          : null
        }
      </div>
    </div>
  );
}

export default App;
