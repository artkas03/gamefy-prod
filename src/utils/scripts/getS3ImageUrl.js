const getS3ImageUrl = (gameSlug, size = '') => `https://daklj4c4w9af1.cloudfront.net/${gameSlug}${size ? `-${size}` : ''}.webp`;

export default getS3ImageUrl;