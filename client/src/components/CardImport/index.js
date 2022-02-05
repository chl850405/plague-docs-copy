import React, { useState, useEffect } from "react";

function UploadImage() {
  const [images, setImages] = useState([]);
  // const [imageURLSs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = [];
    images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
    set
  })

  //accessing the files through an objest to be stored in state
  function imageChange(e) {
    setImages([...e.target.files]);
  }
  return (
    <>
    //portal for image upload that can accept ant image type
    <input type="file" multiple accept="image/*" onChange={imageChange}/>
    </>
  )

}

// <label htmlFor="contained-button-file">
//   <Input accept="image/*" id="contained-button-file" multiple type="file" />
//   <Button variant="contained" component="span">
//     Upload
//   </Button>
// </label>
// <label htmlFor="icon-button-file">
//   <Input accept="image/*" id="icon-button-file" type="file" />
//   <IconButton color="primary" aria-label="upload picture" component="span">
//     <PhotoCamera />
//   </IconButton>
// </label>

export default UploadImage;
