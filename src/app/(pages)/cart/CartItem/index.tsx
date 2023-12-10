'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Media } from '../../../_components/Media'
import { Price } from '../../../_components/Price'
import { RemoveFromCartButton } from '../../../_components/RemoveFromCartButton'

import classes from './index.module.scss'

const CartItem = ({ product, title, metaImage, qty, addItemToCart }) => {
  const [quantity, setQuantity] = useState(qty)

  const decrementQuantity = () => {
    const updateQty = quantity - 1 ? quantity - 1 : 1
    setQuantity(updateQty)
    addItemToCart({ product, quantity: Number(updateQty) })
  }

  const incrementQuantity = () => {
    const updateQty = quantity + 1
    setQuantity(updateQty)
    addItemToCart({ product, quantity: Number(updateQty) })
  }

  const enterQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updateQty = Number(e.target.value)
    setQuantity(updateQty)
    addItemToCart({ product, quantity: updateQty })
  }

  return (
    <li className={classes.item} key={title}>
      <Link href={`/products/${product.slug}`} className={classes.mediaWrapper}>
        {!metaImage && <span>No Image</span>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media className={classes.media} imgClassName={classes.image} resource={metaImage} fill />
        )}
      </Link>
      <div className={classes.itemDetails}>
        <div className={classes.titleWrapper}>
          <h6>{title}</h6>
          <Price product={product} button={false} />
        </div>
        <div className={classes.quantity}>
          <div className={classes.quantityBtn} onClick={decrementQuantity}>
            <Image
              src="/assets/icons/minus.svg"
              width={24}
              height={24}
              alt="minus"
              className={classes.qtnBt}
            />
          </div>
          <input
            type="text"
            className={classes.quantityInput}
            value={quantity}
            onChange={enterQuantity}
          />
          <div className={classes.quantityBtn} onClick={incrementQuantity}>
            <Image
              src="/assets/icons/plus.svg"
              width={24}
              height={24}
              alt="plus"
              className={classes.qtnBt}
            />
          </div>
        </div>
      </div>

      <div className={classes.subtotalWrapper}>
        <Price product={product} quantity={quantity} button={false} />
        <RemoveFromCartButton product={product} />
      </div>
    </li>
  )
}

export default CartItem
