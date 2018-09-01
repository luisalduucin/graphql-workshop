import React from 'react';
// import { graphql } from "react-apollo";
// import gql from "graphql-tag";
import GifCard from '../GifCard'
import { GifCards } from './GifGallery.style';

class GifGallery extends React.Component {
  render() {
    const { obtainGifs } = this.props;

    if (!obtainGifs) return null;

    const { loading, error, gifs } = this.props.obtainGifs;

    if (loading) return <div>Loading ...</div>;
    if (error) return <div>Error...</div>;

    const { imageSize } = this.props;
    let requestedSize;

    if (imageSize === 'small') {
      requestedSize = 'fixed_width_downsampled';
    } else {
      requestedSize = 'downsized_large';
    }

    return (
      <GifCards>
        {gifs.map((gif) => (
          <GifCard
            src={gif.images[requestedSize].url}
            key={gif.id}
          />
        ))}
      </GifCards>
    );
  }
}

// const GIFS_QUERY = gql``;

// export default graphql(GIFS_QUERY, { name: "obtainGifs" })(GifGallery);
export default GifGallery;
