// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {id, headerText, description, className} = bannerCardsList
  const name = `bannerContainer ${className}`

  return (
    <li className={name}>
      <h1 className="heading">{headerText}</h1>
      <p className="paragraph">{description}</p>
      <div id={id}>
        <button className="buttons">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
