import { useEffect, useState } from "react"
import ResidentCard from "./ResidentCard"
import { PaginationLogic } from "../utils/pagination"

const ResidentList = ({ residents }) => {
    const [currentPage, setCurrentPage] = useState(1)

    const { pages, residentsInPage } = PaginationLogic(currentPage, residents);

    useEffect(() => {
        setCurrentPage(1)
    }, [residents])

    return (
        <section>
            <section className="grid grid-cols-[repeat(auto-fit,_280px)] justify-center gap-6 
            max-w-[1000px] mx-auto py-10">
                {
                    residentsInPage.map((residentEndpoint) => <ResidentCard key={residentEndpoint} residentEndpoint={residentEndpoint} />)
                }
            </section>

            {/* Paginacion */}
            <ul className="text-lg flex gap-3 justify-center flex-wrap pb-10">
                {
                    pages.map((page) => (
                        <li key={page}>
                            <button
                                className={`hover:bg-[#062226] text-white font-bold py-2 px-4 rounded ${page === currentPage && 'bg-[#062226]'}`}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}
export default ResidentList
