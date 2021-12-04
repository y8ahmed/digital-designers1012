import React from 'react'

export default function Scissor(props) {
    return (
        <div>
          <svg width={props.width} viewBox="0 0 60 60"><g fill="none" fill-rule="evenodd"><circle fill={props.color} cx="30" cy="30" r="30"></circle><path d="M46 31.563l-6.104-2.674h5.297l1.177-1.174v-2.837l-1.174-1.174h-13.64v-2.53L30.38 20h-8.02L16 26.36v7.28L22.36 40h10.614l1.111-1.111 1-6.004 8.37 3.215 1.541-.415 1.419-2.455L46 31.563zM44.037 34.4l-.481.13-9.63-3.704-1.211 7.322-.37.37h-9.37l-5.494-5.492v-6.052l5.493-5.493h6.793l.307.308v1.915H26.37v1.481h18.211l.308.308V27.1l-.308.307H35.26v1.063l9.482 4.167.1.37-.804 1.393z" fill="#FAF9F8" fill-rule="nonzero"></path></g></svg>  
        </div>
    )
}