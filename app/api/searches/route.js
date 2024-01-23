import { ReadSearches } from "@/components/crud/read";
import { CreateSearch } from "@/components/crud/search";


export async function POST(request) {
    const data = await request.json();
    const {searchs} = data;
    console.log(searchs);
    return Response.json('Correctly posted');
}

export async function GET() {
    const searchResult = await ReadSearches();
    return Response.json(searchResult);
}

