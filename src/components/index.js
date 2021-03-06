import React, { Component } from 'react'
import SortButton from './handleSortButton'
import SearchQuery from './searchQuery'
import Filter from './filterContainer'
import Images from './imagesContainer'
import ImageInformation from './imageInformationContainer'
import app from 'superagent';
import './styles.css'

class Listings extends Component {
  constructor() {
    super()
    this.state = {
      listings: [],
      sortFilter: 'Ascending',
      filterCriterion: 'import_datetime',
      offset: 50,
      searchQuery: '',
      max_favorites_counter: 0,
      favorites: [],
      img: {
        src: 'https://media2.giphy.com/media/8w4UoITqyVRhS/100.gif',
        rating: 'G',
        title: 'black and white umbrella GIF',
        time: '2013-03-20 16:35:50',
        score: '101124.66',
        original: 'https://media0.giphy.com/media/8w4UoITqyVRhS/giphy.gif'
      }
    }
  }

  componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false)
      this.grabGiphyGifs()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false)
  }

  grabGiphyGifs = () => {
    let searchWord = this.state.searchQuery.length > 0 ? `search?q=${this.state.searchQuery}` : 'trending?'
    app
    .get(`http://api.giphy.com/v1/gifs/${searchWord}&api_key=DOSOoJ5LZbbtK8q5iv3Yaxj4qm0D6hxc&limit=100`)
    .end((error, response) => {
      if (error) {
        alert (error)
      } else {
        this.setState({ listings: response.body.data.sort((a, b) => { return a.import_datetime > b.import_datetime ? 1: -1 })})
      }
    })
  }

  onScroll = () => {
    let customSearchGifs = this.state.searchQuery.length > 0 ? `search?q=${this.state.searchQuery}` : `trending?`
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.setState({
        offset: this.state.offset + 4
      })
      app.get(`http://api.giphy.com/v1/gifs/${customSearchGifs}&api_key=DOSOoJ5LZbbtK8q5iv3Yaxj4qm0D6hxc&offset=${this.state.offset}&limit=4`)
      .end((error, response) => {
        if (error) {
          alert (error)
        } else {
          this.setState({
            listings : this.state.sortFilter === 'Ascending' ?
            this.state.listings.concat(response.body.data).sort((a, b) => {return a.import_datetime > b.import_datetime ? 1 : -1}) :
            this.state.listings.concat(response.body.data).sort((a, b) => {return a.import_datetime > b.import_datetime ? -1 : 1})
          })
        };
      })
    }
  }

  handleClick = (e) => {
    console.log('test', e.target)
    let newImg = {
      src: e.target.src,
      original: e.target.dataset.original,
      title: e.target.name,
      altName: e.target.slug,
      time: e.target.dataset.time,
      score: e.target.dataset.score,
      rating: e.target.dataset.rating.toUpperCase(),
    }
    this.setState({
      img: newImg
    })
  }

  handleSort = () => {
    let x = this.state.listings.slice().sort((a, b) => {return a[this.state.filterCriterion] > b[this.state.filterCriterion] ? 1 : -1})
    this.setState({
      listings: this.state.sortFilter === 'Ascending' ? x : x.reverse()
    })
  }

  handleChange = (e) => {
    this.setState({
      sortFilter: e.target.value
    })
  }

  handleTextChange = (e) => {
    this.setState({
      searchQuery: e.target.value
    })
  }

  handleTextSubmission = () => {
    this.grabGiphyGifs()
  }

  handleFavoriteClick = (e) => {
    if (this.state.max_favorites_counter > 5) {
      let newArr = this.state.favorites.slice(), max_favorite_limit = 6
      newArr[this.state.max_favorites_counter%max_favorite_limit] = e.target.dataset.downscale
      this.setState({
        favorites: newArr,
        max_favorites_counter: this.state.max_favorites_counter + 1
      })
    } else {
      this.setState({
        favorites: this.state.favorites.slice().concat([e.target.dataset.downscale]),
        max_favorites_counter: this.state.max_favorites_counter + 1
      })
    }
  }

  handleRadioClick = (e) => {
    this.setState({
      filterCriterion: e.target.value
    })
  }

  handleTrendingClick = (e) => {
    e.preventDefault()
    this.setState({
      searchQuery: ''
    })
    this.grabGiphyGifs()
  }

  onCommentSubmit = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      this.handleTextSubmission()
    }
  }

  render() {
      return (
        <div id='container' >
          <div id='container-top'>
            <div id='container-top-left'>
              <Filter
               sortFilter={this.state.sortFilter}
               filterCriterion={this.state.filterCriterion}
               handleRadioClick={this.handleRadioClick}
               handleChange={this.handleChange}
               handleSort={this.handleSort} />
              <SortButton handleSort={this.handleSort} />
            </div>
            <div id='container-top-right'>
              <SearchQuery
               onChange={this.handleTextChange}
               onKeyDown={this.onCommentSubmit}
               onClick={this.grabGiphyGifs}
               trendingClick={this.handleTrendingClick}
               searchQuery={this.state.searchQuery}/>
            </div>
          </div>

          <div id='container-bottom'>
            <div id='container-bottom-left'>
              <ImageInformation
               information={this.state.img}
               max_favorites_counter={this.state.max_favorites_counter}
               favorites={this.state.favorites}
               handleFavoriteClick={this.handleFavoriteClick} />
            </div>
            <div id='container-bottom-right'>
              <Images
               img={this.state.img}
               listings={this.state.listings}
               handleClick={this.handleClick} />
            </div>
          </div>
        </div>
      )
    }
  }

  export default Listings;
