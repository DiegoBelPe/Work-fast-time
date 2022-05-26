/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PDF from './PDF';
import NavBarUser from '../components/NavbarUser/NavbarUser';

class Post extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    title: '',
    content: '',
    image: '',
    postSubmitted: false,
  };

  onChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  sunmitPost = (e) => {
    // eslint-disable-next-line react/destructuring-assignment
    if (!this.state.title || !this.state.content) {
      alert('All fields are required!');
      e.preventDefault();
    } else {
      this.setState({
        postSubmitted: true,
      });
    }
  };

  render() {
    return (
      <>
        <NavBarUser />
        { !this.state.postSubmitted ? (

          <form className="m-28 grid gap-5 items-center text-center shadow-lg p-5 bg-blue-200" method="post">
            <fieldset>
              <legend className="text-center text-4xl m-5">Realizar Informe</legend>
              <div className="w-auto mb-6">
                <span className="col-md-1 col-md-offset-2 text-center "><i className="fa fa-user bigicon" /></span>
                <input onChange={this.onChange('title')} name="title" type="text" placeholder="Titulo Informe" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-base" />
              </div>
              <div className="w-auto mb-6">
                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon" /></span>
                <input onChange={this.onChange('image')} name="image" type="date" placeholder="https://" className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <div className="form-group">
                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon" /></span>
                <textarea onChange={this.onChange('content')} className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="content" placeholder="Enter your text here" rows="7" />
              </div>
              <div className="form-group">
                <button type="button" onClick={this.sunmitPost} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">Submit</button>
              </div>

            </fieldset>

          </form>

        ) : (
        // eslint-disable-next-line react/destructuring-assignment
          <PDF title={this.state.title} content={this.state.content} image={this.state.image} />
        )}
      </>
    );
  }
}

export default Post;
