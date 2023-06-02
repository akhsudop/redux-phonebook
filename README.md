# Phonebook App

This is a simple phonebook app built using React and Redux Toolkit. It allows
you to add new contacts, display them, and delete contacts using a "delete" key.
The app also utilizes local storage to persist the contact data.

## Technologies Used

- React
- Redux Toolkit

## Redux Toolkit

Redux Toolkit is a package that simplifies the usage of Redux in React
applications. It provides a set of tools and utilities that help streamline the
process of writing Redux code, reducing boilerplate and making it easier to
manage application state. Some key features of Redux Toolkit used in built
process:

- **Redux Toolkit's `configureStore`:** This function combines multiple
  Redux-related setup steps into a single function call, including creating the
  Redux store, applying middleware, and enabling the Redux DevTools Extension.

- **Simplified Redux Slices:** Redux Toolkit encourages the use of "slices" to
  define state and reducers. A slice contains the reducer logic for a specific
  feature or part of the application state, making it easier to manage and
  update state.

- **Immutability and Immer Integration:** Redux Toolkit uses the Immer library
  under the hood, allowing you to write reducers that look like they directly
  mutate state, while automatically generating a new immutable state behind the
  scenes.

- **DevTools Integration:** Redux Toolkit integrates with the Redux DevTools
  Extension, providing a powerful debugging tool for inspecting and manipulating
  the application state.

## Getting Started

To get started with the Phonebook app, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open the app in your browser at `http://localhost:3000`

## Usage

1. Fill in the contact form with the required information.
2. Click the "Add Contact" button to add the contact to the list.
3. The added contacts will be displayed below the contact form.
4. To delete a contact, click the "Delete" button associated with the contact.
   This will remove the contact from the list and delete it from the local
   storage.
