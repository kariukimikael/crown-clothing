import React from 'react'
import SHOP_DATA from './ShopData'
import { CollectionPreview } from '../../components'

class Shop extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA,
    }
  }
  render() {
    const { collections } = this.state
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}

export default Shop
