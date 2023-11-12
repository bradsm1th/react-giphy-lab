export default function Results({ gif }) {
  console.log(gif, "GIF(.data)?");
  return (
    <>
      {/* <p>{gif.data}</p> */}
      <div>
        {/* <p>Original image</p> */}
        <img src={gif.images.original.url} />
      </div>
      {/* <p>GIF id: {gif.data.id}</p> */}
      {/* <p>GIF title: {gif.data.title}</p> */}
    </>
  )
}