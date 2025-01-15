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

import catch_me_1 from '../images/catch_me/1.png'
import catch_me_2 from '../images/catch_me/2.png'
import catch_me_3 from '../images/catch_me/3.png'
import catch_me_4 from '../images/catch_me/4.png'

export const frontendTechnologies = [
    {name: 'React'},
    {name: 'Typescript'},
    {name: 'Node JS'},
    {name: 'Tailwind'},
    {name: 'NextJS'}
]

export const backendTechnologies = [
    {name: 'Go'},
    {name: 'Python (Django)'},
    {name: 'AWS (Lambda, API Gateway, RDS, Cognito, SecretManager)'},
    {name: 'Apache Kafka'},
    {name: 'MySQL'},
    {name: 'Postgresql'},
    {name: 'Redis'}
]

export const otherTechnologies = [
    {name: 'Docker'},
    {name: 'Bash'},
]

export const projectImage = [
    {name: 'CellHome Project', images: [cellhome_image,cellhome_store,cellhome_login,cellhome_product,cellhome_to_cart, cellhome_bag, cellhome_search, cellhome_admin], description: "Developed and organized architecture monolithic Python aplication using Django Rest Framework processing implementation of users, orders, and products, this aplication was implemented to process data storage, and save data in database SQLite. Also I Developed and maintained web aplication using React, Typescript and Tailwind, I Implemented advanced functionalities such as form validation, routing and data visualization. and I Developed user experience to design and implement responsive and dynamic user interfaces." ,link: 'https://github.com/gaelzamora/cellhome_project', technologies: [python, react, tailwind, typescript]},
    {name: 'Catch Me V 1', images: [catch_me_1, catch_me_2, catch_me_3, catch_me_4], description: "I and my work team created a system anti-pest, this system can register and log an owner for his business, You can adds employees in differents branches, and watch if there are pests in your branches, allow hire a technique for delete your problems, also if you are a technique and you have not a job, you can work in our site web!, Tehcniques and Owners can look how much pests there are in a lot branches.", link: 'https://github.com/gaelzamora/pest-control', technologies: [python, react, tailwind, typescript]}
]

export const projects = [
    {name: 'Process Simulator', link: 'https://github.com/gaelzamora/SimuladorProcesos', description: 'A simulator of proccess made in Java.', done: true},
    {name: 'Youtube Clone', link: 'https://github.com/gaelzamora/youtube-clone', description: 'This is a project Frontend made with React, TypeScript and Tailwind.', done: true},
    {name: 'API Ecommerce with all functions', link: 'https://github.com/gaelzamora/gambit', description: 'A system that allow manage your business ecommerce using AWS services such as Lambda, API Gateway, etc. Being a system full-scalable.', done: true},
    {name: 'Microservices with Django', link: 'https://github.com/gaelzamora/microservices', description: 'A system that allow communicate different services beetween them, using services such as auth, blog (posts) and emails.', done: false}
]