import React from 'react'

export default function Paper(props) {
    return (
        <div>
          <svg width={props.width} viewBox="0 0 60 60"><g fill="none" fill-rule="evenodd"><circle fill={props.color} cx="30" cy="30" r="30"></circle><path d="M39.704 38.826v-2.53h3.27l1.174-1.174v-2.53h1.789l1.174-1.173V28.58l-1.174-1.174h-1.048v-2.53l-1.174-1.173h-8.519l.434-.434v-2.096L34.456 20H22.359L16 26.36v7.28L22.36 40h16.17l1.174-1.174zm-16.73-.307l-5.493-5.493v-6.052l5.493-5.493h10.867l.307.308v.867L33.1 23.704h-5.989v1.481H43.1l.307.308v1.914h-11.11v1.482h13.025l.308.307v1.608l-.308.307H32.296v1.482h10.37v1.914l-.307.308H32.296v1.481h5.926v1.915l-.307.308h-14.94z" fill="#FAF9F8" fill-rule="nonzero"></path></g></svg> 
        </div>
    )
}
