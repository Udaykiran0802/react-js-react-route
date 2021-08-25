import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      imageUrl: data.image_url,
      title: data.title,
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      topic: data.topic,
    }
    this.setState({blogsData: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogsData} = this.state
    const {title, imageUrl, avatarUrl, content, author} = blogsData

    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>
        <div className="author-details">
          <img src={avatarUrl} alt={author} className="author-pic" />
          <p className="details-author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-image" />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
