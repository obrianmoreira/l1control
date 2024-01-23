import ReadTasks, { ReadSearches } from "@/components/crud/read";
import SearchTasks, { CreateSearch } from "@/components/crud/search";

export async function POST(request) {
    const data = await request.json();
    const {searchs} = data;
    const searchInput = searchs.searchField;
    CreateSearch(searchInput);
    return Response.json('Correctly posted');
}

export async function GET() {
    const searchResult = await ReadSearches();
    return Response.json(searchResult);
}

