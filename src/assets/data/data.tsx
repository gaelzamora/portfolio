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
    {name: 'CellHome Project', images: [cellhome_image,cellhome_store,cellhome_login,cellhome_product,cellhome_to_cart, cellhome_bag, cellhome_search, cellhome_admin], description: "Developed and organized architecture monolithic Python aplication using Django Rest Framework processing implementation of users, orders, and products, this aplication was implemented to process data storage, and save data in database SQLite. Also I Developed and maintained web aplication using React, Typescript and Tailwind, I Implemented advanced functionalities such as form validation, routing and data visualization. and I Developed user experience to design and implement responsive and dynamic user interfaces." ,link: 'https://github.com/gaelzamora/cellhome_project', technologies: [python, react, tailwind, typescript]}
]

export const projects = [
    {name: 'Process Simulator', link: 'https://github.com/gaelzamora/SimuladorProcesos', description: 'A simulator of proccess made in Java.'},
    {name: 'Youtube Clone', link: 'https://github.com/gaelzamora/youtube-clone', description: 'This is a project Frontend made with React, TypeScript and Tailwind.'},
    {name: 'API Ecommerce with all functions', link: 'https://github.com/gaelzamora/gambit', description: 'This project was make with Golang and AWS, It has all functions that an ecommerce must have.'},

]