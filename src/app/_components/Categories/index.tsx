import React from 'react'
import Link from 'next/link'

import { Category } from '../../../payload/payload-types'
import CategoryCard from './CategoryCard'

import classess from './index.module.scss'

const Categories = ({ categories }: { categories: Category[] }) => {
  return (
    <section className={classess.container}>
      <div className={classess.titleWrapper}>
        <h3>Shop by Categories</h3>
        <Link href={'/products'}>Show All</Link>
      </div>
      <div className={classess.list}>
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}

export default Categories
