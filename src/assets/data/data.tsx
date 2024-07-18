import python from '../images/icons8-python-48.png'
import react from '../images/icons8-react-40.png'
import typescript from '../images/icons8-typescript-48.png'
import tailwind from '../images/icons8-viento-de-cola-css-48.png'
import cellhome_image from '../images/cellhome/cellhomeImage.png'
import cellhome_admin from '../images/cellhome/cellhome-admin.png'
import cellhome_bag from '../images/cellhome/cellhome-bag.png'
import cellhome_login from '../images/cellhome/cellhome-login.png'
import cellhome_product from '../images/cellhome/cellhome-product.png'
import cellhome_search from '../images/cellhome/cellhome-search.png'
import cellhome_store from '../images/cellhome/cellhome-store.png'
import cellhome_to_cart from '../images/cellhome/cellhome-to-cart.png'

export const frontendTechnologies = [
    {name: 'React'},
    {name: 'Typescript'},
    {name: 'Tailwind'},
    {name: 'NextJS'}
]

export const backendTechnologies = [
    {name: 'Golang'},
    {name: 'Python (Django)'},
    {name: 'AWS (Lambda, API Gateway, RDS, Cognito, SecretManager)'},
    {name: 'MySQL'},
    {name: 'SQLite'}
]

export const otherTechnologies = [
    {name: 'Git'},
    {name: 'Docker'}    
]

export const projectImage = [
    {name: 'CellHome Project', images: [cellhome_image,cellhome_store,cellhome_login,cellhome_product,cellhome_to_cart, cellhome_bag, cellhome_search, cellhome_admin], description: "This project was inspired in Apple Website, has a method payment with Paypal, you can ADD products, EDIT products and DELETE products with admin account, also can to buy items, to add your address and save your information for future purchases, all the code is on Github." ,link: 'https://github.com/gaelzamora/cellhome_project', technologies: [python, react, tailwind, typescript]}
]

export const projects = [
    {name: 'Process Simulator', link: '', description: 'A simulator of proccess made in Java.'},
    {name: 'Youtube Clone', link: '', description: 'This is a project Frontend made with React, TypeScript and Tailwind.'},
    {name: 'API Ecommerce with all functions', link: '', description: 'This project was make with Golang and AWS, It has all functions that an ecommerce must have.'},

]