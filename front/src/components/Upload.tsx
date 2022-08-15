const Upload = ({ name }) => {
  return (
    <div className="p-3 text-xs no-underline">
      <input id="img-upload" type="file" name={name} /> 
    </div>
  )
}

export default Upload;
