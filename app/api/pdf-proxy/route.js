import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const pdfUrl = searchParams.get('url');

    if (!pdfUrl) {
        return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    try {
        const response = await fetch(pdfUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch PDF: ${response.statusText}`);
        }

        const contentType = response.headers.get('content-type') || 'application/pdf';
        const pdfBuffer = await response.arrayBuffer();

        return new NextResponse(pdfBuffer, {
            headers: {
                'Content-Type': contentType,
                'Content-Disposition': 'inline',
                'Cache-Control': 'public, max-age=3600',
            },
        });
    } catch (error) {
        console.error('PDF Proxy Error:', error);
        return NextResponse.json({ error: 'Failed to fetch PDF' }, { status: 500 });
    }
}
