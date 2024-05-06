import html2canvas from "html2canvas";

const handleImageDownload = async () => {
  const element = document.getElementById("print")!,
    canvas = await html2canvas(element),
    data = canvas.toDataURL("image/jpg"),
    link = document.createElement("a");

  link.href = data;
  link.download = "downloaded-image.jpg";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const DownloadPDF = () => {
  return <button onClick={handleImageDownload}> Download JPG </button>;
};

export default DownloadPDF;
