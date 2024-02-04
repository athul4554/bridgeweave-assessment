import jsPDF from "jspdf";
import React, { useState } from "react";
import { StudDetails } from "../../context/DataContext";
import { Form } from "react-bootstrap";

const PdfExport = () => {
  const { studCatalog } = StudDetails();
  const [charts, setCharts] = useState(true);
  const [table, setTable] = useState(true);
  const generatePDF = async () => {
    var data = studCatalog.map((stud) => {
      return {
        name: stud?.name,
        age: String(stud?.age),
        city: stud?.city,
        date_of_birth: stud?.date_of_birth,
        totalGrade: String(stud?.totalGrade),
        joinDate: stud?.joinDate,
      };
    });
    var header = [
      "name",
      "age",
      "city",
      "date_of_birth",
      "totalGrade",
      "joinDate",
    ];

    try {
      const doc = new jsPDF();

      doc.setFont("helvetica", "bold");
      doc.setFontSize(35);
      doc.text("Students Overview", 50, 150);

      if (charts) {
        const pieImg = require("../../assets/png/pie.png");
        const lineImg = require("../../assets/png/line.png");
        doc.addPage();
        doc.setFont("helvetica", "bold");
        doc.setFontSize(20);
        doc.text("Students and Grades scored", 20, 20);
        doc.addImage(pieImg, "PNG", 20, 30, 100, 100);
        doc.text("Joiners vs Leavers", 20, 150);
        doc.addImage(lineImg, "PNG", 20, 160, 100, 100);
      }

      // doc.save("my-report.pdf");
      //png
      if (table) {
        doc.addPage();
        doc.text("Students Catalog", 20, 20);
        doc.table(20, 30, data, header, {});
      }
      doc.save("my-report.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };
  return (
    <>
      <div className="w-full">
        <div className="text-xl font-bold text-gray-600">Pdf Content</div>
        <div className="text-base font-medium text-gray-600">
          <div className="flex items-center gap-3 my-3">
            <div className="w-12">Title</div>
            <Form.Check
              type="switch"
              id="switch-title"
              className=""
              checked
              disabled
            />
          </div>
          <div className="flex items-center gap-3 my-3">
            <div className="w-12">Charts</div>
            <Form.Check
              type="switch"
              id="switch-chart"
              className="mt-1"
              checked={charts}
              onChange={() => setCharts((prev) => !prev)}
            />
          </div>
          <div className="flex items-center gap-3 my-3">
            <div className="w-12">Table</div>
            <Form.Check
              type="switch"
              id="switch-table"
              className="mt-1"
              checked={table}
              onChange={() => setTable((prev) => !prev)}
            />
          </div>
          <p className="text-xs text-emerald-500 font-normal">
            Enabled content will be added in PDF*
          </p>
          <div className="w-full">
            <div className="">Comments</div>
            <textarea
              className="border text-sm font-normal rounded p-3 w-full md:w-[70%] h-[8rem] resize-none"
              placeholder="Enter your comment here ..."
            ></textarea>
          </div>
        </div>
        <button
          className="bg-blue-400 text-base font-semibold py-1 px-3 rounded text-white"
          onClick={generatePDF}
        >
          Export PDF
        </button>
      </div>
    </>
  );
};

export default PdfExport;
