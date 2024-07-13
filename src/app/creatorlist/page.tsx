import React from 'react';
import style from './Creatorlist.module.css';
import Creator from '@/src/components/creator/Creator';

export default function CreatorList() {
  return (
    <>
    <div className={style.brands_p_section}>
    <div className="new_brands_container">
    <Creator/>
    <Creator/>
    <Creator/>
    <Creator/>
    <Creator/>
    <Creator/>
    </div>
    </div>
    </>
  )
}
