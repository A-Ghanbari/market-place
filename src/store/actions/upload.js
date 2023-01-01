import axios from "axios"
import API_SERVICES from "tools/shared/apis"
import { API_UPLOAD_URL } from "tools/shared/constants"
import { getToken } from "tools/utils"


export async function uploadLargeFile(options) {
    const { onSuccess, onError, file } = options
    const url = `${API_UPLOAD_URL}${API_SERVICES.public.upload.largeFile}&filename=${file.name}&height=800&width=800`

    const fmData = new FormData()
    const config = {
        headers: {
            "content-type": "multipart/form-data",
            "token": getToken(),
        }
    }
    fmData.append("image", file);

    try {
        const res = await axios.post(
            url,
            fmData,
            config
        );
        onSuccess(res.data.data.dataList[0])
    } catch (err) {
        onError({ err });
    }
}