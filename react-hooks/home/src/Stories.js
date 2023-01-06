import React from 'react';
import {useFetch} from './hooks';

function Stories(){
    const stories = useFetch('https://news-proxy-230704.appspot.com/topstories', []);

    return(
        <div className='Stories'>
            <h3>Relevant stories</h3>
            {stories.map(story => {
                return (
                    <div key={story.id}>
                        <a href={story.url}><h4>{story.title}</h4></a>
                        <p>{story.by} - {new Date(story.time*1000).toLocaleString()}</p>
                        <br />
                    </div>
                );
            })}
        </div>
    )
}

export default Stories;