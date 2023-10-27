import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ThankYou = ({ onContinue, name }) => {
  const generatePDF = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Get the div elements to capture as images
    const content1 = document.getElementById("card-front");
    const content2 = document.getElementById("card-back");

    // Use html2canvas to capture div contents as images
    html2canvas(content1).then((canvas1) => {
      html2canvas(content2).then((canvas2) => {
        // Convert the captured canvases to image data URLs
        const imgData1 = canvas1.toDataURL("image/png");
        const imgData2 = canvas2.toDataURL("image/png");

        // Calculate the image dimensions to fit the PDF
        const imgWidth = 170; // A4 page width in mm
        const pageHeight = 295; // A4 page height in mm
        const imgHeight1 = (canvas1.height * imgWidth) / canvas1.width;
        const imgHeight2 = (canvas2.height * imgWidth) / canvas2.width;

        // Add the images to the PDF
        doc.addImage(imgData1, "PNG", 20, 40, imgWidth, imgHeight1);
        doc.addImage(imgData2, "PNG", 20, 170, imgWidth, imgHeight2);

        // Save or download the PDF
        doc.save(
          `${name.toLowerCase()}_card${Math.floor(Math.random() * 9999)}.pdf`
        );
      });
    });
  };

  return (
    <div className="flex-1 flex lg:justify-start justify-center items-center">
      <div className="flex flex-col gap-4 lg:gap-6 justify-center items-center mt-4">
        <img src="/images/icon-complete.svg" alt="complete" />
        <h1 className="text-5xl lg:text-6xl">THANK YOU!</h1>
        <p>We've added your card details!</p>
        <button
          onClick={onContinue}
          className="w-full bg-Very_dark_violet text-Light_grayish_violet py-2 rounded-md"
        >
          Continue
        </button>
        <button
          onClick={generatePDF}
          className="w-full bg-Very_dark_violet text-Light_grayish_violet py-2 rounded-md"
        >
          Download Pdf
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
