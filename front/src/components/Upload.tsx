type UploadProps = {
  name: string;
};

const Upload = ({ name }: UploadProps) => {
  return (
    <div className="p-3 text-xs no-underline">
      <input id="img-upload" type="file" name={name} />
    </div>
  );
};

export default Upload;
