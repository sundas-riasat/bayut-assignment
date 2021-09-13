import { useState } from 'react';
import './Gist.css';
const Gist = ({ gist }) => {

    // Logic for number of files and respective string
    let filesLength = Object.keys(gist.files).length;
    let filesString = 'No Files';

    if(filesLength == 1){
        filesString = '1 File';
    } else if (filesLength > 1){
        filesString = filesLength + ' Files';
    }
    return(
        <div className="gist" data-testid="gist">
           <div className="top-nav">
               <div className="title">
                    <a href={gist.owner.html_url} target="blank">
                        <div className="avatar">
                            <img src={gist.owner.avatar_url} />
                        </div>
                    </a>
                    <a href={gist.owner.html_url} target="blank">
                        <div className="name">
                            <p>{ gist.owner.login }</p>
                        </div>
                    </a>
               </div>
               
                <div>
                    <a className="top-nav-link" href={gist.forks_url}><img className="icon" src="imgs/graph-fork.png" /> Forks</a>
                    <a className="top-nav-link" href={gist.comments_url}> <img className="icon" src="imgs/chat.png" />Comments</a>
                    <a className="top-nav-link" href={gist.owner.starred_url} > <img className="icon" src="imgs/star.png" /> Stars</a>
                </div>
           </div>
           <div className="timestamps">
               <p>Created at: {gist.created_at}</p>
               <p>Updated at: {gist.updated_at}</p>
           </div>
           <div className="description">
               <p>{gist.description}</p>
           </div>
           <div className="files">
                <a > { filesString } </a>
           </div>
           <div className="all-files">
               {
                   gist.files && Object.values( gist.files).map( (file) => {
                       return <div key={file.filename}><a href={file.raw_url}>{file.filename}</a></div>
                   })
               }
           </div>
        </div>
    )
}

export default Gist
