import { useReactToPrint } from "react-to-print";

export function usePrint(ref: any) {
  return useReactToPrint({
    contentRef: ref,
    pageStyle: `
      @page {
        size: A4 landscape;
        margin: 0.5in;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
        .print-container {
          font-size: 12px !important;
        }
        .print-table {
          width: 100% !important;
          border-collapse: collapse !important;
        }
        .print-table th,
        .print-table td {
          padding: 2px 4px !important;
          font-size: 12px !important;
          border: 1px solid #000 !important;
        }
        .category-title {
          font-weight: bold;
        }
        .no-print {
          display: none !important;
        }
      }
    `,
  });
}
