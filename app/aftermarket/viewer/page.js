"use client"
import React, { useState, useEffect, Suspense, useRef, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Document, Page, pdfjs } from 'react-pdf';
import { IoChevronBackOutline, IoChevronForwardOutline, IoAddOutline, IoRemoveOutline, IoArrowBackOutline } from "react-icons/io5";
import { MdFitScreen, MdHeight, MdOutlineAutoStories, MdOutlineViewStream } from "react-icons/md";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ViewerContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const rawUrl = searchParams.get('url');
    const title = searchParams.get('title') || 'PDF Viewer';

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.0);
    const [proxyUrl, setProxyUrl] = useState('');
    const [isDoublePage, setIsDoublePage] = useState(false);
    const [viewModeOverridden, setViewModeOverridden] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [pageInput, setPageInput] = useState('1');
    const [zoomInput, setZoomInput] = useState('100');
    const [pageDimensions, setPageDimensions] = useState({ width: 0, height: 0 });
    const [hasInitiallyFit, setHasInitiallyFit] = useState(false);
    const [isContinuous, setIsContinuous] = useState(true);

    const containerRef = useRef(null);
    const pageRefs = useRef({});

    useEffect(() => {
        if (rawUrl) {
            const encodedUrl = `/api/pdf-proxy?url=${encodeURIComponent(rawUrl)}`;
            setProxyUrl(encodedUrl);
        }
    }, [rawUrl]);

    useEffect(() => {
        const handleResize = () => {
            if (!viewModeOverridden) {
                setIsDoublePage(window.innerWidth >= 1024);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [viewModeOverridden]);

    useEffect(() => {
        setPageInput(pageNumber.toString());
    }, [pageNumber]);

    useEffect(() => {
        setZoomInput(Math.round(scale * 100).toString());
    }, [scale]);

    // Handle scroll sync for continuous mode
    useEffect(() => {
        if (!isContinuous || !containerRef.current) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const p = parseInt(entry.target.getAttribute('data-page'));
                    if (!isNaN(p)) {
                        setPageNumber(p);
                    }
                }
            });
        }, {
            root: containerRef.current,
            threshold: 0.1, // Lower threshold for row grouping
            rootMargin: '-20% 0px -20% 0px'
        });

        const currentAnchors = document.querySelectorAll('.page-anchor');
        currentAnchors.forEach(a => observer.observe(a));

        return () => {
            currentAnchors.forEach(a => observer.unobserve(a));
        };
    }, [isContinuous, numPages, isDoublePage]); // Re-observe if layout changes

    const scrollToPage = (p) => {
        const el = pageRefs.current[p];
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const onPageLoadSuccess = (page) => {
        // base dimensions (unscaled)
        const viewport = page.getViewport({ scale: 1.0 });
        const dims = { width: viewport.width, height: viewport.height };
        setPageDimensions(dims);

        // Auto fit on first load
        if (!hasInitiallyFit) {
            if (window.innerWidth >= 1024) {
                fitHeight(dims);
            } else {
                fitWidth(dims);
            }
            setHasInitiallyFit(true);
        }
    };

    const handlePageInputChange = (e) => {
        setPageInput(e.target.value);
    };

    const handlePageInputBlur = () => {
        const val = parseInt(pageInput);
        if (!isNaN(val) && val >= 1 && val <= numPages) {
            setPageNumber(val);
            if (isContinuous) scrollToPage(val);
        } else {
            setPageInput(pageNumber.toString());
        }
    };

    const handleZoomInputChange = (e) => {
        setZoomInput(e.target.value);
    };

    const handleZoomInputBlur = () => {
        const val = parseInt(zoomInput);
        if (!isNaN(val) && val >= 10 && val <= 500) {
            setScale(val / 100);
        } else {
            setZoomInput(Math.round(scale * 100).toString());
        }
    };

    const fitWidth = useCallback((dims = pageDimensions, overrideIsDoublePage = null) => {
        if (containerRef.current && dims.width > 0) {
            const useDoublePage = overrideIsDoublePage !== null ? overrideIsDoublePage : isDoublePage;
            const padding = window.innerWidth >= 768 ? 64 : 32;
            const containerWidth = containerRef.current.clientWidth - padding;
            const targetWidth = useDoublePage ? containerWidth / 2 : containerWidth;

            // Use actual visual width based on rotation
            const isRotated = rotation % 180 !== 0;
            const actualPageWidth = isRotated ? dims.height : dims.width;

            const newScale = targetWidth / actualPageWidth;
            setScale(newScale);
        }
    }, [pageDimensions, isDoublePage, rotation]);

    const fitHeight = useCallback((dims = pageDimensions) => {
        if (dims.height > 0) {
            // Target 90% of viewport height for a comfortable "fit"
            const targetHeight = window.innerHeight * 0.9;

            // Use actual visual height based on rotation
            const isRotated = rotation % 180 !== 0;
            const actualPageHeight = isRotated ? dims.width : dims.height;

            const newScale = targetHeight / actualPageHeight;
            setScale(newScale);
        }
    }, [pageDimensions, rotation]);

    const toggleViewMode = () => {
        const nextMode = !isDoublePage;
        setIsDoublePage(nextMode);
        setViewModeOverridden(true);
        setHasInitiallyFit(false);
        fitWidth(pageDimensions, nextMode);
    };

    const toggleContinuous = () => {
        setIsContinuous(!isContinuous);
    };

    const rotate = () => {
        setRotation(prev => (prev + 90) % 360);
    };

    const goToPrevPage = (e) => {
        if (e) e.stopPropagation();
        const next = Math.max(pageNumber - (isDoublePage ? 2 : 1), 1);
        setPageNumber(next);
        if (isContinuous) scrollToPage(next);
    };

    const goToNextPage = (e) => {
        if (e) e.stopPropagation();
        const next = pageNumber + (isDoublePage ? 2 : 1);
        if (numPages && next > numPages) return;
        setPageNumber(next);
        if (isContinuous) scrollToPage(next);
    };

    if (!rawUrl) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-4">
                <p className="text-xl font-semibold text-gray-700">No PDF URL provided.</p>
                <button
                    onClick={() => router.back()}
                    className="mt-6 flex items-center gap-2 text-primary hover:underline"
                >
                    <IoArrowBackOutline /> Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-[#2d2d2d]">
            {/* Header / Control Bar */}
            <header className="bg-[#333333] text-white border-b border-[#444444] sticky top-0 z-20 px-2 md:px-4 py-2 flex items-center justify-between shadow-md select-none overflow-hidden">
                <div className="flex items-center gap-2 md:gap-4 shrink-0">
                    <button
                        onClick={() => router.push('/aftermarket')}
                        className="p-1.5 md:p-2 hover:bg-[#444444] rounded-full transition-colors text-gray-300 flex-shrink-0"
                        title="Go Back"
                    >
                        <IoArrowBackOutline size={20} />
                    </button>
                    <h1 className="text-xs md:text-sm font-medium text-gray-200 truncate max-w-[80px] sm:max-w-[120px] md:max-w-xs">{title}</h1>
                </div>

                {/* Advanced Controls Area - scrollable on tiny screens if needed */}
                <div className="flex items-center gap-1 md:gap-3 lg:gap-4 overflow-x-auto no-scrollbar ml-2">
                    {/* Page Counter & Input */}
                    <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-300 font-light shrink-0">
                        <input
                            type="text"
                            value={pageInput}
                            onChange={handlePageInputChange}
                            onBlur={handlePageInputBlur}
                            onKeyDown={(e) => e.key === 'Enter' && handlePageInputBlur()}
                            className="bg-[#1a1a1a] border-none text-white w-8 md:w-12 h-6 md:h-7 px-0 text-center rounded focus:ring-1 focus:ring-primary/50 outline-none text-[10px] md:text-sm"
                        />
                        <span className="opacity-70 text-[10px] md:text-sm"> / {numPages || '--'}</span>
                    </div>

                    <div className="h-4 w-px bg-[#444444] mx-0.5 md:mx-1 shrink-0"></div>

                    {/* Zoom Controls */}
                    <div className="flex items-center gap-0.5 md:gap-1 shrink-0">
                        <button
                            onClick={() => setScale(prev => Math.max(prev - 0.1, 0.1))}
                            className="p-1 md:p-1.5 hover:bg-[#444444] rounded transition-colors text-gray-300"
                            title="Zoom Out"
                        >
                            <IoRemoveOutline size={18} />
                        </button>
                        <div className="flex items-center justify-center bg-[#1a1a1a] rounded px-0 w-8 md:w-12 h-6 md:h-7">
                            <input
                                type="text"
                                value={zoomInput}
                                onChange={handleZoomInputChange}
                                onBlur={handleZoomInputBlur}
                                onKeyDown={(e) => e.key === 'Enter' && handleZoomInputBlur()}
                                className="bg-transparent border-none text-white w-full text-center text-[10px] md:text-sm outline-none font-medium px-0"
                            />
                        </div>
                        <button
                            onClick={() => setScale(prev => Math.min(prev + 0.1, 5.0))}
                            className="p-1 md:p-1.5 hover:bg-[#444444] rounded transition-colors text-gray-300"
                            title="Zoom In"
                        >
                            <IoAddOutline size={18} />
                        </button>
                    </div>

                    <div className="hidden sm:block h-4 w-px bg-[#444444] mx-1 shrink-0"></div>

                    {/* View Mode & Fit & Rotation */}
                    <div className="flex items-center gap-0.5 md:gap-1 shrink-0">
                        <button
                            onClick={() => fitWidth()}
                            className="p-1 md:p-1.5 hover:bg-[#444444] rounded transition-colors text-gray-300"
                            title="Fit Width"
                        >
                            <MdFitScreen size={18} />
                        </button>
                        <button
                            onClick={() => fitHeight()}
                            className="p-1 md:p-1.5 hover:bg-[#444444] rounded transition-colors text-gray-300"
                            title="Fit Height"
                        >
                            <MdHeight size={18} />
                        </button>
                        <div className="h-4 w-px bg-[#444444] mx-0.5 md:mx-1"></div>
                        <button
                            onClick={toggleContinuous}
                            className={`p-1 md:p-1.5 rounded transition-colors ${isContinuous ? 'hover:bg-[#444444] text-gray-300' : 'bg-primary/20 text-primary'}`}
                            title={isContinuous ? "Switch to Flipbook (Page-by-Page)" : "Switch to Continuous Scroll"}
                        >
                            {isContinuous ? <MdOutlineViewStream size={20} /> : <MdOutlineAutoStories size={20} />}
                        </button>
                        <button
                            onClick={toggleViewMode}
                            className={`p-1 md:p-1.5 rounded transition-colors ${isDoublePage ? 'bg-primary/20 text-primary' : 'hover:bg-[#444444] text-gray-300'}`}
                            title={isDoublePage ? "Single Page Layout" : "Two Page (Spread) Layout"}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                className="md:w-[18px] md:h-[18px]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                {isDoublePage
                                    ? <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v15M12 2v15" />
                                    : <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v15" />
                                }
                            </svg>
                        </button>
                        <button
                            onClick={rotate}
                            className="p-1 md:p-1.5 hover:bg-[#444444] rounded transition-colors text-gray-300"
                            title="Rotate 90°"
                        >
                            <svg viewBox="0 0 24 24" width="16" height="16" className="md:w-[18px] md:h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M23 4v6h-6" />
                                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main
                ref={containerRef}
                className="flex-1 flex flex-col items-center overflow-auto custom-scrollbar"
            >
                {/* PDF Area */}
                <div className="pdf-canvas-container flex gap-6 h-fit max-w-full">
                    <Document
                        file={proxyUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={
                            <div className="p-20 flex flex-col items-center justify-center min-h-[500px]">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                                <p className="mt-4 text-gray-400 font-medium tracking-wide text-xs">LOADING...</p>
                            </div>
                        }
                        error={
                            <div className="p-20 text-center flex flex-col items-center justify-center min-h-[500px] text-gray-400">
                                <p className="text-red-400 text-sm font-semibold tracking-widest uppercase">Error Loading PDF</p>
                                <p className="mt-2 text-xs opacity-60">Please try again later</p>
                            </div>
                        }
                    >
                        {isContinuous ? (
                            <div className="flex flex-col gap-8 md:gap-12 items-center w-full p-4 md:p-8">
                                {Array.from(new Array(Math.ceil(numPages / (isDoublePage ? 2 : 1))), (_, i) => {
                                    const p1 = isDoublePage ? i * 2 + 1 : i + 1;
                                    const p2 = isDoublePage ? p1 + 1 : null;

                                    return (
                                        <div
                                            key={`row_${i}`}
                                            className="flex flex-col lg:flex-row gap-6 md:gap-10 justify-center w-fit"
                                        >
                                            <div
                                                ref={el => pageRefs.current[p1] = el}
                                                data-page={p1}
                                                className="page-anchor flex justify-center"
                                            >
                                                <Page
                                                    pageNumber={p1}
                                                    scale={scale}
                                                    rotate={rotation}
                                                    onLoadSuccess={p1 === 1 ? onPageLoadSuccess : undefined}
                                                    renderTextLayer={false}
                                                    renderAnnotationLayer={false}
                                                    className="shadow-[0_0_40px_rgba(0,0,0,0.6)] bg-white max-w-full"
                                                />
                                            </div>
                                            {isDoublePage && p2 && p2 <= numPages && (
                                                <div
                                                    ref={el => pageRefs.current[p2] = el}
                                                    data-page={p2}
                                                    className="page-anchor flex justify-center"
                                                >
                                                    <Page
                                                        pageNumber={p2}
                                                        scale={scale}
                                                        rotate={rotation}
                                                        renderTextLayer={false}
                                                        renderAnnotationLayer={false}
                                                        className="shadow-[0_0_40px_rgba(0,0,0,0.6)] bg-white max-w-full"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="flex flex-col lg:flex-row gap-6 p-4 md:p-8 justify-center">
                                <div className="viewer-page-wrapper transition-all duration-300">
                                    <Page
                                        pageNumber={pageNumber}
                                        scale={scale}
                                        rotate={rotation}
                                        onLoadSuccess={pageNumber === 1 ? onPageLoadSuccess : undefined}
                                        renderTextLayer={false}
                                        renderAnnotationLayer={false}
                                        className="shadow-[0_0_40px_rgba(0,0,0,0.6)] bg-white"
                                    />
                                </div>
                                {isDoublePage && pageNumber + 1 <= numPages && (
                                    <div className="viewer-page-wrapper transition-all duration-300">
                                        <Page
                                            pageNumber={pageNumber + 1}
                                            scale={scale}
                                            rotate={rotation}
                                            renderTextLayer={false}
                                            renderAnnotationLayer={false}
                                            className="shadow-[0_0_40px_rgba(0,0,0,0.6)] bg-white"
                                        />
                                    </div>
                                )}
                            </div>
                        )}
                    </Document>
                </div>
            </main>

            {/* Navigation Overlays (Floating) */}
            <div className="fixed inset-y-0 left-0 flex items-center px-1 md:px-4 pointer-events-none z-30">
                <button
                    onClick={goToPrevPage}
                    disabled={pageNumber <= 1}
                    className="p-2 md:p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all pointer-events-auto disabled:opacity-0 disabled:pointer-events-none backdrop-blur-md border border-white/10 shadow-lg"
                    title="Previous Page"
                >
                    <IoChevronBackOutline size={28} />
                </button>
            </div>
            <div className="fixed inset-y-0 right-0 flex items-center px-1 md:px-4 pointer-events-none z-30">
                <button
                    onClick={goToNextPage}
                    disabled={numPages ? (isDoublePage ? pageNumber + 1 >= numPages : pageNumber >= numPages) : true}
                    className="p-2 md:p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all pointer-events-auto disabled:opacity-0 disabled:pointer-events-none backdrop-blur-md border border-white/10 shadow-lg"
                    title="Next Page"
                >
                    <IoChevronForwardOutline size={28} />
                </button>
            </div>

            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #555;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #666;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .react-pdf__Page__canvas {
          margin: 0 auto;
          display: block !important;
        }
        @media print {
          body { visibility: hidden !important; }
        }
      `}</style>
        </div>
    );
}

export default function PdfViewerPage() {
    return (
        <Suspense fallback={
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#2d2d2d]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        }>
            <ViewerContent />
        </Suspense>
    );
}
