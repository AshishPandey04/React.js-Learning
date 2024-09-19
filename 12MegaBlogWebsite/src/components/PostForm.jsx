import React,{useCallback} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import {Button , Input, RTE,Select } from './index'
import appwriteService from '../appwrite/config'

export default function PostForm({post}) {
    const navigate=useNavigate()
    const {register,handleSubmit,watch,setValue,control,getValues} =useForm({
        defaultValues:{
            title:post?.title||"",
            slug:post?.slug|| "",
            content: post?.content || "",
            status: post?.status || 'active',

        }
    })
    const userData = useSelector(state =>state.user.userData)

    
  return (
    <div>
      
    </div>
  )
}
