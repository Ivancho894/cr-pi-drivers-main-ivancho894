import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const nearbyPages = 3;
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    const startIndex = Math.max(currentPage - nearbyPages, 0);
    const endIndex = Math.min(startIndex + nearbyPages * 2, totalPages);

    const visiblePages = pages.slice(startIndex, endIndex);
    return (
        <div>
        <ul className="pagination">
        <li onClick={() => onPageChange(currentPage - 1)}>&#9665;</li>
            {visiblePages.map((page) => (
            <li
                key={page}
                className={page === currentPage ? 'active' : ''}
                onClick={() => onPageChange(page)}
            >
                {page}
            </li>
            ))}
            <li onClick={() => onPageChange(currentPage + 1)}>&#9655;</li>
        </ul>
        </div>
    );
    }