import React from "react";
import GifGallery from "../GifGallery";
import searchIcon from "../GifGallery/assets/search.png";
import { HomeWrapper, SearchBtn, SearchInput, SearchWrapper } from "./Home.style";

class Home extends React.Component {
  static handleInputOnChange(event) {
    console.log('Disabled for now');
  }

  render() {
    const placeHolder = 'Type to search cool GIFs on GIPHY';

    return (
      <HomeWrapper>
        <SearchWrapper>
          <SearchBtn src={searchIcon} />
          <SearchInput
            id='toSearch'
            type='text'
            placeholder={placeHolder}
            onChange={Home.handleInputOnChange.bind(this)} />
        </SearchWrapper>
        <GifGallery imageSize={'small'}/>
      </HomeWrapper>
    );
  }
}

export default Home;
