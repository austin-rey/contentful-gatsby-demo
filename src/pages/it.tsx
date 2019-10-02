import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/Layout'
import Route from '../components/Route'
import CategoriesPage from '../components/CategoriesPage'
import ProductsPage from '../components/ProductsPage'
import ProductPage from '../components/ProductPage'

const App = props => (
	<Layout {...props}>
		<Router>
			<Route path='/it/:locale' component={CategoriesPage} />
			<Route path='/it/:locale/:categoryName' component={ProductsPage} />
			<Route
				path='/it/:locale/:categoryName/:productSlug'
				component={ProductPage}
			/>
		</Router>
	</Layout>
)

export default App