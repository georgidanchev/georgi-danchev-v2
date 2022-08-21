import "lazysizes"

const responsiveImage = (props) => {
  const { alt, public_id, code, image_class } = props

  return (
    <img
      className={`${image_class} lazyload`}
      data-sizes="auto"
      src={`https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_900/${code}/${public_id}.jpg`}
      data-srcset={`
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_360/${code}/${public_id}.jpg 360w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_590/${code}/${public_id}.jpg 590w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_900/${code}/${public_id}.jpg 900w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_1413/${code}/${public_id}.jpg 1413w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_1748/${code}/${public_id}.jpg 1748w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_2153/${code}/${public_id}.jpg 2153w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_2460/${code}/${public_id}.jpg 2460w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_2769/${code}/${public_id}.jpg 2769w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_3070/${code}/${public_id}.jpg 3070w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_3342/${code}/${public_id}.jpg 3342w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_3840/${code}/${public_id}.jpg 3840w,
      `}
      alt={alt}
    />
  )
}

export default responsiveImage
