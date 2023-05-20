<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">helsinki_city_bike_frontend</h3>

<div align="center">

</div>

---

<p align="center"> A web app for journeys made with city bikes in the Helsinki Capital area.

    <br>

</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This is a [pre-assignment for Solita Dev Academy Finland 2023.](https://github.com/solita/dev-academy-2023-exercise)

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
install Nodejs & Typescript if you don't already have on your local machine.
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Install project dependencies

```
npm install
```

run in development

```
npm run dev
```

lint the code

```
npm run lint
```

## 🎈 Usage <a name="usage"></a>

### Front page

The front page of the app is a list of journeys randomly sorted by default.
Each journey includes information about its departure and return/arival station name, departure & return time, durration(mins) and distance(km).

The front page includes forms to search, filter & sort. The search form provides auto completion for the journey's departure and return station names which are both required fields.

To sort, first select the fields you wish to sort and then select the sort order.
To filter, enter either distance or duration to get journeys that are equal or greater than the provided value.

Journeys are fetched 50 at a time and paginated with infinite scrolling.

### Stations page

The stations page is devided into three sections.

On the left is a list of all stations fetched with a limit of 50 and paginated with infinite scrolling.

Click on any station name to see its details which wil appear between the station list and the map. Station details can be filtered by month.

on top of the list section and details section is a search bar with station names auto complete.

On the right is a map showing a single station's location. Select any station from the list of search bar to see its location on the map. Click on the map to see street view of the station's location.

The map is only available to devices with screens larger than 767 pixels.

### Add journey page

This page offers a form to add new journeys. All departure, return, departure & return station names & distance in meters input fields are required. Only journeys with station names stored in the database can be added. Duration of the journey will be calculated by the server.

### Responsiveness

The app is fully responsive. Please feel free to test it on smaller devices.

## 🚀 Deployment <a name = "deployment"></a>

Build for production

```
npm run build
```

Test production build

```
npm run preview
```

Vite react apps are quite easy to deploy. All you need is a distributable build of the project.

Depending on the platform you want to deploy, follow instructions on Vite official page.

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - Package manager
- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - Web Framework

- [Chakra UI](https://chakra-ui.com/) - React component library
- [React-Hook-Form](https://react-hook-form.com/) - React forms manager

- [ApolloClient](https://www.apollographql.com/docs/react/) - GraphQL client library
- [GraphQL](https://graphql.org/) - Server Framework
- [Express](https://expressjs.com/) - Server Framework

Checkout package.json for more details

## ✍️ Authors <a name = "authors"></a>

- [@AhmedKasu](https://github.com/AhmedKasu)
