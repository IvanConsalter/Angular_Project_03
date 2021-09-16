# <p align="center">Angular Project</p>

This project is based on a course available at [udemy.com](https://www.udemy.com):+1:

:eyes: https://www.udemy.com/course/angular-avancado/ :eyes:

## <p align="center">About the Project</p>

Create a Personal Financial Manager, applying all the basics to create a solid Master / Detail architecture, object-oriented and completely reusable.
See how this architecture can make our life easier when creating CRUD's in our systems and how to component our FrontEnd following the best practices to standardize our interfaces.

## Creating a new Project

- ng new app-my-finances --routing --skip-tests

## Installing the dependencies

- npm install bootstrap@ jquery@3.3.1 --save
- npm install angular-imask@4.1.0 --save
- npm install currency-formatter@1.5.3 --save
- npm install moment@2.22.2 --save
- npm install toastr@2.1.4 --save
- npm install primeng@6.1.5 --save
- npm install primeicons@1.0.0 --save
- npm install chart.js@2.7.3 --save
- npm install angular-in-memory-web-api@0.6.1 --save

In angular.json configure the styles and scripts dependencies

## Creating the category module

- ng g m pages/categories --rounting

## Creating the category-list component

- ng g c pages/categories/category-list

## Creating the category-form component

- ng g c pages/categories/category-form

