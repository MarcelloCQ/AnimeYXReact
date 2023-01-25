import { useEffect, useState } from 'react';
import { getAnimeIdFull } from '../../services/services';
import './PageWrapper.css';

export const PageWrapper = () => {
  const [anime, setAnime] = useState([]);
  let id = '1';
  useEffect(() => {
    const listaAnime = async() => {
      const response = await getAnimeIdFull(id);
      setAnime(response.data.data);
    };
    listaAnime()
  }, [])
  return (
    <>
      {anime.length > 0 && 
        anime.map( element => (
              <div className='container-pagewrapper'>{element.title}</div>
            )
          )
        
      }
    </>
  )
}
