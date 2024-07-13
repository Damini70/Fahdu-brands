"use client"
import React, { useEffect,useState} from 'react';
import style from './Modal.module.css';

export default function Modal({isOpen,onClose,children}:{isOpen:boolean;onClose:()=>void;children:React.ReactNode}) {
 useEffect(()=>{

 },[])  
 if(!isOpen) return null;

  return (
    <>
    <div className={style.modalBackdrop}>
    <div className={style.modalContent}>
    {children}
    </div>
    </div>
    </>
  )
}
