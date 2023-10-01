import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import css from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    value: '',
  };

  handleFormSubmite = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className={css.container}>
        <Searchbar onSubmit={this.handleFormSubmite} />
        <ImageGallery value={value} />
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    );
  }
}
