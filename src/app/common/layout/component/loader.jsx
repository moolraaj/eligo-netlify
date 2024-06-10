'use client'
import React from 'react'
import { ECS } from '../../../../../public/assets/images'
function loading() {
    return (
      <div className="parent_loader">
          <img src={ECS.src} alt={ECS.src} />
        </div>


    )
}

export default loading
