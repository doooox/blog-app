import { format } from "date-fns"

const useFormattedDate = (str, outputFormat = 'yyyy-mm-dd hh:mm:ss') => {
    const formattedDate = format(new Date(), outputFormat);
    return formattedDate;
}

export default useFormattedDate