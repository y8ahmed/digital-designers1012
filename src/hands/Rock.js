import React from 'react'

export default function Rock(props) {
    return (
        <div>
          <svg width={props.width} viewBox="0 0 60 60"><g fill="none" fill-rule="evenodd"><circle fill={props.color} cx="30" cy="30" r="30"></circle><path d="M37.048 23.704h-5.492v-2.53L30.38 20h-8.02L16 26.36v7.28L22.36 40h12.096l1.13-1.13 1.48-9.918 1.156-.778v-3.296l-1.174-1.174zm-.307 3.677l-1.056.704-1.481 10.082-.352.352H22.974l-5.493-5.493v-6.052l5.493-5.493h6.793l.307.308v1.915h-2.963v1.481h9.322l.308.308v1.888z" fill="#FAF9F8" fill-rule="nonzero"></path></g></svg>  
        </div>
    )
}
