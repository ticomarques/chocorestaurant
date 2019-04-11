import React from 'react'
import Product from './Product'
import {StaticQuery, graphql} from 'gatsby'
import {Section, Title, SectionBanner} from '../../utils'
import styled from 'styled-components'
import {Link} from 'gatsby'

const PRODUCTS = graphql`
    {
        items:allContentfulMenu{
            edges{
                node{
                    id
                    name
                    price
                    ingredients
                    price
                    img{
                        fixed(height:150, width:150){
                            ...GatsbyContentfulFixed_tracedSVG
                        }
                    }
                }
            }
        }
    }
`

const Menu = () => {
  return (
    <Section>
        <Title message="Featured items" title="little taste" />
        <ProductList>
            <StaticQuery 
                query={PRODUCTS}
                render={(data) => {
                    const products = data.items.edges
                    return products.map((item) => {
                            return <Product key={item.node.id} product={item.node} />
                    })
                }}
            />
        </ProductList>
    </Section>
  )
}

const ProductList = styled.div`
    margin: 3rem 0;
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 3rem;
    @media(min-width: 576px){
        grid-template-columns: 95%;
    }
    @media(min-width: 776px){
        grid-template-columns: 80%;
    }
    @media(min-width: 992px){
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
    }
`


export default Menu