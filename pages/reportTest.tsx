import { PDFViewer } from "@react-pdf/renderer";
import { InputValues, OutputValues } from "../calculator/calculate";
import { FurtherChoice } from '../calculator/results';
import ReportPDF from "../calculator/report";

export default function Home() {  
    return (
      <PDFViewer width="100%" height="1000vh">
          <ReportPDF
            input={new InputValues('20/', '', '20/', '', '', '', '', -1, '')}
            output={new OutputValues(false, -1, -1, -1, -1, -1, -1)}
            furtherChoices={new FurtherChoice('', -1)}
            minWidthString=''/>
      </PDFViewer>
    );
  }
  