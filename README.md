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

## Creating the category service

- ng g s pages/categories/shared/category

## Creating the entry module

- ng g m pages/entries --rounting

## Creating the entry service

- ng g s pages/entries/shared/entry

## Creating the entry-list component

- ng g c pages/entries/entry-list

## Creating the entry-form component

- ng g c pages/entries/entry-form

## Layout

### Reports

![reports-page](https://user-images.githubusercontent.com/50461475/146643960-9d95ec20-a1dc-4c91-8079-80ae41c206e3.png)

### Categories Form

![categories-form-page](https://user-images.githubusercontent.com/50461475/146643958-2b184de8-a1c3-47c7-95c9-8331a8ec9ce8.png)

### Categories List

![categories-list-page](https://user-images.githubusercontent.com/50461475/146643959-66ec22d0-b68b-4d13-bf1b-1e63798ac27b.png)

### Entries Form

![entries-form-page](https://user-images.githubusercontent.com/50461475/146643954-ed97ae8f-5299-4af5-a3a6-c1a085c06cf2.png)

### Entries List

![entries-list-page](https://user-images.githubusercontent.com/50461475/146643956-748a6fb3-fde8-47b1-a4b6-1cbbc7884316.png)
