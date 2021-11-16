import { Button, Tooltip } from "@material-ui/core";
import { usePDF } from "@react-pdf/renderer";
import ReportPDF from "../calculator/report";
import ReactPDF from '@react-pdf/renderer';


interface DownloadButtonProps {
    instance: ReactPDF.UsePDFInstance,
    disabled: boolean
}

function ReportDownloadButton({instance, disabled}: DownloadButtonProps) {
    let buttonText = 'Create Report PDF';
    let url = '';
    if (instance !== null && instance.url !== null) url = instance.url;
    if (instance !== null && !disabled) buttonText = 'Generating Results PDF'
    if (instance !== null && instance.loading === false && !disabled) buttonText = 'Download Results PDF';
    

    return <Button variant="contained" color="primary"
            disabled={instance === null || instance.loading || disabled}
            href={url}
            download="MyReadingDisplayReport.pdf"
            style={{marginLeft: '1em', marginTop: '1em'}}
            >
            {buttonText}
        </Button>
};

export default ReportDownloadButton;