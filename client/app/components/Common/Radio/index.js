/**
 *
 * Checkbox
 *
 */

import React from 'react';

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      size: event.target.value
    });
    this.props.handleChangeSubmit(event.target.name, event.target.value);
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <label>
              <input
                name="sorting"
                type="radio"
                value="Newest First"
                checked={this.state.size === "Newest First"}
                onChange={this.handleChange}
              />
              Mas Recientes Primero
            </label>
          </li>

          <li>
            <label>
              <input
                name="sorting"
                type="radio"
                value="Price High to Low"
                checked={this.state.size === "Price High to Low"}
                onChange={this.handleChange}
              />
              Precio más Alto a Mas Bajo
            </label>
          </li>

          <li>
            <label>
              <input
                name="sorting"
                type="radio"
                value="Price Low to High"
                checked={this.state.size === "Price Low to High"}
                onChange={this.handleChange}
              />
              Precio más Bajo a Mas Alto
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default Radio;
