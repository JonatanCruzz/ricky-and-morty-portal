const PaginationLogic = (currentPage, residents) => {

    if (residents.length === 0) {
        return {
            pages: [1],
            residentsInPage: [],
        }
    }

    const RESIDENTS_PER_PAGE = 20;

    //cantidad total de paginas
    const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

    //residentes que se van a mostrar en la pagina actual
    const sliceEnd = currentPage * RESIDENTS_PER_PAGE;
    const sliceStart = sliceEnd - RESIDENTS_PER_PAGE;
    const residentsInPage = residents.slice(sliceStart, sliceEnd);

    // genereacion de arreglo de las paginas que se vean a mostrar
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return {
        residentsInPage,
        pages,
        totalPages
    }
}

export {
    PaginationLogic
}