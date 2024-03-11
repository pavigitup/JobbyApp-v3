import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import './index.css'
import Header from '../Header'

class Jobs extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="jobs-con">
          <div>
            <div className="search-con">
              <label htmlFor="searchInput">o</label>
              <input
                id="searchInput"
                type="text"
                placeholder="Search"
                className="input-box"
              />
              <button
                type="button"
                aria-label="Search"
                className="search-btn"
                data-testid="searchButton"
              >
                <BsSearch className="search-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
