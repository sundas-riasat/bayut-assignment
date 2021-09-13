import React, { useEffect, useState } from 'react'
import Gist from './Gist';
import { dataService } from '../services/dataService'

const GistList = (  ) => {

    const [ gists, setgists ] = useState([]);

    dataService.getData().subscribe(message => {
        setgists(message.value);
    })

    return (
        <div>
             {
                gists && gists.map( (gist, i) => {
                    return <Gist gist={gist} id={i}></Gist>
                 })
            } 
        </div>
    )
}

export default GistList
