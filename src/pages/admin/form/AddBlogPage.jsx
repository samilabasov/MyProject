import React from 'react'
import { connect } from 'react-redux'
import { addBlog } from '../../../actions/blogaction'
import BlogForm from './BlogForm'

const AddBlogPage = props => {
  return (
    <div>
        <h1 className='text-center'>Add Blog</h1>
        <BlogForm onFormSubmit={(fd)=>{
          props.dispatch(addBlog(fd));
          props.history.push('/dashboard');
        }}/>
        </div>
  )
}

export default connect()(AddBlogPage)