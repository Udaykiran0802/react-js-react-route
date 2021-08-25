import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogsData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogsData

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="item-container">
        <img src={imageUrl} className="item-image" alt={`item${id}`} />

        <div className="item-info">
          <p className="item-topic">{topic}</p>

          <p className="item-title">{title}</p>
          <div className="author-info">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
