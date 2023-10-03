import { useEffect, useState } from "react";

const Paginator = ({ onClick, currentPage, totalRecords, pageSize, paginatorSize }) => {
    const totalPages = Math.ceil(totalRecords / pageSize);
    const [paginatorButtonTexts, setPaginatorButtonTexts] = useState([]);
    if (paginatorSize > totalPages) {
        paginatorSize = totalPages;
    }
    const goToPage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages && pageNumber != currentPage) {
            onClick(pageNumber);
        }
    };

    const currentPageIsHigherThanPaginatorSize = () => currentPage > paginatorSize;
    const paginatorButtonTextsIncludeCurrentPage = () => paginatorButtonTexts.find((paginatorButtonText) => paginatorButtonText == currentPage);

    useEffect(() => {
        if (currentPageIsHigherThanPaginatorSize() && !paginatorButtonTextsIncludeCurrentPage()) {
            setPaginatorButtonTexts([...Array(paginatorSize)].map((index, i) => currentPage + 1 - (paginatorSize - i)));
        } else if (!currentPageIsHigherThanPaginatorSize() && !paginatorButtonTextsIncludeCurrentPage()) {
            setPaginatorButtonTexts([...Array(paginatorSize)].map((index, i) => i + 1));
        }
    }, [currentPage]);

    useEffect(() => {
        setPaginatorButtonTexts([...Array(paginatorSize)].map((index, i) => i + 1));
        onClick(1);
    }, [totalPages]);

    return (
        <nav>
            <ul className="pagination">
                <li className="page-item ">
                    <a
                        className={`page-link text-dark ${(totalPages <= 1 || currentPage === 1) && "disabled"}`}
                        href="#"
                        aria-label="Previous"
                        onClick={() => {
                            console.log("onClick");
                            return goToPage(currentPage - 1);
                        }}
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>

                {paginatorButtonTexts.map((value, i) => (
                    <li className="page-item">
                        <a
                            className={`page-link  text-dark ${currentPage - 1 === i ? "bg-info" : ""}`}
                            href="#"
                            onClick={() => {
                                console.log("onClick");

                                return goToPage(value);
                            }}
                        >
                            {value}
                        </a>
                    </li>
                ))}

                <li className="page-item">
                    <a
                        className={`page-link text-dark ${(totalPages <= 1 || currentPage === totalPages) && "disabled"}`}
                        href="#"
                        aria-label="Next"
                        onClick={() => {
                            console.log("onClick");
                            return goToPage(currentPage + 1);
                        }}
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Paginator;
