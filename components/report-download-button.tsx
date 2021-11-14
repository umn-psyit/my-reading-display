import { Button } from "@material-ui/core";
import { usePDF } from "@react-pdf/renderer";
import ReportPDF from "../calculator/report";
import ReactPDF from '@react-pdf/renderer';

interface DownloadButtonProps {
    instance: ReactPDF.UsePDFInstance,
    disabled: boolean
}

function ReportDownloadButton({instance, disabled}: DownloadButtonProps) {
    let buttonText = 'Generating Results PDF';
    let url = '';
    if (instance !== null && instance.url !== null) url = instance.url;
    if (instance !== null && instance.loading === false) buttonText = 'Download Results PDF';
    
    return <Button variant="contained" color="primary"
        disabled={instance === null || instance.loading || disabled}
        href={url}
        download="MyReadingDisplayReport.pdf"
        style={{marginLeft: '1em', marginTop: '1em'}}>
        {buttonText}
    </Button>
};

export default ReportDownloadButton;