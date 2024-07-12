import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
const request = async (request: NextRequest) => {
    const {data: apiData} = await axios.get("http://127.0.0.1:5000/api/data")
    return NextResponse.json({
        apiData

    })

}

export{
    request as GET
}