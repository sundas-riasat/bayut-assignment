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
            {
                gists.length <= 0 && <div><h1>No data found for this user. Try another username.</h1></div>
            }
        </div>
    )
}

export default GistList
